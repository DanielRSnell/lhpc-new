-- SC25 Event Registration Schema
-- Complete database setup including table, indexes, triggers, and upsert function

-- ============================================================================
-- TABLE: sc25_registrations
-- ============================================================================
CREATE TABLE IF NOT EXISTS sc25_registrations (
    id SERIAL PRIMARY KEY,

    -- Contact Information (Step 1)
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50),
    name VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,

    -- Organization & Context (Step 2)
    org_type VARCHAR(100),
    location VARCHAR(255),
    budget VARCHAR(10),

    -- Technical Requirements (Step 3)
    problem TEXT,
    current_solution TEXT,
    compute_location VARCHAR(50),
    compute_amount TEXT,
    urgency VARCHAR(100),

    -- Tracking
    current_step INTEGER DEFAULT 1,
    completed BOOLEAN DEFAULT FALSE,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    -- Constraint: email must be lowercase
    CONSTRAINT email_lowercase CHECK (email = LOWER(email))
);

-- ============================================================================
-- INDEXES
-- ============================================================================

-- Index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_sc25_email ON sc25_registrations(email);

-- Index for tracking incomplete registrations
CREATE INDEX IF NOT EXISTS idx_sc25_completed ON sc25_registrations(completed, current_step);

-- Index for timestamp queries
CREATE INDEX IF NOT EXISTS idx_sc25_created ON sc25_registrations(created_at DESC);

-- ============================================================================
-- TRIGGER: Auto-update updated_at timestamp
-- ============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_sc25_registrations_updated_at
    BEFORE UPDATE ON sc25_registrations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- FUNCTION: upsert_sc25_registration
-- Creates new record or updates existing based on email
-- Automatically tracks progression through steps and marks completion
-- ============================================================================

CREATE OR REPLACE FUNCTION upsert_sc25_registration(
    p_email VARCHAR(255),
    p_phone VARCHAR(50) DEFAULT NULL,
    p_name VARCHAR(255) DEFAULT NULL,
    p_organization VARCHAR(255) DEFAULT NULL,
    p_org_type VARCHAR(100) DEFAULT NULL,
    p_location VARCHAR(255) DEFAULT NULL,
    p_budget VARCHAR(10) DEFAULT NULL,
    p_problem TEXT DEFAULT NULL,
    p_current_solution TEXT DEFAULT NULL,
    p_compute_location VARCHAR(50) DEFAULT NULL,
    p_compute_amount TEXT DEFAULT NULL,
    p_urgency VARCHAR(100) DEFAULT NULL,
    p_step INTEGER DEFAULT 1
)
RETURNS TABLE(
    registration_id INTEGER,
    email_address VARCHAR(255),
    current_step INTEGER,
    is_new BOOLEAN,
    is_completed BOOLEAN
) AS $$
DECLARE
    v_id INTEGER;
    v_is_new BOOLEAN;
    v_completed BOOLEAN;
BEGIN
    -- Normalize email to lowercase
    p_email := LOWER(TRIM(p_email));

    -- Determine if registration is complete (step 3)
    v_completed := (p_step >= 3);

    -- Insert or update registration
    INSERT INTO sc25_registrations (
        email,
        phone,
        name,
        organization,
        org_type,
        location,
        budget,
        problem,
        current_solution,
        compute_location,
        compute_amount,
        urgency,
        current_step,
        completed
    ) VALUES (
        p_email,
        p_phone,
        p_name,
        p_organization,
        p_org_type,
        p_location,
        p_budget,
        p_problem,
        p_current_solution,
        p_compute_location,
        p_compute_amount,
        p_urgency,
        p_step,
        v_completed
    )
    ON CONFLICT (email) DO UPDATE SET
        -- Only update fields if they have values (preserve existing data if new value is NULL)
        phone = COALESCE(EXCLUDED.phone, sc25_registrations.phone),
        name = COALESCE(EXCLUDED.name, sc25_registrations.name),
        organization = COALESCE(EXCLUDED.organization, sc25_registrations.organization),
        org_type = COALESCE(EXCLUDED.org_type, sc25_registrations.org_type),
        location = COALESCE(EXCLUDED.location, sc25_registrations.location),
        budget = COALESCE(EXCLUDED.budget, sc25_registrations.budget),
        problem = COALESCE(EXCLUDED.problem, sc25_registrations.problem),
        current_solution = COALESCE(EXCLUDED.current_solution, sc25_registrations.current_solution),
        compute_location = COALESCE(EXCLUDED.compute_location, sc25_registrations.compute_location),
        compute_amount = COALESCE(EXCLUDED.compute_amount, sc25_registrations.compute_amount),
        urgency = COALESCE(EXCLUDED.urgency, sc25_registrations.urgency),
        -- Always update step to the latest
        current_step = GREATEST(sc25_registrations.current_step, EXCLUDED.current_step),
        -- Mark as completed if step 3 is reached
        completed = sc25_registrations.completed OR EXCLUDED.completed
    RETURNING sc25_registrations.id, sc25_registrations.current_step, sc25_registrations.completed
    INTO v_id, p_step, v_completed;

    -- Determine if this was a new record (based on whether we just created it)
    v_is_new := (SELECT created_at = updated_at FROM sc25_registrations WHERE id = v_id);

    -- Return result
    RETURN QUERY
    SELECT
        v_id,
        p_email,
        p_step,
        v_is_new,
        v_completed;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- EXAMPLE USAGE
-- ============================================================================

-- Step 1: Initial contact information
-- SELECT * FROM upsert_sc25_registration(
--     p_email := 'john.doe@example.com',
--     p_phone := '+1-555-123-4567',
--     p_name := 'John Doe',
--     p_organization := 'Acme Research Labs',
--     p_step := 1
-- );

-- Step 2: Organization details
-- SELECT * FROM upsert_sc25_registration(
--     p_email := 'john.doe@example.com',
--     p_phone := '+1-555-123-4567',
--     p_name := 'John Doe',
--     p_organization := 'Acme Research Labs',
--     p_org_type := 'Research Institution',
--     p_location := 'Austin, TX',
--     p_budget := 'Yes',
--     p_step := 2
-- );

-- Step 3: Technical requirements (completion)
-- SELECT * FROM upsert_sc25_registration(
--     p_email := 'john.doe@example.com',
--     p_phone := '+1-555-123-4567',
--     p_name := 'John Doe',
--     p_organization := 'Acme Research Labs',
--     p_org_type := 'Research Institution',
--     p_location := 'Austin, TX',
--     p_budget := 'Yes',
--     p_problem := 'Need to optimize GPU cluster utilization',
--     p_current_solution := 'Using basic SLURM scheduler',
--     p_compute_location := 'Hybrid',
--     p_compute_amount := '50x H100 GPUs',
--     p_urgency := 'Short-term (1-3 months)',
--     p_step := 3
-- );
