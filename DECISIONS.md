# Livefull decisions

Decisions made by the product owner at Stage 1. Where this file disagrees with SPEC.md, BUILD_PLAN.md or CLAUDE.md, this file wins until those are updated. IDs (A1, B7, C4) match the Stage 1 review.

Date: 2026-10-02

## Product and scope

| ID | Decision |
|---|---|
| Name | The product is **Livefull**. SPEC.md used "Life Tracker"; update it. |
| A1 | One app for all adults 18+. No "he/his" in copy; use neutral "you". The social-confidence features stay, since they work for everyone. |
| A7 | India-only for v1. Crisis numbers are Tele-MANAS 14416 and emergency 112. |
| A8 | No buddies in v1. Owner-only RLS stays on every user table. Instead: **Share my weekly summary**. The summary is built on the device and opens the Android share sheet, so the user sends it themselves. No buddy tables. |
| C6 | Teen mode is dead spec for v1. Under-18 users are blocked at the age gate. |
| C12 | Coach voice, coach photo and the Study track stay out until their tracks in the prompt pack. |
| C4 | Rings are coded 2D in v1, no 3D. Home-screen and lock-screen widgets are out of the MVP. |
| C3 | Five tabs from the start: Today, Plan, Life, Coach, Me. |
| C5 | UI is English only, with every string in one file. Hinglish is coach-only in v1. |

## Platforms

| ID | Decision |
|---|---|
| A2 | Web is a full client but **online-only** in v1: no local database on web, so nothing unencrypted sits in the browser. Journal vault, Health Connect, screen-capture blocking and geofences are Android-only in v1. Web shows "available on Android" for those. |
| C10 | Supabase region: Mumbai. The product owner owns the accounts. |
| C11 | Sync: one row per (card, local date) with a client-generated UUID; the latest `updated_at` wins. |

## Rings, items and cards

