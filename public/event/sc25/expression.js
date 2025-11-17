// n8n Postgres Expression for SC25 Registration Upsert
// Place this in the "Query" field of the Postgres Execute Query node
// Access input data using $json or $input.item.json

// Get the data from the previous node
const data = $json;

// Map JSON field names to PostgreSQL function parameter names
const fieldMapping = {
  email: 'p_email',
  phone: 'p_phone',
  name: 'p_name',
  organization: 'p_organization',
  orgType: 'p_org_type',
  location: 'p_location',
  budget: 'p_budget',
  problem: 'p_problem',
  currentSolution: 'p_current_solution',
  computeLocation: 'p_compute_location',
  computeAmount: 'p_compute_amount',
  urgency: 'p_urgency',
  step: 'p_step'
};

// Build the function call parameters
const params = [];

// Always include email (required)
if (data.email) {
  params.push(`p_email := '${data.email.replace(/'/g, "''")}'`);
}

// Add other fields if they exist
if (data.phone) {
  params.push(`p_phone := '${data.phone.replace(/'/g, "''")}'`);
}

if (data.name) {
  params.push(`p_name := '${data.name.replace(/'/g, "''")}'`);
}

if (data.organization) {
  params.push(`p_organization := '${data.organization.replace(/'/g, "''")}'`);
}

if (data.orgType) {
  params.push(`p_org_type := '${data.orgType.replace(/'/g, "''")}'`);
}

if (data.location) {
  params.push(`p_location := '${data.location.replace(/'/g, "''")}'`);
}

if (data.budget) {
  params.push(`p_budget := '${data.budget.replace(/'/g, "''")}'`);
}

if (data.problem) {
  params.push(`p_problem := '${data.problem.replace(/'/g, "''")}'`);
}

if (data.currentSolution) {
  params.push(`p_current_solution := '${data.currentSolution.replace(/'/g, "''")}'`);
}

if (data.computeLocation) {
  params.push(`p_compute_location := '${data.computeLocation.replace(/'/g, "''")}'`);
}

if (data.computeAmount) {
  params.push(`p_compute_amount := '${data.computeAmount.replace(/'/g, "''")}'`);
}

if (data.urgency) {
  params.push(`p_urgency := '${data.urgency.replace(/'/g, "''")}'`);
}

// Always include step
if (data.step) {
  params.push(`p_step := ${data.step}`);
}

// Build the final SQL query
const query = `SELECT * FROM upsert_sc25_registration(
  ${params.join(',\n  ')}
);`;

return query;
