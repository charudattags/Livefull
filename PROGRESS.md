# Progress

## Stage 1: Repo hygiene and product review

### What was built
- **Product review:** read CLAUDE.md, SPEC.md, BUILD_PLAN.md, Coach.md, Study.md and the five design PDFs. Produced a 10-bullet summary, a ranked list of contradictions and gaps, a folder-layout review and the expected table list through Stage 12.
- **DECISIONS.md:** the owner's answers (A1 to A8, B1 to B15, C1 to C13) plus 15 open items, all confirmed at their defaults.
- **SPEC.md and CLAUDE.md** updated to match: Livefull name, five rings (Body, Mind, People, Craft, Rest), neutral "you", matcher-first crisis flow, Android/web split, no buddies, stored phase dates, 18+ only.
- **Repo hygiene:**
  - `.gitignore`: env files, build output, keystores and credentials, Expo `android/` and `ios/` prebuild folders.
  - `.githooks/pre-commit`: runs `gitleaks git --staged` (falls back to `protect --staged` on old versions). If gitleaks isn't installed it prints install instructions and lets the commit through, since CI scans too. Enabled by `npm install` through the `prepare` script (`core.hooksPath`).
  - `.github/dependabot.yml`: weekly updates for npm and GitHub Actions.
  - `.github/workflows/ci.yml`: type-check, lint, tests and `npm audit --audit-level=high` on every push and pull request, plus a gitleaks job (official `gitleaks/gitleaks-action@v3`, full history).
  - Base toolchain only: TypeScript `~6.0.3` (the version Expo SDK 57's template pins, and within typescript-eslint's supported range), ESLint 10, Jest 30 with ts-jest, one toolchain smoke test.

### Decisions made
- Versions came from current package metadata and docs, not memory: Actions `checkout@v7` and `setup-node@v7`, `gitleaks-action@v3` (no license key needed on a personal account).
- No Husky; the hook is a plain file in `.githooks/`.
- A missing gitleaks warns instead of blocking, by owner instruction; CI is the backstop.

### Evidence for "Done when"
- **Hook blocks a fake key:** a staged file with a runtime-generated fake AWS key and fake API key made `git commit` exit 1. gitleaks reported `aws-access-token` and `generic-api-key` (secrets redacted), and `HEAD` did not move. The file was removed and nothing with the fake keys was committed or pushed. The first attempt did not block, because my fake key generator produced strings that were too short; the commit was undone before anything was pushed and the test was rerun with proper keys.
- **Hook without gitleaks:** prints install instructions and exits 0.
- **Local checks:** `npm run typecheck`, `npm run lint`, `npm test` (1 test) and `npm audit --audit-level=high` (0 vulnerabilities) all pass.
- **CI green on an empty project:** [CI run 1](https://github.com/charudattags/Livefull/actions/runs/36973036307) on commit `f4e09e2` finished `success`. Both jobs passed: type-check, lint, test and `npm audit` in one, and the gitleaks scan in the other.

### Known issues
- The gitleaks hook only works where gitleaks is installed. Each contributor installs it once (instructions are in the hook output).
- The package.json, tsconfig.json and Jest config are a placeholder toolchain. Stage 2 will extend them when Expo is scaffolded; `create-expo-app` may need to run in a subfolder, to be checked then.
- DECISIONS.md open items 2 (birth-year boundary), 4 (grooming item type) and 6 (geofence cues) need a second look at Stages 5, 6 and 11.
- BUILD_PLAN.md still describes the old stage prompts (four tabs, old caps, geofence detection); it needs an update pass before Stage 2.
- The design PDFs still show bedtime spread, a Day 1 card at standard tier, and a "Day 51" retest; these are listed for a design update.

### Next step
Stage 2: scaffold the Expo app (Expo Router, TypeScript, NativeWind) with five tabs (Today, Plan, Life, Coach, Me) as placeholders, running on Android and web. Before that: update BUILD_PLAN.md to match DECISIONS.md, and draft the ~30 starter cards for review ahead of Stage 6.
