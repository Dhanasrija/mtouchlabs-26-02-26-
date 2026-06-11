#!/usr/bin/env node
/**
 * Quick CRM lead test — posts a sample lead to the CRM and prints the
 * exact request body + the CRM's response (status + body).
 *
 * Run:
 *   node scripts/test-crm-lead.mjs
 *   node scripts/test-crm-lead.mjs "Your Name" you@example.com +91 9998979695 "AI Automation"
 *
 * Env (optional):
 *   CRM_LEAD_API_URL   override the endpoint (defaults to the prod CRM)
 */

const URL = process.env.CRM_LEAD_API_URL || 'https://crmapi.mtouchlabs.com/lead';

const [, , name, email, countryCode, phone, requirement] = process.argv;

const body = {
  contactPerson: name || 'Test Lead (script)',
  email: email || 'test-lead@mtouchlabs.com',
  countryCode: countryCode || '+91',
  phone: phone || '9998979695',
  requirement: requirement || 'Source: Request a Free Quote (Lead Gen) | Service: AI',
};

console.log('POST', URL);
console.log('Request body:', JSON.stringify(body, null, 2));

try {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  console.log('\n--- CRM response ---');
  console.log('Status:', res.status, res.statusText);
  console.log('Body:', text || '(empty)');
  process.exit(res.ok ? 0 : 1);
} catch (err) {
  console.error('\nRequest failed:', err?.message || err);
  process.exit(1);
}
