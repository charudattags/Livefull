# Livefull

## What this is
Livefull is an agentic AI life coach for adults (18+) in India, on Android and web from one Expo codebase.
Product spec: SPEC.md. Build stages: BUILD_PLAN.md. Progress log: PROGRESS.md.
Owner decisions: DECISIONS.md. Where it disagrees with another doc, DECISIONS.md wins.
Read all four before any task.

## Stack (don't change without asking me)
- Expo + Expo Router + TypeScript (strict mode)
- NativeWind for styling; design tokens in design/tokens.json
- expo-sqlite with SQLCipher for local, offline-first data
- Supabase: Postgres with row-level security, Auth, Edge Functions (Deno), Storage
- Claude API, called only from Edge Functions:
  claude-haiku-4-5-20251001 for daily coach messages,
  claude-sonnet-5-5 for the weekly planner
- Jest + React Native Testing Library; SQL tests for RLS
- Web is a full client but online-only in v1: no local database in the browser. Journal vault, Health Connect, screen-capture blocking and geofences are Android-only; web shows "available on Android".
- Supabase region: Mumbai. Rings are coded 2D, no 3D.

## Folder layout
- app/ : screens (Expo Router)
- src/components/ : UI components
- src/engine/ : pure TypeScript rules (plan compiler, scoring, gates). No UI imports, no Date.now(), no Math.random(), no I/O; pass dates and seeds in.
- src/engine/safety/ : the crisis keyword matcher (English, Hinglish, romanized Hindi) and its test corpus
- src/data/ : local database, sync queue
- src/lib/ : helpers, Supabase client
- src/content/ : card library JSON, onboarding module scripts, fixed copy
- src/i18n/ : every UI string, English only in v1
- src/theme/ : NativeWind config and light/dark themes built from design/tokens.json
- supabase/migrations/, supabase/tests/ (RLS tests) and supabase/functions/{coach,planner,_shared}/
- shared/ : pure TypeScript used by both the app and Edge Functions (crisis matcher, output sanitizer, summary builder). Check current Supabase bundling rules before Stage 9.
- design/ : tokens and mockups
- assets/ : fonts and images
- scripts/, docs/, .github/ : tooling, privacy and breach docs, CI and Dependabot

## How to work
0. Read DECISIONS.md and the doc for the area you're touching (Coach.md, Study.md).
1. Plan first: list the files you'll touch, packages you'll add and why. Wait for "go".
2. Small steps. Run type-check, lint and tests after each change.
3. Check current official docs before installing or configuring any package. Don't guess versions or APIs.
4. If SPEC.md is unclear or contradicts itself, ask me. Don't invent behavior.
5. A stage is done only when every "Done when" check passes. Show the evidence.
6. At the end of each stage, update PROGRESS.md: what was built, decisions made, known issues, next step.
7. Commit after each working step with a clear message.

## Security rules (never break)
- No secrets in client code, git, logs or chat output. Only the Supabase anon key ships in the app.
- Every table has user_id and owner-only row-level security, with a test proving it. Allowed exceptions: notice_versions and a read-only global card_catalog.
- All AI calls go through Edge Functions with per-user caps (2 coach-started messages and 20 user messages a day, plus a daily token budget; config constants, tuned from real cost data).
- User text goes to the model as clearly delimited data. The model has no tools that write data.
- Model output is rendered as plain text, with links and images stripped.
- Crisis phrases are caught by a keyword matcher (English, Hinglish, romanized Hindi) on the client and in the Edge Function before any model call. They show the fixed inline crisis card, with fixed text only (Tele-MANAS 14416, emergency 112). The coach's CRISIS sentinel is a backstop after the call. After "I'm safe, keep talking" the coach stays in support-only mode for the session, the card stays pinned, and a new crisis phrase shows it again.
- Journal text is ciphertext in the database from the first migration. With "coach may read my journal" on, the device decrypts only the entries needed for a coach call and sends them to the Edge Function, which never stores them.
- No journal text, health values or coach messages in logs or analytics. No third-party analytics SDK in v1; team metrics are aggregate counts computed server-side.
- Every permission is opt-in, and the app works fully when it's denied.
- Users under 18 are blocked at the age gate, which asks birth year.

## Product rules (never break)
- No face or body ratings, no leaderboards against other people, no streak-loss or shame messages.
- A missed day never resets progress; the next day defaults to the bad-day tier.
- App notifications are never the habit cue. Cues are events or times the user chose. Logging is a tap in the app, and event anchors are confirmed by the user, not detected. At most one check-in notification per chosen time window, as a logging prompt, tapering by phase.
- The coach is labeled as AI and never claims to be human, a doctor or a therapist.
- Progress is scored only on the user's own behavior.
- The coach acts like a contact (short texts, timing, voice notes) but always discloses it's an AI and never fosters dependence or romance.
- Photos: never analyze faces or bodies. Voice audio and coach-bound photos are deleted right after processing.
- Read Coach.md before any coach work.
- Study coach: hints and guiding questions first, a full solution only after the user's attempt, and never graded work or live-test help.
- Read Study.md before any study-track work.
- Copy uses neutral "you". UI strings are English, in one file; Hinglish is coach-only in v1.
- Plan day is calendar days since start, with phase start dates stored. A failed gate extends the phase and later phases shift.
- No buddies in v1. "Share my weekly summary" builds the summary on the device and opens the Android share sheet, so the user sends it themselves.
