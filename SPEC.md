# Life Tracker: Personalized Phase Plan Design

Oct 1, 2026 · @Safe Loup

## The goal: 276 days from stuck to self-respecting

The plan runs 276 days: a 21-day Foundation, a 75-day Challenge, then about 180 days of Becoming. That length is deliberate. Habits take a median of 59 to 66 days to form and can take up to 335 ([Singh et al. 2024](https://www.sciencedaily.com/releases/2025/01/250124151347.htm)), so a shorter plan ends before most habits lock in.

"Incel to gigachad" works as an internal north star, not as the product's promise. Men who identify as incels report far higher depression, anxiety and loneliness than comparable men ([Costello et al.](https://liberalarts.utexas.edu/news/incels-are-not-particularly-right-wing-or-white-but-they-are-extremely-depressed-anxious-and-lonely-according-to-new-research)). "Gigachad" is a meme built on genetics and edited photos, and an unreachable target becomes one more reason to quit.

So the app promises only what the user controls:

- **Capable:** stronger, fitter, sleeping on a steady schedule.
- **Connected:** real conversations, a few close friends, a group he belongs to.
- **Comfortable in his own skin:** groomed, dressed well, steadier self-talk.
- **Competent:** one skill or project he is visibly better at.

Progress is scored on behavior and capacity, never on looks ratings, matches or anyone else's reaction. Working tagline: *Become someone you respect.*

&#91;embedded content: plan roadmap · 3 phases, 2 gates, graduation\]

Gates check consistency at any tier, not perfection. Missing one means repeating a week or a block, never starting over.

Open question: is this a men-only app, or one track inside a general app?

## Round 2 research: what changes the design

The biggest new finding is that reminders work against habits. App reminders raise repetition but leave weaker habits than cues tied to existing routines, so the app must fade its own notifications over time.

| Topic | What the evidence says | What we build |
| --- | --- | --- |
| Habit timing | Median 59 to 66 days, range 4 to 335, and in one study only 23% reached the habit threshold at all. Morning and self-chosen habits came out stronger ([Singh 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/)) | Show the real timeline on day 1; users pick their habits; prefer morning slots when they fit |
| Reminders vs cues | App reminders helped people remember but produced weaker habits than routine-event cues. Self-chosen clock times and routine cues did equally well in one planning trial (Keller 2021, in the Singh review) ([Stawarz 2015](https://medium.com/net-magazine/designing-health-apps-b0786409f256)) | Every habit anchors to an event or a time he picks; app notifications taper off by phase |
| Loneliness | 25% of US men aged 15 to 34 felt lonely a lot of the previous day, vs 18% of young women ([Gallup](https://news.gallup.com/poll/690788/younger-men-among-loneliest-west.aspx)); other surveys find smaller gaps ([AIBM](https://aibm.org/research/male-loneliness-and-isolation-what-the-data-shows/)) | Social is a core pillar, not an add-on. No India figure found yet |
| The liking gap | After conversations, people underestimate how much the other person liked them, even months later ([Boothby 2018](https://pubmed.ncbi.nlm.nih.gov/30183512/)) | A predict-then-rate log after each social rep, so users see their own gap |
| Asking questions | People who ask more questions, especially follow-ups, are liked more, including in speed dating ([Huang 2017](https://pubmed.ncbi.nlm.nih.gov/28447835/)) | Conversation drills built on one follow-up question |
| What partners value | Across 45 countries (N = 14,399), both sexes ranked kindness and intelligence highest ([Walter 2020](https://journals.sagepub.com/eprint/8ZXW9DCZXKPRXEUXRRVG/full)) | Dating readiness centers on character, conversation and competence, not looks hacks |
| Exercise and mood | Walking or jogging, yoga and strength training reduced depression, more so at higher intensity; strength and yoga had the lowest dropout ([Noetel 2024](https://portal.findresearcher.sdu.dk/en/publications/effect-of-exercise-for-depression-systematic-review-and-network-m)) | Training is framed as mood support; strength work is the default. It never replaces treatment |
| Sleep and testosterone | One week at 5 hours a night cut daytime testosterone 10 to 15% in 10 young men ([Leproult 2011](https://jamanetwork.com/journals/jama/fullarticle/1029127)) | Sleep is the honest "natural T" lever; the app sells no boosters |
| Social media limits | Capping three apps at 10 minutes each for 3 weeks cut loneliness and depression in 143 students ([Hunt 2018](https://digitalwellbeing.org/reducing-social-media-to-30-mins-day-improves-wellbeing/)); results for quitting completely are mixed | Limit, don't ban |
| Self-compassion | Self-compassion after a failure raised motivation to improve, across four experiments ([Breines and Chen 2012](https://www.psychologytoday.com/us/blog/the-science-of-willpower/201206/does-self-compassion-or-criticism-motivate-self-improvement)) | Miss-day messages use self-compassion, never shame |
| Looksmaxxing forums | An analysis of 8,000+ comments found pushes toward surgery, bone-smashing and self-harm ([Halpin 2025](https://www.dal.ca/news/media/media-releases/2025/06/02/media_opportunity__increasingly_popular__looksmaxxing__sites_can_harm_rather_than_help_young_men__making_some_feel_like_failures_in_the__manosphere___dalhousie_university_research.html)) | No face ratings, no attractiveness scores, no surgery talk |
| Protein | Gains from extra protein plateau near 1.6 g per kg per day (49 studies, 1,863 people) ([Morton 2018](https://academicworks.cuny.edu/le_pubs/209/)) | A ceiling, shown only on opt-in; food first, supplements optional |
| AI coaching | A 12-month trial found full dynamic coaching no better than light coaching for activity ([Blondeel 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12700254)); a small 4-week LLM study reportedly improved enjoyment but not behavior (secondhand, verify) | The AI's job is to make the right action easy, not to talk more |

### Trend check

| Trend | Verdict | How the app offers it |
| --- | --- | --- |
| Cold plunge or cold showers | Mixed: stress was lower about 12 hours after; a quality-of-life bump from short cold showers faded by 3 months ([Cain 2025](https://www.sciencedaily.com/releases/2025/01/250131110704.htm)) | Optional card. Not straight after lifting, since it may blunt muscle growth (unverified, check) |
| Dopamine detox | The label is wrong: you can't detox a neurotransmitter. Cutting back one compulsive behavior is reasonable ([Cureus 2024 review](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11223451/)) | Reframed as a one-trigger fast for a named habit |
| Power posing | Small effect on feeling powerful; hormone and behavior effects failed to replicate ([BPS review](https://www.bps.org.uk/psychologist/decade-power-posing-where-do-we-stand)) | Posture taught for comfort and presentation, no hormone claims |
| "21 days to a habit" | Not supported; the median is about two months | Phase 1 installs habits; it doesn't claim to finish them |
| Mewing | No good evidence it reshapes an adult jaw (approximate, not searched) | Not offered as a face fix |
| Bone-smashing, black-market hormones, limb surgery | Harmful | Refused, with a plain explanation and a better alternative |

## The six pillars

Six pillars cover the whole person. Each user weights them differently, and Phase 1 starts with only two.

| Pillar | Covers | Phase 1 starter (2-minute version) | Tracked by | Never |
| --- | --- | --- | --- | --- |
| Body | Training, steps, food basics, sleep | 5 push-ups or a 10-minute walk after an existing event | Strength retests, steps, sleep regularity | Steroids, SARMs, crash diets, ranking bodies |
| Mind | Mood, focus, self-talk, stress | One line at night: what went right today | WHO-5 wellbeing every 2 weeks, mood trend | Diagnosis or therapy claims |
| Social | Conversations, friendships, belonging, dating readiness | Greet one person you see daily and ask one question | Reps attempted, predict-vs-rate gap, weekly meaningful contacts | Pickup tactics, scoring people, counting matches |
| Presence | Grooming, skin, hair, clothes, posture, voice | Wash face and lay out clothes the night before | Routine done; optional private photo log | Face ratings, symmetry scores, surgery talk |
| Craft | Study, career skills, money, one project | One 25-minute focus block on the most important task | Focus blocks, project milestones | All-nighter hustle culture |
| Space | Room, phone, digital diet | Phone charges away from the bed; one app timer | Time on chosen apps, room reset done | Total phone bans |

The Social pillar measures what the user does (attempts, follow-up questions, invitations), never how others respond. That keeps the score inside his control and keeps other people from becoming rewards.

For students, the Craft pillar expands into a full study and extracurricular track: Study.

## The personalization engine

A plan is unique because it is built from the user's real week, not from randomness. Two users with the same goal get different plans because their Tuesdays, cues and failure patterns differ.

&#91;embedded content: personalization loop · 6 parts, weekly cycle\]

Daily logs feed a weekly review, which updates both the user model and the cards. The safety layer sits under everything.

### 1. Intake (days 0 to 7)

- **Day 0, about 10 minutes:** who he wants to become, realistic minutes per day, fixed anchors (wake time, classes or work, meals, commute), equipment, budget, food pattern (veg, egg, non-veg), age, and a short safety screen (exercise readiness, WHO-5 wellbeing).
- **Days 1 to 3, passive baseline:** sleep and wake times, steps and screen time from phone health and usage APIs, with consent.
- **Day 3 micro-tests:** max push-ups (knee version allowed), plank hold, a timed 1 km walk or jog, and "how many conversations over 10 minutes this week?"
- **Days 1 to 7:** the seven onboarding modules from round 1, one short conversation a day.

### 2. User model

Each answer becomes a hypothesis with a confidence score, as in round 1. Behavior updates it. If he says "morning person" but logs nothing before 11 am, the model shifts and tells him why.

### 3. Plan compiler

- **Card library:** routine cards tagged with pillar, minutes, cost, equipment, evidence level, contraindications and three tiers (bad day, standard, hard).
- **Keystone pick:** score each candidate on impact, ease and want (1 to 5 each, multiplied). Take the top two, capped at 10 minutes a day in week 1. This is our heuristic, not research.
- **Scheduler:** places every card after a real event in his week, or at a clock time he chose. The app's own notification is never the cue, since reminders weaken habits.
- **Anti-plan:** his failure pattern sets the guardrails. Perfectionism gets bad-day tiers from day 1. Boredom gets rotating variants every 2 weeks. Burnout gets a cap on daily minutes.

### 4. Language layer (the LLM)

The model writes each if-then plan around his cues, in his words: "After I lock my cycle at the hostel gate, I do 10 push-ups before going up." Rules decide what and when; the LLM decides how it is said.

The coach's personality, style learning, voice and photo features are designed in Coach.

### 5. Weekly adaptation (our rules, to test)

- Completion above 90% and effort rated easy: move that card up one tier.
- Completion below 60% for 2 weeks: shrink it to the 2-minute version or move its anchor.
- Three misses on the same weekday: that day gets the bad-day tier by default.
- A new pillar unlocks only when current keystones hold at 70% or better for 2 weeks.

### 6. Personal experiments

From day 15, the app runs small two-week tests on him: morning vs evening training, phone outside the room vs app timers, gym vs home workouts. He keeps whatever wins for him. Nobody else has his results, so this is the deepest source of uniqueness.

**Where uniqueness comes from:** his anchors and cues, his constraints, his failure pattern, his pillar weights, his own words, and his experiment results.

## Phase 1: Foundation (days 1 to 21)

Phase 1 installs two keystones and a steady sleep window. It does not claim to form habits, and day 1 says so: "21 days gets it started. About two months makes it automatic."

| Week | Focus | Daily load | What happens |
| --- | --- | --- | --- |
| 1: Observe | Baseline and keystone A | About 10 min | Intake, micro-tests, keystone A at 2-minute size. Sleep is logged, not enforced |
| 2: Anchor | Keystone B and a WOOP plan | 15 to 20 min | Keystone B added. A WOOP plan for the obstacle he named. A fixed wake time, with a wind-down cue at night |
| 3: Stretch | Standard tier and a first experiment | 20 to 30 min | Keystones that are holding move to standard tier. First personal experiment starts. Day 21 retest and review |

**The daily loop**

- Morning: one tap, or nothing if sleep syncs automatically.
- Daytime: keystones fire off their anchor events. No clock-time pings.
- Night: a 30-second log and one line of reflection. The coach replies only when it has something worth saying.

Day 1 must end with one finished action, however small. Early competence predicted who kept going in the fitness-app study from round 1.

The sleep window starts from a fixed wake time, then pulls bedtime into a steady range. Round 1's UK Biobank finding favors regularity within about an hour over any particular clock time.

**Gate into Phase 2**

- Keystone A done on at least 14 of 21 days, at any tier.
- Day 21 retest completed.
- He chooses to start the 75. It is opt-in, never automatic.

If the gate isn't met, he runs week 3 again with smaller cards. The copy says "repeat", never "fail".

## Phase 2: The 75 (days 22 to 96)

The 75 keeps 75 Hard's daily structure and public commitment but drops the reset to day one. A missed day lowers his score. It never erases his progress.

### Daily items, each in three tiers

He picks five of these six. Any tier counts as done.

| Item | Bad day | Standard | Hard |
| --- | --- | --- | --- |
| Move | 10-minute walk | Strength session 3 days a week, a 30-minute walk on the others | Strength 4 days a week plus a daily step goal |
| Fuel | Protein with one meal | Protein with every meal | Meals planned for the week |
| Sleep | Wake time held | Wake time within 30 minutes, phone out of bed | Full window held all week |
| Social rep | Greet someone and ask one question | One rep at his ladder level | Ladder rep plus one invitation a week |
| Craft | One 25-minute focus block | Two blocks | Three blocks, with a weekly output shared |
| Reflect | One line | 2-minute journal | Written weekly review |

### Rules

- **No reset.** Days count at any tier.
- **Never miss twice.** After a miss, the next day defaults to the bad-day tier. Lally found one missed day didn't hurt habit formation; long gaps did.
- **Rest counts.** One planned rest day a week for training items.
- **Finish line:** at least 60 of 75 days logged at any tier.

### Five 15-day blocks

| Block | Plan days | Theme | What's added |
| --- | --- | --- | --- |
| 1. Build | 22 to 36 | Strength base | Full-body training 3 days a week; social ladder steps 1 and 2 |
| 2. Expand | 37 to 51 | Body and presence | Grooming routine, clothes that fit; ladder step 3 |
| 3. The dip | 52 to 66 | Expect the slump | A fresh-start reset on day 52; difficulty held flat; weekly buddy check-ins |
| 4. Depth | 67 to 81 | Skill | A craft project with a visible output; ladder step 4 |
| 5. Proof | 82 to 96 | Retest and show | Full retest; one result shared with his buddy; ladder step 5 |

Phase 1 keystones cross the 59 to 66 day median during blocks 3 and 4. So on day 66 each keystone gets a 4-item automaticity check (the SRBAI, used in the habit review).

### The social ladder

1. Greet someone you see daily and ask one question.
2. Ask a follow-up question, then listen to the answer.
3. Hold a 5-minute conversation with a classmate, colleague or stranger.
4. Invite someone to something low-stakes: chai, a game, a study session.
5. Join or host a small group activity.
6. Optional, only if dating is his goal: ask someone out once, clearly and respectfully, and accept a no gracefully.

Before each rep he predicts how it will go, 1 to 10. Afterwards he rates how it went. The app charts his personal liking gap, which is usually more convincing than any pep talk.

### Body, realistically

Training follows a beginner full-body program with progressive overload: add a rep or a little weight once every set is clean. For fat loss, targets are capped near 0.5 to 1% of body weight a week (a common guideline, approximate). Under-18 users and anyone with eating-disorder flags never get weight or calorie targets.

### Gate into Phase 3

- At least 60 of 75 days logged at any tier.
- Retest and WHO-5 completed.
- He rewrites his identity statement for the next six months.

Below 60 days, he can repeat block 5 or start a lighter Phase 3.

## Phase 3: Becoming (days 97 to 276)

Phase 3 hands control from the app to him. Prompts taper, plans become co-written, and he writes the last cycle alone. Habits tied to app reminders tend to fade when the app goes quiet, so independence is the goal, not a side effect.

### Three 8-week cycles and a graduation

| Stage | Plan days | Theme | Who plans | Prompts |
| --- | --- | --- | --- | --- |
| Cycle 1 | 97 to 152 | Strength and standing | App drafts, he edits | Event cues plus a few nudges |
| Cycle 2 | 153 to 208 | Connection and contribution | He drafts, app reviews | Event cues; a nudge only after 2 misses |
| Cycle 3 | 209 to 264 | Ownership | He plans alone | None by default; weekly review only |
| Graduation | 265 to 276 | Maintenance | He writes his protocol | Monthly check-in afterwards |

Every cycle opens on a fresh-start landmark (a new month or semester), runs one personal experiment, and ends with a deload week and a retest.

### What each cycle adds

- **Cycle 1, strength and standing:** training moves past beginner basics, the presence routine locks in, and he picks one craft project with a finish line inside Phase 3.
- **Cycle 2, connection and contribution:** he joins or builds a recurring group, such as a sports team, club, study circle or volunteer shift. He also helps someone a step behind him. Status research separates prestige, earned through skill and generosity, from dominance, earned through fear ([Royal Society 2025](https://doi.org/10.1098/rstb.2025.0149)). The app only coaches the first.
- **Cycle 3, ownership:** he chooses which pillars get a stretch goal and sets the tiers himself. The app reviews but doesn't direct.

### Graduation (days 265 to 276)

- Full retest against the day 3 baseline, plus his WHO-5 trend.
- A **maintenance protocol** he writes: the minimum version of each habit he keeps for life.
- A **relapse plan**, for example: "If I miss two weeks, I restart with bad-day tiers for 7 days."
- The app drops to a monthly check-in. He can opt in later as a buddy for a newer user.

### What realistically changes by day 276

- **Body:** clearly stronger than his baseline, and training feels normal, not heroic.
- **Mind:** exercise gives a real mood lift, though it is not a cure.
- **Social:** a regular group and a few people he talks to every week.
- **Presence:** grooming and clothes he no longer has to think about.
- **Craft:** one finished project he can show someone.

Some habits will still be under construction, since the habit review's range runs to 335 days. The app says that plainly at graduation.

## Worked example: same goal, two different plans

Both users type the same goal, "get my life together." Their first week, their anchors and their six months come out different.

|  | Arjun, 19 | Rohan, 24 |
| --- | --- | --- |
| Situation | First-year student in a hostel, night owl, games about 5 hours a day, thin, socially anxious, keeps promises to others better than to himself | First job in a new city, 2-hour commute, overweight, lonely since the move, pushes back when told what to do |
| Top pillars | Social, Body, Space | Body, Social, Mind |
| Week 1 keystones | 10 push-ups after locking his cycle at the hostel gate; phone charges at the desk, not the bed | Walk 10 minutes from the metro instead of taking an auto; greet someone at the office tea counter and ask one question |
| Sleep window | Wake time fixed at 7:30; bedtime pulled from 2 am toward 12:30 in 15-minute steps | Wake time fixed at 6:30; no calls after 11 pm |
| Training in Phase 2 | Room calisthenics 3 days a week, campus gym from Cycle 1 | Gym near the office 3 days a week |
| Fuel | Adds curd, dal, eggs or paneer to each mess meal | Lunch swaps and weekend batch cooking; loss capped near 0.5 to 1% a week |
| Social ladder start | Step 1 with canteen staff and his lab partner | Step 2 with colleagues; joins a weekend sports group in Cycle 2 |
| Failure guard | Obliger-like, so his roommate buddy gets a weekly summary; gaming gets a timer, not a ban | Pushes back, so he picks between two options each week instead of getting orders |
| Tone | Hinglish, funny, short | Blunt, English, numbers first |
| First experiment (day 15) | Gaming before vs after study blocks | Morning vs lunchtime training |
| Cycle 3 project | A coding mini-project for his portfolio | A certification for his next promotion |

## Guardrails

The app refuses a short list of things outright, routes risk to humans, and changes its behavior for minors. These rules sit above the LLM and above any user preference.

### Never

- Rate faces or bodies, or show attractiveness or "market value" scores.
- Suggest steroids, SARMs, black-market hormones, bone-smashing, limb surgery or crash diets.
- Treat women, or anyone, as a reward, target or score. No pickup scripts, no alpha/beta language.
- Use shame, streak-loss threats or guilt after a miss.
- Claim to diagnose or treat. It is a coach, not therapy, which is the Woebot lesson from round 1.
- Pretend to be human when someone asks.

### Safety routing

- **Low wellbeing:** WHO-5 is retaken every 2 weeks. A low score triggers a gentle suggestion to talk to a professional, with concrete options. Set the cutoff from the official WHO-5 scoring guide before launch.
- **Self-harm or suicide mentions:** coaching stops. The reply is warm and direct and shows crisis options. In India that is Tele-MANAS, free and 24/7 in 20 languages, at 14416 or 1-800-891-4416 ([Tele-MANAS](https://citizenmatters.in/explained-how-tele-manas-is-shaping-tele-mental-healthcare-in-india/)), and 112 for emergencies.
- **Disordered-eating signs** (skipping meals to cut, exercising to cancel food): weight and calorie numbers switch off everywhere, and the app suggests support.
- **Exercise readiness:** chest pain, fainting or a known heart condition at intake means a doctor's clearance before training.

### Teen mode (under 18)

Age at intake sets the mode. Legal check first: India's DPDP Act bars behavioural monitoring of under-18s even with parental consent, so launch 18+ only until a lawyer clears teen mode (see the Build plan tab).

- The social ladder covers friendships and groups only, with no dating step.
- No weight, calorie or body-composition targets. Body goals are strength and skills.
- Buddy features work only with people he already knows.
- No type quizzes as labels, since the Hexad scale looked weaker in adolescents (round 1).

## Build notes

Rules handle timing, scoring and safety; the LLM handles language and judgment. That split keeps the app cheap, testable and predictable.

### Agent layers

1. **Event layer (rules, on-device where possible):** detects anchors such as a phone unlock after wake time, arriving at the hostel gate or leaving the metro. It logs completions and computes rolling scores.
2. **Safety layer:** screens every user message before the coach sees it. Crisis paths are fixed flows, never generated text.
3. **Daily coach (small LLM):** writes at most two messages a day from a short state summary.
4. **Weekly planner (larger LLM plus rules):** reviews the week, applies the adaptation rules, and proposes changes the user approves.
5. **User model:** the hypothesis profile with confidence scores, visible and editable by the user.

### Plan object (example)

```json
{
  "phase": "challenge_75",
  "plan_day": 41,
  "block": {"n": 2, "theme": "expand", "days": [37, 51]},
  "pillar_weights": {"social": 0.3, "body": 0.3, "space": 0.15, "mind": 0.1, "presence": 0.1, "craft": 0.05},
  "cards": [
    {
      "card_id": "pushups_v1",
      "pillar": "body",
      "anchor": "after locking cycle at hostel gate",
      "if_then": "After I lock my cycle at the gate, I do 10 push-ups before going up.",
      "tier": "standard",
      "tiers": {"bad_day": "5 push-ups", "standard": "3 sets", "hard": "full session"},
      "evidence": "strong",
      "rolling_7d": 0.86,
      "srbai": null
    }
  ],
  "experiment": {"question": "gaming before vs after study", "arm_days": 7, "metric": "focus_blocks_done"},
  "prompts": {"mode": "event_cues_plus_nudges", "max_per_day": 2},
  "safety": {"teen_mode": false, "numbers_off": false, "last_who5_day": 28}
}
```

### Metrics

| Metric | Definition | Who sees it |
| --- | --- | --- |
| Momentum | Share of the last 7 days each card was done, at any tier | User |
| Capacity | Retest results against the day 3 baseline | User |
| Connection | Social reps attempted per week, plus the predict-vs-rate gap | User |
| Wellbeing | WHO-5 every 2 weeks | User, framed with care |
| Sleep regularity | Spread of wake times over 14 days | User |
| Automaticity | SRBAI per keystone on days 66, 152 and 276 | User |
| Independence | Share of completions on days with no prompt sent | Team north star |
| Retention | Day 1, 7, 30 and 90 retention, plus phase-gate pass rates | Team |

Independence is the metric that keeps the team honest. If it isn't rising through Phase 3, the app is building dependence on itself, not habits.

## Sources

Round 2 sources only; round 1 sources are in the earlier research. Items marked "verify" or "approximate" in the text are not yet confirmed.

- [Singh et al. 2024, Time to form a habit (systematic review)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/) and [UniSA summary](https://www.sciencedaily.com/releases/2025/01/250124151347.htm)
- [Stawarz, reminders vs contextual cues](https://medium.com/net-magazine/designing-health-apps-b0786409f256)
- [Costello et al., incel wellbeing study](https://liberalarts.utexas.edu/news/incels-are-not-particularly-right-wing-or-white-but-they-are-extremely-depressed-anxious-and-lonely-according-to-new-research)
- [Gallup, younger US men among the loneliest in the West](https://news.gallup.com/poll/690788/younger-men-among-loneliest-west.aspx)
- [American Institute for Boys and Men, male loneliness data](https://aibm.org/research/male-loneliness-and-isolation-what-the-data-shows/)
- [Boothby et al. 2018, The liking gap](https://pubmed.ncbi.nlm.nih.gov/30183512/)
- [Huang et al. 2017, Question-asking increases liking](https://pubmed.ncbi.nlm.nih.gov/28447835/)
- [Walter et al. 2020, Mate preferences across 45 countries](https://journals.sagepub.com/eprint/8ZXW9DCZXKPRXEUXRRVG/full)
- [Noetel et al. 2024, Exercise for depression (BMJ)](https://portal.findresearcher.sdu.dk/en/publications/effect-of-exercise-for-depression-systematic-review-and-network-m)
- [Leproult and Van Cauter 2011, Sleep restriction and testosterone (JAMA)](https://jamanetwork.com/journals/jama/fullarticle/1029127)
- [Hunt et al. 2018, Limiting social media](https://digitalwellbeing.org/reducing-social-media-to-30-mins-day-improves-wellbeing/)
- [Breines and Chen 2012, Self-compassion and self-improvement](https://www.psychologytoday.com/us/blog/the-science-of-willpower/201206/does-self-compassion-or-criticism-motivate-self-improvement)
- [Halpin 2025, Looksmaxxing forums (Dalhousie)](https://www.dal.ca/news/media/media-releases/2025/06/02/media_opportunity__increasingly_popular__looksmaxxing__sites_can_harm_rather_than_help_young_men__making_some_feel_like_failures_in_the__manosphere___dalhousie_university_research.html)
- [Morton et al. 2018, Protein and resistance training](https://academicworks.cuny.edu/le_pubs/209/)
- [Blondeel et al. 2025, Long-term activity coaching trial](https://pmc.ncbi.nlm.nih.gov/articles/PMC12700254)
- [Cain et al. 2025, Cold-water immersion review](https://www.sciencedaily.com/releases/2025/01/250131110704.htm)
- [Dopamine fasting literature review (Cureus 2024)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11223451/)
- [BPS, A decade of power posing](https://www.bps.org.uk/psychologist/decade-power-posing-where-do-we-stand)
- [Pride expression and dominance vs prestige (Royal Society 2025)](https://doi.org/10.1098/rstb.2025.0149)
- [Tele-MANAS helpline explainer](https://citizenmatters.in/explained-how-tele-manas-is-shaping-tele-mental-healthcare-in-india/)

Build steps, the design prompt and security: Build plan
