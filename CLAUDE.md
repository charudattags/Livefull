# Livefull

## What this is
An agentic AI life coach for adults (18+), on Android and web from one Expo codebase.
Product spec: SPEC.md. Build stages: BUILD_PLAN.md. Progress log: PROGRESS.md.
Read all three before any task.

## Stack (don't change without asking me)
- Expo + Expo Router + TypeScript (strict mode)
- NativeWind for styling; design tokens in design/tokens.json
- expo-sqlite with SQLCipher for local, offline-first data
- Supabase: Postgres with row-level security, Auth, Edge Functions (Deno), Storage
- Claude API, called only from Edge Functions:
  claude-haiku-4-5-20251001 for daily coach messages,
  claude-sonnet-5-5 for the weekly planner
- Jest + React Native Testing Library; SQL tests for RLS

## Folder layout
- app/ : screens (Expo Router)
- src/components/ : UI components
- src/engine/ : pure TypeScript rules (plan compiler, scoring, gates). No UI imports, no Date.now(); pass dates in.
- src/data/ : local database, sync queue
- src/lib/ : helpers, Supabase client
- supabase/migrations/ and supabase/functions/
- design/ : tokens and mockups

## How to work
1. Plan first: list the files you'll touch, packages you'll add and why. Wait for "go".
2. Small steps. Run type-check, lint and tests after each change.
3. Check current official docs before installing or configuring any package. Don't guess versions or APIs.
4. If SPEC.md is unclear or contradicts itself, ask me. Don't invent behavior.
5. A stage is done only when every "Done when" check passes. Show the evidence.
6. At the end of each stage, update PROGRESS.md: what was built, decisions made, known issues, next step.
7. Commit after each working step with a clear message.

## Security rules (never break)
- No secrets in client code, git, logs or chat output. Only the Supabase anon key ships in the app.
- Every table has user_id and owner-only row-level security, with a test proving it.
- All AI calls go through Edge Functions with per-user caps (2 coach messages a day plus replies) and a daily token budget.
- User text goes to the model as clearly delimited data. The model has no tools that write data.
- Model output is rendered as plain text, with links and images stripped.
- Crisis phrases route to the fixed SafetyScreen before any model call (Tele-MANAS 14416, emergency 112).
- No journal text, health values or coach messages in logs or analytics.
- Every permission is opt-in, and the app works fully when it's denied.
- Users under 18 are blocked at the age gate.

## Product rules (never break)
- No face or body ratings, no leaderboards against other people, no streak-loss or shame messages.
- A missed day never resets progress; the next day defaults to the bad-day tier.
- App notifications are never the habit cue. Cues are events or times the user chose.
- The coach is labeled as AI and never claims to be human, a doctor or a therapist.
- Progress is scored only on the user's own behavior.
- The coach acts like a contact (short texts, timing, voice notes) but always discloses it's an AI and never fosters dependence or romance.
- Photos: never analyze faces or bodies. Voice audio and coach-bound photos are deleted right after processing.
- Read COACH.md before any coach work.
- Study coach: hints and guiding questions first, a full solution only after his attempt, and never graded work or live-test help.
- Read STUDY.md before any study-track work.
