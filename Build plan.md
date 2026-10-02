# Build plan, design prompt and security

## Stack and setup

One Expo (React Native) codebase builds both the Android app and the web app, with Supabase as the backend and the Claude API behind server functions. Stages 1 to 9 below give you a usable MVP that runs Phase 1.

| Layer | Choice | Why |
| --- | --- | --- |
| App (Android + web) | Expo with Expo Router, TypeScript | One codebase, file-based screens, runs on phone and browser |
| Styling | NativeWind (Tailwind for React Native) with your design tokens | AI tools write Tailwind fluently; tokens keep the look consistent |
| Local data | expo-sqlite with SQLCipher encryption | Offline-first logging; data encrypted at rest |
| Backend | Supabase: Postgres, Auth, row-level security, Edge Functions, Storage | Free tier to start; security rules live in the database |
| AI | Claude API, called only from Supabase Edge Functions | Keys never ship in the app. Haiku (`claude-haiku-4-5-20251001`) for daily messages, Sonnet (`claude-sonnet-5-5`) for the weekly planner |
| Phone signals | Health Connect library, expo-location, expo-notifications | Steps, sleep and event cues. Needs a development build, not Expo Go |
| Builds and hosting | EAS Build for Android; static web export to Vercel, Netlify or Cloudflare Pages | Standard Expo path |
| Vibecoding | Claude Code in the repo, GitHub for version control | It reads your spec files and edits the whole project |

No-code builders like Lovable or Bolt are fine for a quick web prototype. They struggle with Health Connect and native background work, so build the real app in code.

The coach track adds voice (Sarvam Saaras v3 speech-to-text and Bulbul v3 text-to-speech, with on-device fallbacks) and photo understanding through Claude's image input. The design is in Coach; the build prompts are in the Prompt pack's Coach track, run after stage 9.

The study track adds an FSRS flashcard scheduler (a maintained open-source TypeScript library) and imports syllabi and notes through Claude's PDF and image input. The design is in Study; its build prompts are the Prompt pack's Study track, run any time after stage 10.

### Rules for vibecoding this well

1. **Put the spec in the repo.** Save the main tab as `SPEC.md`. Write a short `CLAUDE.md` with the stack, folder layout and the Guardrails "Never" list, so every session starts with context.
2. **One stage per session.** Ask for a plan first, read it, then say "go".
3. **Commit after every working step**, on a branch per stage. If the AI breaks something, roll back instead of arguing with it.
4. **Make it write tests** for anything with rules: the plan compiler, scoring, gates and database permissions.
5. **Never paste secrets into chat.** Keys go in environment variables and EAS or Supabase secrets.
6. **Run the security review prompt** (in the security section) at the end of each milestone.

## Stepwise build plan

Fifteen stages in four milestones. Each stage has the prompt to give Claude Code and a check that tells you it's done. Stages 1 to 9 are the MVP.

Full copy-ready prompts for every stage are in Prompt pack.

### Milestone 1: Skeleton

1. **Set up.** Install Node LTS, Git and an Android emulator. Create the GitHub repo, an Expo account and a Supabase project. Add `SPEC.md` and `CLAUDE.md`.
   - Prompt: "Read SPEC.md and CLAUDE.md. Summarize the product in 10 bullets, list open questions, and propose a folder structure. Don't write code yet."
   - Done when: the summary matches what you meant, and the folder plan is saved in CLAUDE.md.
2. **Scaffold the app.**
   - Prompt: "Create an Expo app with Expo Router, TypeScript and NativeWind. Add four tabs: Today, Plan, Coach, Me, each a placeholder. Make it run on Android and web, and give me the exact commands."
   - Done when: it opens on your phone or emulator and in the browser.
3. **Design system.** Export tokens from the design step into `design/tokens.json` first.
   - Prompt: "Using design/tokens.json, build light and dark themes and these components: TierButtonGroup, ItemCard, MomentumRing, RoadmapBar, BlockTile, ChatBubble, ConsentRow, SafetyBanner. Add a hidden /dev/components screen showing all of them."
   - Done when: the gallery screen matches the mockups in both themes.
4. **Auth, schema and row-level security.**
   - Prompt: "Set up Supabase auth with Google and email magic link. Create tables profiles, user\_model, cards, plan\_state, logs, experiments, social\_reps, consents, journal\_entries. Every table has user\_id and row-level security so users only touch their own rows. Write SQL migrations and a test proving user A can't read user B's rows."
   - Done when: the RLS test passes and Supabase's security advisor shows no warnings.

### Milestone 2: Core loop

5. **Consent and intake.**
   - Prompt: "Build onboarding: an 18+ age gate, a consent center with one toggle per purpose, the day-0 intake form, then a chat-style flow for the 7 modules, one per day. Save answers to user\_model as hypotheses with confidence scores."
   - Done when: a new user finishes day 0 in about 10 minutes, and every consent is stored with a timestamp.
