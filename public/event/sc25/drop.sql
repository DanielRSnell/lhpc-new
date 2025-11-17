-- Drop all SC25 registration database objects
-- Run this to clean up before re-running schema.sql

-- Drop the upsert function
DROP FUNCTION IF EXISTS upsert_sc25_registration(
    VARCHAR(255),
    VARCHAR(50),
    VARCHAR(255),
    VARCHAR(255),
    VARCHAR(100),
    VARCHAR(255),
    VARCHAR(10),
    TEXT,
    TEXT,
    VARCHAR(50),
    TEXT,
    VARCHAR(100),
    INTEGER
);

-- Drop the trigger
DROP TRIGGER IF EXISTS update_sc25_registrations_updated_at ON sc25_registrations;

-- Drop the trigger function
DROP FUNCTION IF EXISTS update_updated_at_column();

-- Drop the table (CASCADE will also drop dependent objects)
DROP TABLE IF EXISTS sc25_registrations CASCADE;