| ID | Decision |
|---|---|
| A3 | Five rings, as in the design: **Body, Mind, People, Craft, Rest**. Mapping from SPEC's six pillars: Body = training, food, grooming and presence. Mind = mood, reflection, journal. People = the social ladder (SPEC's Social). Craft = study, skills, projects. Rest = sleep, phone and room (SPEC's Space). |
| A3 | Phase 2 daily item types stay SPEC's six (Move, Fuel, Sleep, Social, Craft, Reflect; pick five). Mapping: Move and Fuel to Body, Reflect to Mind, Social to People, Craft to Craft, Sleep to Rest. |
| A3 | The design's card titles (Train, Read, Portfolio, Lights out) are example user cards, not item types. |
| A4 | Seven onboarding modules, one per day: (1) identity and goals, whose answer is the first identity statement; (2) motivation style; (3) accountability; (4) energy and context; (5) failure pattern; (6) game and tone; (7) support and boundaries. Details in the "Onboarding modules" section below. |
| A4 | Claude drafts about 30 starter cards from SPEC's ring table and daily items for owner review **before Stage 6**. |
| C13 | Allowed tables without `user_id`: `notice_versions` and a read-only global `card_catalog`. |
| C2 | Block titles: use the design's where it has one (block 2 "Make training automatic"), SPEC's elsewhere. |
| C7 | The first identity statement comes from onboarding module 1. It is rewritten at Gate 2. |

## Plan day, phases and gates

| ID | Decision |
|---|---|
| A5 | Plan day = calendar days since start, as in the design. Phase start dates are **stored**, not fixed numbers. A failed gate repeats that week or block by **extending the phase**, and later phases shift. 276 is the length with no repeats. |
| B3 | Gate 2 needs at least 60 of 75 days. Under 60, the screen offers "repeat block 5" or "lighter Phase 3". |
| B4 | Retests compare against the **day-3 baseline**. Retests on days 21 and 96, at the end of each Phase 3 cycle, and on day 276. The design's "Next retest: Day 51" is dropped. |
| B5 | Social ladder: SPEC's six steps, with SPEC's per-block pace as the default (steps 1 and 2 in block 1, step 3 in block 2, step 4 in block 4, step 5 in block 5, step 6 optional). |
| B6 | The first experiment starts on day 15 and ends on day 28, running into Phase 2. With 7 days per arm, the copy says "early lean", never "winner". |
| B2 | Phase 1 uses 2-minute tiers. The design's Day 1 card (Standard 30 min, Hard 45 min) is updated later. |
| C1 | Day 52 is a "fresh-start landmark", not a reset. |
| C8 | SRBAI checks count from each keystone's own start date. |

## Plan engine

| ID | Decision |
|---|---|
| B7 | Add an optional effort tap (easy / ok / hard) to the log. Adaptation rule priority: **safety, then shrink, then weekday default, then tier-up**. The pillar-unlock rule (now "ring-unlock") applies only in Phase 1. |
| B8 | Keystone score = impact x ease x want. Impact comes from the card library. Ease comes from minutes and equipment against the user's constraints. Want comes from onboarding taps. Ties go to fewer minutes. The 10-minute cap uses the 2-minute tier. |
| B9 | Logging is a tap in the app. At most **one check-in notification per chosen time window**, as a logging prompt, tapering by phase. Event anchors are **confirmed by the user, not detected**. |
| B10 | The day ends at **4 am local** by default, configurable in Me. Logs are stamped with the local date using `profiles.timezone`. |
| B1 | Sleep regularity = spread of **wake** times over 14 days. The design's "bedtime" label is changed later. |

## Safety (A6, B14)

- A **keyword matcher** (English, Hinglish, romanized Hindi) runs on the client and in the Edge Function **before any model call**. The Haiku pre-classifier is dropped.
- The coach's `CRISIS` sentinel stays as a backstop **after** the call.
- UI is the design's inline crisis card with call buttons for 14416 and 112. Text is fixed, never generated.
- "I'm safe, keep talking" returns to chat. The coach then sends a fixed supportive message and stays in a **support-only mode** for the rest of the session: listening and encouraging contact with a person or helpline, no plan or coaching talk. The card stays pinned. Any new crisis phrase shows the card again.
- Claude drafts the phrase list with a test corpus; the owner reviews it; a **clinician reviews it before launch**.
- WHO-5 cutoff stays a TODO constant until checked against the official scoring sheet.
- Disordered-eating flags come only from intake answers or matcher phrases, never inference.
- If exercise clearance is needed at intake, offer a walking-only plan until the user confirms clearance.

## Consent, privacy and AI

| ID | Decision |
|---|---|
| B11 | Consents: core logging (always on), health data, screen time, location cues, "AI coach reads my journal", plus new "AI coach processes my scores and tiers" and, at Stage 14, crash reporting. The age gate asks **birth year**, not a checkbox. |
| B12 | The journal column is **ciphertext from Stage 4**. With "coach may read my journal" on, the device decrypts only the entries needed for that call and sends them to the Edge Function. They are never stored server-side. |
| B13 | Config constants: **2 coach-started messages a day, 20 user messages a day, and a daily token budget**. Tuned later from real cost data. |
| B15 | No third-party analytics SDK in v1. Team metrics are aggregate counts computed server-side. |

## Onboarding modules (A4)

One per day, days 1 to 7, chat-style.

1. **Identity and goals:** who you want to become, and the first proof you're them. The answer is the first identity statement.
2. **Motivation style:** gains vs avoiding losses; rules, reasons or freedom.
3. **Accountability:** do you keep promises to others better than to yourself; do you push back when told what to do.
4. **Energy and context:** chronotype, commute, class or work hours, which days are chaos.
5. **Failure pattern:** what derailed you last time (perfectionism, boredom, burnout, social pressure), and what you did after a miss.
6. **Game and tone:** points, quiet progress, a rolling consistency score, or none (never streaks); blunt, warm or funny.
7. **Support and boundaries:** who you might share a weekly summary with yourself, and topics that are off-limits.

## Approved as proposed

- Folder layout with the additions from the Stage 1 review (`src/content/`, `src/i18n/`, `src/engine/safety/`, `src/theme/`, shared code for Edge Functions, `supabase/functions/{coach,planner,_shared}/`, `supabase/tests/`, `scripts/`, `.github/`, `docs/`, `assets/`).
- Table list from the Stage 1 review, with buddy tables removed (none were in the list), plus the two new consents above.
- Gitleaks: the official gitleaks GitHub Action in CI, plus a pre-commit hook that runs gitleaks if installed and prints install instructions if not. Dependabot and CI as repo files.

## Open items raised while writing this file

The owner confirmed on 2026-10-02: use the default shown for every item below. Items 2, 4 and 6 get a second look at their stage (5, 6 and 11).

Also confirmed: ignore Expo `android/` and `ios/` prebuild folders in `.gitignore`, and include the `github-actions` ecosystem in Dependabot.

1. **File names.** CLAUDE.md says `COACH.md` and `STUDY.md`; the files are `Coach.md` and `Study.md`. Default: change CLAUDE.md to the real names (Linux is case-sensitive).
2. **Birth year is ambiguous at the boundary.** Someone born in 2008 may be 17 or 18. Default: store only `age_confirmed_at` (no birth year), and treat a user as 18+ only when `current year - birth year >= 19`, or ask month and year. Needs a decision before Stage 5.
3. **"Session" for support-only mode.** Default: until the user closes the chat or the local day rolls over (4 am), enforced server-side by a `support_mode_until` value the Edge Function sets, since the client can't be trusted.
4. **Grooming and presence have no daily item type.** They map to the Body ring, but Phase 2's six item types have no grooming item and the design caps cards at 5. Default: grooming is a Body card that fills the Move or Fuel slot in blocks 2 to 5, or is an optional sixth-slot swap. Needs a decision before Stage 6.
5. **Where "want" is collected (B8).** None of the seven modules asks per-card "want". Default: a 1-to-5 tap on about 8 candidate cards at the end of day-0 intake.
6. **Geofence and first-unlock cues (Stage 11)** conflict with "anchors are confirmed, not detected". Default: they may open a check-in prompt window only; completion is always a user tap. The consent copy "nudge you at your anchor spots" changes to match.
7. **Total notification count.** B9 caps logging prompts at one per window; Coach.md allows 2 coach-started messages a day. Default: a daily ceiling of 3 notifications across both.
8. **SRBAI past graduation.** Keystone B starts around day 8, so its 276-day check would fall after day 276. Default: the last check happens at graduation.
9. **Independence metric needs a record of prompts sent**, but notifications are local. Default: sync a per-day `prompts_sent` count (a number, no content) in a `day_state` row.
10. **`card_catalog` source of truth.** BUILD_PLAN says the library is JSON. Default: JSON in `src/content/` is the source and a migration seeds `card_catalog`.
11. **Offline clock skew (C11).** "Latest `updated_at` wins" trusts device clocks. Default: the server clamps timestamps in the future.
12. **Share my weekly summary on web.** Android uses the share sheet. Default: web uses the Web Share API, falling back to copy.
13. **Worked example in SPEC (Arjun, Rohan)** keeps its named personas and their pronouns. Say if you want one swapped.
14. **"Lighter Phase 3"** (B3) is not defined yet.
15. **Coach.md** says the coach style job reads the last 14 days of messages server-side. That needs `coach_messages` stored server-side with RLS; it's out of v1 with voice and photos, but the table is in the stage-12 list.
