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

## Stage 2: Scaffold the app

### What was built
- **Expo SDK 57 app** (Expo Router, TypeScript strict, NativeWind 4.2.7 on Tailwind 3.4) for Android and web. Routes live in root `app/`, as CLAUDE.md says (the Expo template uses `src/app`).
- **Five placeholder tabs:** Today, Plan, Life, Coach, Me, in `app/(tabs)/`. Titles and placeholder text come from `src/i18n/en.ts`; each screen renders `src/components/Placeholder.tsx`.
- **Dependencies** pinned to the SDK 57 template's versions (`~57.x`, React 19.2.3, React Native 0.86.3, Reanimated 4.5.1). Left out on purpose: the template's demo screens and extras (`expo-glass-effect`, `@expo/ui`, `expo-symbols`, `expo-image`, `expo-web-browser`, `expo-device`, `expo-font`), iOS config, and the React Compiler experiment.
- **Tests:** Jest split into two projects. `engine` (ts-jest, pure TypeScript) and `app` (jest-expo + Testing Library). One router test checks all five tabs render and each opens its placeholder. Jest is pinned to `~29.7` to match jest-expo 57.
- **CI** now also bundles the web and Android apps on every push (`expo export`) and runs an allowlist-based audit gate (`npm run audit:check`).

### Decisions made
- NativeWind v4.2.7 (stable) over the v5 release candidate, as agreed. It works on SDK 57 for the web build and the Android bundle; no fallback to v5 was needed.
- **Audit gate:** `npm audit` reports 66 vulnerabilities in Expo's own dependency tree, but only four distinct advisories. The two high ones have no patched version published: `braces` (GHSA-vfj7-8cjw-p6xm) and `node-forge` (GHSA-86w9-cpqp-85rv). Both come from build and dev tooling (Metro, Jest, `@expo/cli`) and neither appears in the shipped bundles (checked). `scripts/audit-check.mjs` fails CI on any other high or critical advisory, and on these two after 2026-12-01 so they get re-checked. The moderate ones (`decode-uri-component`, `uuid`) don't gate.
- No `android.package` is set in `app.json` yet. It's permanent once published, so it needs the owner's choice before the first EAS build.
- Default Expo icons and splash are placeholders; the splash and adaptive-icon backgrounds use the design's dark ground `#17101C`. Real assets are Stage 3.

### Evidence for "Done when"
- **Web, all five tabs:** a static `expo export --platform web` build served locally and driven with Chromium (mobile 412x915 and desktop 1280x800). Clicking each tab changed the route (`/`, `/plan`, `/life`, `/coach`, `/me`) and logged no console errors. NativeWind is applied: the heading computes to 30px / weight 600 (`text-3xl font-semibold`), and the background is `rgb(250,250,250)` in light and `rgb(10,10,10)` in dark. Screenshots are in the session scratchpad (`pw/shots/`).
- **Android:** `expo export --platform android` produces a Hermes bundle (3.7 MB) with no errors. This proves it compiles; it has not been run on a device or emulator (none available here). The owner opens it on a phone or emulator with `npx expo start` and presses `a`.
- **Local checks:** `npm run typecheck`, `npm run lint`, `npm test` (2 tests) all pass. The router test was confirmed to fail when a screen is broken.
- **expo-doctor:** 19 of 21 checks pass. The two failures (config schema, React Native Directory metadata) are network blocks from this environment, not project problems.
- **CI:** see the status line at the end of this entry.

### Known issues
- Android has not been run on a device or emulator.
- `npx expo install --check` and two `expo-doctor` checks can't run here (blocked network). Run them locally once: `npx expo install --check && npx expo-doctor`.
- ESLint has no React or React Hooks rules yet; add `eslint-plugin-react-hooks` (check current docs) when real components arrive.
- expo-router's testing types still describe the older sync Testing Library API; the test works around this by importing `userEvent` from Testing Library directly.
- The default tab icons are Expo Router's placeholder triangles.
- BUILD_PLAN.md update (Step 0) is drafted but waits for owner review.

### Next step
Stage 3: design system. First build `design/tokens.json` from the tokens PDF, then light and dark themes and the components (TierButtonGroup, ItemCard, MomentumRing, RoadmapBar, BlockTile, ChatBubble, ConsentRow, SafetyBanner), with rings drawn as coded 2D shapes, and a hidden `/dev/components` gallery. Needs `react-native-svg` (check docs), fonts (Fraunces, Instrument Sans, Bricolage Grotesque) and icon choices.
