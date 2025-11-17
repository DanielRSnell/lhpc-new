-- SC25 Analytics and Automation Functions
-- Includes abandoned cart detection, lead profiling, and email tracking

-- ============================================================================
-- FUNCTION: Mark Abandoned Cart Email as Sent
-- ============================================================================
CREATE OR REPLACE FUNCTION mark_abandoned_email_sent(
    p_email VARCHAR(255),
    p_email_number INTEGER
)
RETURNS BOOLEAN AS $$
DECLARE
    v_updated BOOLEAN := FALSE;
BEGIN
    p_email := LOWER(TRIM(p_email));

    IF p_email_number = 1 THEN
        UPDATE sc25_registrations
        SET abandoned_email_1_sent_at = CURRENT_TIMESTAMP
        WHERE email = p_email;
        v_updated := FOUND;
    ELSIF p_email_number = 2 THEN
        UPDATE sc25_registrations
        SET abandoned_email_2_sent_at = CURRENT_TIMESTAMP
        WHERE email = p_email;
        v_updated := FOUND;
    ELSIF p_email_number = 3 THEN
        UPDATE sc25_registrations
        SET abandoned_email_3_sent_at = CURRENT_TIMESTAMP
        WHERE email = p_email;
        v_updated := FOUND;
    END IF;

    RETURN v_updated;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- FUNCTION: Get Abandoned Carts for Email 1 (24 hours after last activity)
-- ============================================================================
CREATE OR REPLACE FUNCTION get_abandoned_carts_email_1()
RETURNS TABLE(
    id INTEGER,
    email VARCHAR(255),
    name VARCHAR(255),
    organization VARCHAR(255),
    current_step INTEGER,
    last_activity_at TIMESTAMP WITH TIME ZONE,
    hours_since_activity NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        r.id,
        r.email,
        r.name,
        r.organization,
        r.current_step,
        r.last_activity_at,
        EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - r.last_activity_at)) / 3600 AS hours_since_activity
    FROM sc25_registrations r
    WHERE r.completed = FALSE
        AND r.abandoned_email_1_sent_at IS NULL
        AND r.last_activity_at < CURRENT_TIMESTAMP - INTERVAL '24 hours'
    ORDER BY r.last_activity_at DESC;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- FUNCTION: Get Abandoned Carts for Email 2 (48 hours after email 1)
-- ============================================================================
CREATE OR REPLACE FUNCTION get_abandoned_carts_email_2()
RETURNS TABLE(
    id INTEGER,
    email VARCHAR(255),
    name VARCHAR(255),
    organization VARCHAR(255),
    current_step INTEGER,
    last_activity_at TIMESTAMP WITH TIME ZONE,
    email_1_sent_at TIMESTAMP WITH TIME ZONE,
    hours_since_email_1 NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        r.id,
        r.email,
        r.name,
        r.organization,
        r.current_step,
        r.last_activity_at,
        r.abandoned_email_1_sent_at,
        EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - r.abandoned_email_1_sent_at)) / 3600 AS hours_since_email_1
    FROM sc25_registrations r
    WHERE r.completed = FALSE
        AND r.abandoned_email_1_sent_at IS NOT NULL
        AND r.abandoned_email_2_sent_at IS NULL
        AND r.abandoned_email_1_sent_at < CURRENT_TIMESTAMP - INTERVAL '48 hours'
    ORDER BY r.abandoned_email_1_sent_at DESC;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- FUNCTION: Get Abandoned Carts for Email 3 (72 hours after email 2)
-- ============================================================================
CREATE OR REPLACE FUNCTION get_abandoned_carts_email_3()
RETURNS TABLE(
    id INTEGER,
    email VARCHAR(255),
    name VARCHAR(255),
    organization VARCHAR(255),
    current_step INTEGER,
    last_activity_at TIMESTAMP WITH TIME ZONE,
    email_2_sent_at TIMESTAMP WITH TIME ZONE,
    hours_since_email_2 NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        r.id,
        r.email,
        r.name,
        r.organization,
        r.current_step,
        r.last_activity_at,
        r.abandoned_email_2_sent_at,
        EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - r.abandoned_email_2_sent_at)) / 3600 AS hours_since_email_2
    FROM sc25_registrations r
    WHERE r.completed = FALSE
        AND r.abandoned_email_2_sent_at IS NOT NULL
        AND r.abandoned_email_3_sent_at IS NULL
        AND r.abandoned_email_2_sent_at < CURRENT_TIMESTAMP - INTERVAL '72 hours'
    ORDER BY r.abandoned_email_2_sent_at DESC;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- FUNCTION: Daily Leads Profile (with Stages)
