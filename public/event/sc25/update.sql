-- Update script for SC25 registrations table
-- Adds abandoned cart email tracking columns

-- Add columns for tracking abandoned cart emails
ALTER TABLE sc25_registrations
ADD COLUMN IF NOT EXISTS abandoned_email_1_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS abandoned_email_2_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS abandoned_email_3_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS last_activity_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

-- Create index for abandoned cart queries (incomplete registrations)
CREATE INDEX IF NOT EXISTS idx_sc25_abandoned
ON sc25_registrations(completed, last_activity_at)
WHERE completed = FALSE;

-- Create index for email tracking
CREATE INDEX IF NOT EXISTS idx_sc25_email_tracking
ON sc25_registrations(abandoned_email_1_sent_at, abandoned_email_2_sent_at, abandoned_email_3_sent_at);

-- Update trigger to also update last_activity_at on any change
CREATE OR REPLACE FUNCTION update_last_activity()
RETURNS TRIGGER AS $$
BEGIN
    NEW.last_activity_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_sc25_last_activity
    BEFORE UPDATE ON sc25_registrations
    FOR EACH ROW
    WHEN (OLD.current_step IS DISTINCT FROM NEW.current_step OR
          OLD.email IS DISTINCT FROM NEW.email OR
          OLD.name IS DISTINCT FROM NEW.name OR
          OLD.organization IS DISTINCT FROM NEW.organization)
    EXECUTE FUNCTION update_last_activity();

-- Backfill last_activity_at for existing records
UPDATE sc25_registrations
SET last_activity_at = updated_at
WHERE last_activity_at IS NULL;
