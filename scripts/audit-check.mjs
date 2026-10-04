// Fails when `npm audit` reports a high or critical advisory that is not listed in
// scripts/audit-allowlist.json, or when an allowlist entry is past its review date.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const allowlist = JSON.parse(
  readFileSync(new URL('./audit-allowlist.json', import.meta.url), 'utf8'),
);
const today = new Date().toISOString().slice(0, 10);
const gating = new Set(['high', 'critical']);

let raw;
try {
  raw = execFileSync('npm', ['audit', '--json'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
} catch (error) {
  // `npm audit` exits non-zero whenever it finds anything; the JSON is still on stdout.
  raw = error.stdout;
}
const report = JSON.parse(raw);
if (report.error) {
  console.error(`npm audit failed: ${report.error.summary ?? 'unknown error'}`);
  process.exit(1);
}

const found = new Map();
for (const [name, vuln] of Object.entries(report.vulnerabilities ?? {})) {
  for (const via of vuln.via) {
    if (typeof via !== 'object' || !gating.has(via.severity)) continue;
    const id = via.url?.split('/').pop() ?? via.source;
    found.set(id, { id, package: name, severity: via.severity, title: via.title });
  }
}

const accepted = new Map(allowlist.accepted.map((entry) => [entry.id, entry]));
const problems = [];

for (const advisory of found.values()) {
  const entry = accepted.get(advisory.id);
  if (!entry) {
    problems.push(`NEW ${advisory.severity} advisory ${advisory.id} in ${advisory.package}: ${advisory.title}`);
  } else if (entry.reviewBy < today) {
    problems.push(`Allowlist entry ${advisory.id} (${advisory.package}) was due for review on ${entry.reviewBy}`);
  } else {
    console.log(`accepted until ${entry.reviewBy}: ${advisory.id} (${advisory.package})`);
  }
}
for (const entry of allowlist.accepted) {
  if (!found.has(entry.id)) {
    console.log(`note: ${entry.id} (${entry.package}) is no longer reported; remove it from the allowlist.`);
  }
}

if (problems.length > 0) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`audit ok: ${found.size} high/critical advisories, all accepted.`);