6. **Card library and plan compiler.**
   - Prompt: "Create src/engine as pure TypeScript with no UI: a routine-card library in JSON, keystone picking (impact x ease x want), a scheduler that attaches cards to anchors, and the weekly adaptation rules from SPEC. Write unit tests for every rule first, then the code."
   - Done when: all tests pass and each adaptation rule has a test.
7. **Today screen and logging.**
   - Prompt: "Build the Today screen: phase and day header, up to 5 item cards with three tiers, anchor text, one coach line. Store logs in encrypted SQLite and sync to Supabase when online. Momentum is the share of the last 7 days done at any tier. A miss never resets anything; the next day defaults to the bad-day tier."
   - Done when: it works in airplane mode, syncs later, and no streak-loss message exists anywhere.
8. **Customizable life dashboard.**
   - Prompt: "Add a Life dashboard: a grid of blocks (momentum, sleep regularity, retest, journal, craft project, identity statement). Users add blocks from a library sheet, drag to reorder, switch between small and wide, and remove them. Save the layout per user."
   - Done when: the layout survives a restart and matches on phone and web.
9. **AI coach.**
   - Prompt: "Create a Supabase Edge Function called coach. It builds a short state summary (scores, tiers, his own if-then text, no names or locations), runs a safety screen first, then calls the Claude API with the key from secrets. Cap each user at 2 coach messages a day plus replies, with a daily token budget. Return plain text only."
   - Done when: crisis test phrases always open the fixed safety screen, the cap holds, and the API key is absent from the app bundle.

**MVP checkpoint:** Phase 1 runs end to end. Put it in front of 5 real users before building further.

### Milestone 3: Full system

10. **Weekly review, experiments, social ladder.**
    - Prompt: "Add the weekly review: last 7 days, proposed card changes as accept or decline chips, and experiment results. Add two-arm personal experiments, and a social ladder log with predict-before, rate-after and a predicted-vs-actual chart."
    - Done when: a proposed change applies only after the user accepts it.
11. **Phone signals.**
    - Prompt: "Switch to an EAS development build. Read only steps and sleep from Health Connect, add optional event cues (first unlock after wake time, optional geofence), and taper notifications by phase as SPEC says. Add the permissions rationale screen Health Connect requires."
    - Done when: every permission is opt-in and the app still works fully when they're denied.
12. **Phases and gates.**
    - Prompt: "Implement the 21/75/180 phase state machine with the gate rules, retests, WHO-5 every 2 weeks, SRBAI checks on days 66, 152 and 276, and graduation. Unit-test every gate."
    - Done when: a test can simulate one user through all 276 days.

### Milestone 4: Ship

13. **Security and privacy pass.**
    - Prompt: "Do the security pass from the Build plan tab: journal vault encryption, app lock, screenshot blocking on journal and coach screens, data export and full delete. Then run the security review prompt and fix what it finds."
    - Done when: the review shows no high-severity findings.
14. **Beta test.**
    - Prompt: "Add crash reporting that strips personal data, plus a feedback button. Prepare a closed-test build."
    - Done when: testers have used it for at least 14 days and the top bugs are fixed.
15. **Release.**
    - Prompt: "Draft a privacy policy from our actual data flows, fill in the Data safety answers, and list what the Health apps declaration needs."
    - Done when: the Play listing, the app and the Health Connect screen show the same policy, and the web build is live.

## Design prompt

Paste this into your design tool, or ask me to turn it into editable screen mockups here. Replace \[App name\] first; the look aims for calm strength, not hype.