-- ============================================================================
CREATE OR REPLACE FUNCTION get_daily_leads_profile(
    p_date DATE DEFAULT CURRENT_DATE
)
RETURNS TABLE(
    report_date DATE,
    stage VARCHAR(50),
    lead_count BIGINT,
    org_types JSONB,
    sample_leads JSONB
) AS $$
BEGIN
    RETURN QUERY
    WITH daily_leads AS (
        SELECT *,
            CASE
                WHEN completed = TRUE THEN 'Completed'
                WHEN current_step = 2 THEN 'Step 2 - Organization Details'
                WHEN current_step = 1 THEN 'Step 1 - Contact Info'
                ELSE 'Step 3 - Technical Requirements'
            END AS stage
        FROM sc25_registrations
        WHERE DATE(created_at) = p_date
    )
    SELECT
        p_date AS report_date,
        dl.stage,
        COUNT(*)::BIGINT AS lead_count,
        jsonb_object_agg(
            COALESCE(dl.org_type, 'Not Specified'),
            COUNT(*)
        ) FILTER (WHERE dl.org_type IS NOT NULL) AS org_types,
        jsonb_agg(
            jsonb_build_object(
                'email', dl.email,
                'name', dl.name,
                'organization', dl.organization,
                'current_step', dl.current_step
            )
        ) AS sample_leads
    FROM daily_leads dl
    GROUP BY dl.stage
    ORDER BY
        CASE dl.stage
            WHEN 'Completed' THEN 1
            WHEN 'Step 3 - Technical Requirements' THEN 2
            WHEN 'Step 2 - Organization Details' THEN 3
            WHEN 'Step 1 - Contact Info' THEN 4
        END;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- FUNCTION: Weekly Leads Profile (with Stages)
-- ============================================================================
CREATE OR REPLACE FUNCTION get_weekly_leads_profile(
    p_start_date DATE DEFAULT CURRENT_DATE - INTERVAL '7 days',
    p_end_date DATE DEFAULT CURRENT_DATE
)
RETURNS TABLE(
    report_period TEXT,
    stage VARCHAR(50),
    lead_count BIGINT,
    org_types JSONB,
    budget_breakdown JSONB,
    urgency_breakdown JSONB,
    daily_breakdown JSONB
) AS $$
BEGIN
    RETURN QUERY
    WITH weekly_leads AS (
        SELECT *,
            CASE
                WHEN completed = TRUE THEN 'Completed'
                WHEN current_step = 2 THEN 'Step 2 - Organization Details'
                WHEN current_step = 1 THEN 'Step 1 - Contact Info'
                ELSE 'Step 3 - Technical Requirements'
            END AS stage,
            DATE(created_at) AS registration_date
        FROM sc25_registrations
        WHERE DATE(created_at) BETWEEN p_start_date AND p_end_date
    )
    SELECT
        p_start_date::TEXT || ' to ' || p_end_date::TEXT AS report_period,
        wl.stage,
        COUNT(*)::BIGINT AS lead_count,
        jsonb_object_agg(
            COALESCE(wl.org_type, 'Not Specified'),
            COUNT(*)
        ) FILTER (WHERE wl.org_type IS NOT NULL) AS org_types,
        jsonb_object_agg(
            COALESCE(wl.budget, 'Not Specified'),
            COUNT(*)
        ) FILTER (WHERE wl.budget IS NOT NULL) AS budget_breakdown,
        jsonb_object_agg(
            COALESCE(wl.urgency, 'Not Specified'),
            COUNT(*)
        ) FILTER (WHERE wl.urgency IS NOT NULL) AS urgency_breakdown,
        jsonb_object_agg(
            wl.registration_date::TEXT,
            COUNT(*)
        ) AS daily_breakdown
    FROM weekly_leads wl
    GROUP BY wl.stage
    ORDER BY
        CASE wl.stage
            WHEN 'Completed' THEN 1
            WHEN 'Step 3 - Technical Requirements' THEN 2
            WHEN 'Step 2 - Organization Details' THEN 3
            WHEN 'Step 1 - Contact Info' THEN 4
        END;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- FUNCTION: Get Lead Statistics Summary