```text
Design a mobile-first app for Android (412 x 915) with a responsive web layout (1280 wide), called [App name]. It is an AI life coach that turns a user's real week into a phased plan: a 21-day Foundation, a 75-day challenge, and a 6-month "Becoming" phase.

AUDIENCE
People aged 18 to 30. Many are young men who feel stuck, lonely or behind, and who distrust anything preachy, hypey or "self-help cringe". They should feel respected, never judged.

BRAND FEEL
Calm strength. Like a good coach in a quiet gym at 6 am: grounded, honest, warm, a little dry humor. Not hype, not "alpha", not neon gamer, not pastel wellness.

VISUAL DIRECTION
- Dark mode is the default: deep charcoal/ink background with off-white text. A warm off-white light mode too.
- One accent: a warm amber/ember for progress and "today". A muted sage for rest and recovery days. Red appears only in safety states.
- No neon gradients, no glassmorphism, no stock photos of bodies or faces.
- Type: a sturdy grotesk for headings, a highly readable sans for body, tabular numerals for all stats.
- 8-pt grid, 12 to 16 px card radius, generous spacing, 48 px minimum touch targets.
- Simple 1.5 px line icons. Abstract topographic lines or paths as the only illustration style.
- Motion: small and physical. A soft press and fill when a tier is checked, a light haptic. No confetti.

SCREENS
1. Welcome: one honest line ("21 days gets it started. About two months makes it automatic."), an 18+ age gate, sign in with Google or email.
2. Intake: chat-style, one question at a time, quick-reply chips, progress dots for 7 modules.
3. Consent center: one toggle per purpose (health data, screen time, location cues, AI coach can read my journal), each with a one-line plain-language reason. Everything off by default except core logging.
4. Today: header "Day 41 - The 75 - Block 2", up to 5 item cards. Each card shows the habit, its anchor ("After you lock your cycle at the gate") and a 3-segment tier control: Bad day / Standard / Hard. A Momentum ring for the last 7 days at any tier. At most one short coach line.
5. Comeback state after missed days: no red, no lost streaks. "Welcome back. Here's the 2-minute version."
6. Plan: a roadmap of 3 phases with 2 gates and graduation; the current block; the list of cards with tier and anchor, each editable.
7. Weekly review: what happened, proposed changes as accept/decline chips, a personal experiment result card ("Morning training won: 6 of 7 vs 3 of 7").
8. Social ladder: current step, a 1 to 10 "how will it go?" slider before, a rating after, and a small chart of predicted vs actual over time.
9. Life dashboard: a customizable grid of blocks, like a restricted Notion (momentum, sleep regularity, strength retest, journal, craft project, identity statement). Show an edit mode with drag handles and a block library bottom sheet.
10. Coach chat: short, calm messages with a visible "AI coach" label. Include the fixed crisis pattern: a full-width card with call buttons for Tele-MANAS 14416 and emergency 112.
11. Me: an editable "What I think I know about you" list with confidence bars, plus data controls (export, delete everything, app lock).
12. Retest results and the day-276 graduation screen with the user's own maintenance plan.

CONTENT RULES
Never show face or body ratings, leaderboards against other people, or streak-loss threats. Copy is second person, short sentences, and works in English and Hinglish. Every number describes the user's own behavior.

ACCESSIBILITY
WCAG AA contrast in both modes, text scaling to 200%, color never the only signal, a reduced-motion variant.

DELIVERABLES
Design tokens (color, type scale, spacing, radius, elevation) for light and dark. A component set: tier control, item card, momentum ring, roadmap bar, dashboard block, chat bubble, consent row, safety card. All 12 screens in dark mode, with Today and Life dashboard also in light mode.
```

## Security architecture

Sensitive data is protected in three places: encrypted on the phone, owner-locked in the database, and summarized before the AI sees it.

&#91;embedded content: security architecture · phone, backend, AI provider\]

The app talks to Supabase over TLS. Only the Edge functions can call the AI; they send a summary out and get plain text back.

## Security features

Two rules carry most of the weight: every database row is locked to its owner, and the AI only ever sees a summary. The rest layers on top, mapped to the build stage where it lands.

| Feature | Protects against | How to implement | Stage |
| --- | --- | --- | --- |
| Row-level security on every table | One user reading another's data | Enable RLS on every table with owner-only policies (user\_id equals the signed-in user). Test with two accounts; run Supabase's security advisor | 4 |
| Keys only on the server | Leaked keys, surprise API bills | The Claude key and Supabase service-role key live in Edge Function secrets. The app ships only the public anon key | 9 |
| Encrypted local database | A lost or rooted phone | SQLite with SQLCipher. Generate the key on first launch and keep it in expo-secure-store, which uses the Android Keystore | 7 |
| Journal vault | A server breach exposing private writing | Encrypt journal text on the device (libsodium) before it syncs. The key stays on the phone, backed up only as a recovery code the user saves | 13 |
| App lock and screenshot block | Someone picking up the phone; previews in recent apps | expo-local-authentication for biometric or PIN; expo-screen-capture on journal and coach screens | 13 |
| Data minimization for the AI | Personal data reaching a third party | The coach function sends scores, tiers and his own if-then text. Names, places, numbers like weight, and the journal stay out unless he opts in | 9 |
| Prompt-injection defense (OWASP LLM01, LLM06) | User text steering the coach into doing things | Pass user text as clearly delimited data. The coach has no tools that write to the database; plan changes come back as proposals he must accept | 9 |
| Safe output handling (LLM05) | Coach output turning into links, code or hidden content | Render replies as plain text only, strip links and images, cap the length | 9 |
| Rate limits and token budgets (LLM10) | Runaway bills, spam, abuse | Enforce the 2-messages-a-day cap and a daily token budget per user in the function; rate-limit sign-in attempts | 9 |
| Crisis routing in fixed code | The AI improvising in a crisis | Keyword and classifier screen runs before the model. Crisis replies are hard-coded screens with Tele-MANAS (14416) and 112 | 9 |
| Least-privilege permissions | Play rejection; collecting more than needed | Request only the steps and sleep Health Connect types. Screen time and location cues are off by default | 11 |
| Consent records | DPDP consent rules | One toggle per purpose, stored with a timestamp and notice version. Withdrawing takes one tap, same as granting | 5 |
| Export and delete | DPDP data rights | "Download my data" as JSON; "Delete everything" removes server rows, files and the local database | 13 |
| Logs without personal data | Leaks through crash reports and analytics | Scrub logs; never send journal text, health values or coach messages to analytics | 14 |
| Dependency and secret scanning | Compromised packages, keys committed to git | Dependabot, a gitleaks pre-commit hook, and npm audit in CI | 1 |
| Breach plan | Scrambling after an incident | A one-page plan: contain, assess, notify affected users and the Data Protection Board. Check Rule 7 of the DPDP Rules for exact timelines | 15 |

Voice and photos add their own rules, set out in the Coach tab: raw audio and coach-bound photos are deleted right after processing, metadata is stripped on the device, and faces and bodies are never analyzed.

### Legal and store checklist

This is not legal advice; get a lawyer to review before a public launch.

- [ ] **Launch 18+ only.** India's DPDP Act treats everyone under 18 as a child. It requires verifiable parental consent and bars tracking or behavioural monitoring of children, which is this app's core function ([DPDP FAQ](https://dpdpa.dcomply.in/faq/)).
- [ ] **Plan for 13 May 2027,** when the DPDP Act's main obligations on notice, consent, security and data rights take effect ([Legal500](https://www.legal500.com/intelligence/india/privacy/digital-personal-data-protection-rules-2025-%E2%80%93-notified/)).
- [ ] **Write a standalone consent notice** that explains each purpose in plain language ([PIB](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2)).
- [ ] **Fill in Play's Health apps declaration form** and post a privacy policy in Play Console and inside the app ([Play policy](https://support.google.com/googleplay/android-developer/answer/16679511?hl=en)).
- [ ] **Remind users in the app** to consult a healthcare professional for medical advice, as the same Play policy requires.
- [ ] **Declare each Health Connect data type** in Play Console and add the privacy-policy rationale screen ([Health Connect docs](https://developer.android.com/health-and-fitness/health-connect/get-started)).
- [ ] **Check your developer account type.** Play asks health services such as medical apps to register as an organization, which needs a D-U-N-S number ([Play account types](https://support.google.com/googleplay/android-developer/answer/13634885?hl=en)).
- [ ] **Budget time for the closed test.** New personal accounts must run a closed test with at least 12 testers for 14 days before production ([DEV summary](https://dev.to/tizoc_araujo_3cd9fb67191f/google-play-personal-account-vs-organization-account-does-the-12-tester-rule-apply-to-you-242n)).

### Security review prompt

Run this in Claude Code at the end of each milestone.

```text
Act as a security reviewer for this repo. Check that:
1. Every Supabase table has row-level security with owner-only policies, and a test proves it.
2. No secrets appear in client code, config or git history.
3. Every AI call goes through an Edge Function with per-user rate limits and a token budget.
4. User text reaches the model as delimited data, and the model has no tools that write data.
5. Model output is rendered as plain text with links and images stripped.
6. Crisis phrases route to the fixed safety screen before any model call.
7. No journal text, health values or coach messages reach logs or analytics.
8. Permissions requested match what SPEC.md says, and each is optional.
List each finding with file, line, severity and a proposed fix. Don't change any code until I approve.
```

## Sources

- [PIB: Government notifies DPDP Rules, 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2)
- [Legal500: DPDP Rules 2025 notified, commencement timeline](https://www.legal500.com/intelligence/india/privacy/digital-personal-data-protection-rules-2025-%E2%80%93-notified/)
- [DPDP FAQ: children's data and Section 9(3)](https://dpdpa.dcomply.in/faq/)
- [DPDP Rules Fourth Schedule: exemptions from Section 9](https://privacylawhub.com/bare-acts/dpdp-rules-2025/schedule-iv-fourth-schedule-exemptions-from-section-9-1-and-9-3-)
- [Google Play: Health Content and Services policy](https://support.google.com/googleplay/android-developer/answer/16679511?hl=en)
- [Android Developers: Get started with Health Connect](https://developer.android.com/health-and-fitness/health-connect/get-started)
- [Google Play: Choose a developer account type](https://support.google.com/googleplay/android-developer/answer/13634885?hl=en)
- [DEV: Personal vs organization accounts and the 12-tester rule](https://dev.to/tizoc_araujo_3cd9fb67191f/google-play-personal-account-vs-organization-account-does-the-12-tester-rule-apply-to-you-242n)
- [OWASP Top 10 for LLM Applications 2025, explained](https://www.bdemerson.com/article/owasp-llm-top-10)