-- ============================================================================
CREATE OR REPLACE FUNCTION get_lead_statistics()
RETURNS TABLE(
    total_registrations BIGINT,
    completed_registrations BIGINT,
    incomplete_registrations BIGINT,
    completion_rate NUMERIC,
    step_1_only BIGINT,
    step_2_only BIGINT,
    step_3_incomplete BIGINT,
    abandoned_pending_email_1 BIGINT,
    abandoned_pending_email_2 BIGINT,
    abandoned_pending_email_3 BIGINT,
    abandoned_all_emails_sent BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        COUNT(*)::BIGINT AS total_registrations,
        COUNT(*) FILTER (WHERE completed = TRUE)::BIGINT AS completed_registrations,
        COUNT(*) FILTER (WHERE completed = FALSE)::BIGINT AS incomplete_registrations,
        ROUND(
            COUNT(*) FILTER (WHERE completed = TRUE)::NUMERIC /
            NULLIF(COUNT(*)::NUMERIC, 0) * 100,
            2
        ) AS completion_rate,
        COUNT(*) FILTER (WHERE current_step = 1 AND completed = FALSE)::BIGINT AS step_1_only,
        COUNT(*) FILTER (WHERE current_step = 2 AND completed = FALSE)::BIGINT AS step_2_only,
        COUNT(*) FILTER (WHERE current_step >= 3 AND completed = FALSE)::BIGINT AS step_3_incomplete,
        COUNT(*) FILTER (
            WHERE completed = FALSE
            AND abandoned_email_1_sent_at IS NULL
            AND last_activity_at < CURRENT_TIMESTAMP - INTERVAL '24 hours'
        )::BIGINT AS abandoned_pending_email_1,
        COUNT(*) FILTER (
            WHERE completed = FALSE
            AND abandoned_email_1_sent_at IS NOT NULL
            AND abandoned_email_2_sent_at IS NULL
            AND abandoned_email_1_sent_at < CURRENT_TIMESTAMP - INTERVAL '48 hours'
        )::BIGINT AS abandoned_pending_email_2,
        COUNT(*) FILTER (
            WHERE completed = FALSE
            AND abandoned_email_2_sent_at IS NOT NULL
            AND abandoned_email_3_sent_at IS NULL
            AND abandoned_email_2_sent_at < CURRENT_TIMESTAMP - INTERVAL '72 hours'
        )::BIGINT AS abandoned_pending_email_3,
        COUNT(*) FILTER (
            WHERE completed = FALSE
            AND abandoned_email_3_sent_at IS NOT NULL
        )::BIGINT AS abandoned_all_emails_sent
    FROM sc25_registrations;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- EXAMPLE USAGE
-- ============================================================================

-- Get leads ready for first abandoned cart email
-- SELECT * FROM get_abandoned_carts_email_1();

-- Get leads ready for second abandoned cart email
-- SELECT * FROM get_abandoned_carts_email_2();

-- Get leads ready for third abandoned cart email
-- SELECT * FROM get_abandoned_carts_email_3();

-- Mark that email 1 was sent to a specific lead
-- SELECT mark_abandoned_email_sent('john.doe@example.com', 1);

-- Get today's leads profile
-- SELECT * FROM get_daily_leads_profile();

-- Get yesterday's leads profile
-- SELECT * FROM get_daily_leads_profile(CURRENT_DATE - INTERVAL '1 day');

-- Get this week's leads profile
-- SELECT * FROM get_weekly_leads_profile();

-- Get last week's leads profile
-- SELECT * FROM get_weekly_leads_profile(
--     CURRENT_DATE - INTERVAL '14 days',
--     CURRENT_DATE - INTERVAL '7 days'
-- );

-- Get overall statistics
-- SELECT * FROM get_lead_statistics();
