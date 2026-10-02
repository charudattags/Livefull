# Study: an academic and extracurricular track

## The idea

For students, the plan gains an academic engine. It learns his courses, exams and study habits in week one, schedules study with the best-tested methods, watches real signals, and tells him honestly each week whether the plan is working.

- **Built on his real semester:** timetable, syllabus, exam dates and marks so far.
- **Methods with the strongest evidence:** practice testing, spacing, interleaved problems and worked examples.
- **Checks itself:** leading signals every week, real marks after every test, and changes when the numbers say so.

It serves any goal: passing comfortably, raising grades, deep understanding, a competitive exam like GATE, or simply an organized semester. Extracurriculars run through the same engine, so study and activities share one time budget.

## Academic onboarding

One question on day 0 ("Are you a student?") opens the track. The rest runs as short daily modules alongside the main onboarding week, and every answer becomes a hypothesis with a confidence score, like the user model.

| Day | Module | What he gives | What the app builds |
| --- | --- | --- | --- |
| 0 | Goal | Course, year or semester, and goal type | Which study template to use |
| 1 | Courses | Subjects and credits, by photo of his timetable or the syllabus PDF | Course list with topics, which he confirms |
| 2 | Calendar | Internals, assignments, labs, semester exams, any competitive exam | Exam calendar and deadline list |
| 3 | Where he stands | Last marks per subject, confidence 1 to 5, weakest topics | Starting mastery estimate per subject |
| 4 | How he studies now | Methods he uses, where, when, phone habits | Which methods to swap in first |
| 5 | Time reality | Study minutes on class days and weekends, best focus window | Weekly study budget |
| 6 | Beyond class | Interests, clubs, commitments, career direction | Extracurricular shortlist |
| 7 | Diagnostic (optional) | A 10-question quiz per key subject, with his predicted score first | Real mastery baseline and his calibration gap |

## The study methods

The engine schedules recall, not rereading. Practice testing and spaced practice earned the top utility ratings in round 1's review of learning techniques; the rows below add round 2's findings.

| Method | Evidence | How the app uses it |
| --- | --- | --- |
| Spaced review with FSRS | The open-source FSRS scheduler predicts recall better than the older SM-2 for nearly all users in a benchmark of hundreds of millions of reviews, and needs roughly 20 to 30% fewer reviews in simulations ([FSRS wiki](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS)) | A daily review queue, with target retention raised as exams approach |
| Successive relearning: recall to a target, across 3 or more spaced sessions | Raised course exam scores by about a letter grade in classroom studies; for solving new problems the benefit was small ([Dunlosky and Rawson](https://www.apa.org/pubs/journals/features/stl-0000024.pdf), [Rawson and Dunlosky 2022](https://journals.sagepub.com/doi/full/10.1177/09637214221100484)) | Definitions, formulas, facts and concepts |
| Interleaved problem sets | A 54-class randomized trial found a large effect a month later: 61% vs 38% ([Rohrer et al. 2020](https://eric.ed.gov/?id=EJ1237752)). A year-long trial found smaller long-run gains ([NBER](https://www.nber.org/system/files/working_papers/w31853/w31853.pdf)) | Mixed problem sets in maths and engineering subjects once each type is learned |
| Worked examples, then fading | Well established for learning new problem types (not re-checked this round) | First exposure to a problem type: study a solved one, then solve with hints, then alone |
| Reflective goal setting | Mixed: positive in two programs, no effect in a 1,356-student trial ([Schippers summary](https://www.tandfonline.com/doi/full/10.1080/19345747.2023.2231440), [Dobronyi et al.](https://oreopoulos.faculty.economics.utoronto.ca/wp-content/uploads/2020/05/dobronyi-et-al-goal-setting-academic-reminders-and-college-success-jree-2019.pdf)) | One optional 30-minute session per semester; cheap enough to keep |
| Sleep before exams | In 88 students with trackers, better, longer and steadier sleep in the week and month before tests went with better grades; the night before didn't matter ([Okano et al. 2019](https://www.nature.com/articles/s41539-019-0055-z)) | Exam season protects the sleep window; the plan never schedules all-nighters |
| Phone out of reach | The "mere presence" drain failed a direct replication and a meta-analysis ([replication](https://pubmed.ncbi.nlm.nih.gov/36007374/)) | Phone away to stop interruptions, with no inflated claims |
| AI help while practicing | With \~1,000 students, unrestricted GPT-4 raised practice scores but grades fell 17% once access ended; a hints-only tutor removed the harm ([Bastani et al.](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4895486)) | The coach gives hints and questions, and shows a full solution only after his attempt |
| Rereading and highlighting | Low utility (round 1) | Allowed for a first pass, never scheduled as study |

## From semester to session

The plan works backward from his exam dates, then fills each week with sessions that start with recall.

1. **Semester map.** Topics come from the syllabus. Each topic is weighted by credits, exam weightage and his weakness. Students reliably underestimate how long work takes, so the map adds a 30% buffer and one catch-up block a week (our default).
2. **Weekly plan.** The Sunday weekly review lists the week's study blocks: topics, methods and deadlines, placed around his timetable and in his best focus window. Study minutes come out of the Craft pillar's time budget, so the whole plan stays realistic.
3. **Session template** (25 to 50 minutes):
   - 3 minutes: recall from last session, on a blank page or 5 flashcards.
   - 15 to 35 minutes: new material or problems (worked example first for a new type, interleaved sets after).
   - 5 minutes: a self-quiz on today's topic, rating confidence before seeing each answer.
   - 2 minutes: log it and set the next step.
4. **Daily review queue.** FSRS cards that are due, capped at 20 minutes (our default).
5. **Content from his own material.** From photos or PDFs of his notes and syllabus, the AI drafts flashcards and questions linked to the source page. He approves or edits each batch before it enters his queue.

## The study loop

The plan is never fixed. Each week, the signals from his sessions and his real test marks feed one check, and that check adjusts the next week's plan.

&#91;embedded content: study loop · weekly cycle with test feedback\]

Onboarding and the semester map run once per term; the loop on the right runs every week.

## Tracking: what the app watches

The app counts a block as real study only when it contains recall: answered cards, quiz questions or logged problems. A timer running on its own counts as "unverified minutes", shown without judgment. That answers "is he actually studying?" without spying.

| Signal | Source | What it tells us | Type |
| --- | --- | --- | --- |
| Planned vs done blocks | Session check-ins | Consistency | Leading |
| Focus minutes and pauses | In-app focus timer he starts | Quality of the time | Leading |
| Recall accuracy by topic | Cards and quizzes | What he actually knows; the best in-app predictor | Leading |
| Review backlog and predicted recall | FSRS | Whether memory is decaying | Leading |
| Syllabus coverage | Topics studied and tested | Breadth before exams | Leading |
| Calibration gap | His predicted vs actual quiz and test scores | Over- or underconfidence | Leading |
| Sleep regularity in exam weeks | Health Connect or sleep log | Readiness | Leading |
| Distracting-app time inside study blocks | Screen time, only with that consent | Whether the phone eats his blocks | Leading |
| Deadlines met | Assignment list | Organization | Leading |
| Marks: internals, assignments, semester results | He types them in or photographs the result | The real outcome | Lagging |
| Extracurricular hours and milestones | Activity logs | Balance and portfolio | Both |

**Never tracked:** camera or microphone during study, keystrokes, the content of other apps, or anything like exam proctoring. He sees every signal the app holds about him.

## Is it working?

Every week the app answers one question with his own numbers: is this plan moving what he knows? After every test it checks itself against real marks.

### Weekly study check

Four numbers sit inside the weekly review: block consistency, recall-accuracy trend, coverage against the semester map, and review backlog. Each gets a plain status: on track, drifting or off track. Never red, never a grade.

### Exam readiness

For each subject: coverage x average predicted recall x recent quiz accuracy, shown as a range with the days left ("likely ready for most of Unit 3; Unit 4 is thin"). This is our heuristic. It gets recalibrated against his actual marks after every test.

### Exam wrapper (3 minutes after each test)

1. Predicted mark vs actual mark.
2. What he did to prepare, from the logs.
3. Lost marks sorted by cause: didn't know it, careless slip, ran out of time, misread the question.
4. One change for next time, which becomes a card in his plan.

### Decision rules (to test)

| If | Then |
| --- | --- |
| Quiz accuracy under 60% on a topic for 2 sessions | Add worked examples and slow down new material on it |
| Review backlog over 2 days | Pause new cards, schedule a catch-up block |
| Under 60% of planned blocks done for 2 weeks | Cut the plan by a quarter and move blocks to his best window |
| Confidence steadily above accuracy | More testing, fewer reading blocks, show him the gap |
| Exam within 14 days | Switch to interleaved past-paper practice and relearning weak cards |
| Good signals but marks don't move | Check for a format mismatch, such as recall practice for an exam that tests problem solving, and add past papers |
| Signals rising and marks rising | Keep the plan; propose one stretch goal |

### Personal study experiments

Two-week tests on him, judged by quiz accuracy: morning vs evening blocks, flashcards vs practice problems for one subject, phone in another room vs an app blocker. He keeps what wins.

The app stays honest about cause and effect. It says "accuracy is up 12 points in 3 weeks since you switched to evening blocks", never "this method raised your grade".

## Extracurriculars

One or two well-chosen activities beat a crowded calendar. The research is mostly correlational but consistent: participation goes with better goal persistence, wellbeing and academic success ([university-student study](https://www.sciencedirect.com/science/article/abs/pii/S1041608019300548)), and in a survey of 651 hiring managers, leadership roles in activities related to the job earned the highest premiums ([JABE](https://articlegateway.com/journals/index.php/JABE/article/view/7942)). Some work suggests the benefit levels off, so more isn't always better.

- **Choosing:** the app scores options from his day-6 answers on goal fit (career, social, joy, skill), weekly time cost and fixed dates. It suggests one anchor activity and at most one optional one. Engineering examples: robotics or electronics club, coding club and hackathons, open-source work, a professional student chapter, a sports team, music or drama, volunteering, an entrepreneurship cell.
- **Tracking:** weekly hours, a commitments calendar, and milestones such as an event run, a role taken or a project shipped.
- **Portfolio log:** each milestone records role, dates, a link and what he learned, so he can export a ready CV section at any point.
- **Balance rule:** if activity hours rise while study consistency falls for 2 weeks, the coach raises it. In exam weeks, activity blocks shrink automatically unless he overrides.
- **Links to the main plan:** joining a group is social ladder step 5, and a shipped project can be his Phase 3 craft project.

## Fitting the phases and the semester

The study track grows with the main phases, and the academic calendar can reshape any day without breaking the plan.

| Phase | Study track |
| --- | --- |
| Foundation (days 1 to 21) | Install one daily 10-minute recall habit for his hardest subject, build the semester map, hold one weekly planning session |
| The 75 (days 22 to 96) | The full system: sessions, FSRS queue, interleaved sets, weekly checks, exam wrappers. Join one extracurricular |
| Becoming (days 97 to 276) | Exam cycles run on their own; in cycle 3 he plans his own semester; portfolio milestones |

- **Semester start is a fresh start.** If term begins mid-phase, the app uses it as a reset landmark, without restarting the phase count.
- **Exam weeks reshape the day.** Study items move to their hard tier. Move, Social and Craft drop to bad-day tier by default. Nothing counts as a miss.
- **Competitive-exam mode.** For an exam like GATE: a plan across semesters with weekly topic quotas, a mock test every 2 to 4 weeks, and an error log that feeds his review queue.

## Guardrails

The study coach exists to make him better at learning, so it never does the learning for him.

- **Academic integrity.** The coach explains concepts, asks guiding questions and checks his reasoning. It doesn't write graded assignments or lab records, and it never helps during a live test. On practice problems it shows a full solution only after he has made an attempt.
- **No grade shaming.** Marks are data, not verdicts. No comparisons with classmates, no rankings.
- **Burnout watch.** Long study days with falling accuracy, a sleep window broken three nights running in exam season, or a WHO-5 drop: the coach suggests rest. Daily study plans never exceed his budget, and one rest day a week stays protected.
- **Exam stress.** If he sounds hopeless about exams, the coach responds with support first. Crisis routing works as everywhere else in the app.
- **His data stays his.** Nothing goes to parents, his college or recruiters unless he exports it himself. Screen-time tracking is optional.
- **Course material.** Cards built from textbooks and notes are for his personal study only, never shared or published.

## Sources

- [FSRS wiki: ABC of FSRS](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS)
- [Dunlosky and Rawson: practice tests, spaced practice and successive relearning (APA)](https://www.apa.org/pubs/journals/features/stl-0000024.pdf)
- [Rawson and Dunlosky 2022: successive relearning](https://journals.sagepub.com/doi/full/10.1177/09637214221100484)
- [Rohrer et al. 2020: randomized trial of interleaved maths practice (ERIC)](https://eric.ed.gov/?id=EJ1237752)
- [NBER: a year of desirable difficulties](https://www.nber.org/system/files/working_papers/w31853/w31853.pdf)
- [Okano et al. 2019: sleep and academic performance](https://www.nature.com/articles/s41539-019-0055-z)
- [Reflective goal-setting field experiment](https://www.tandfonline.com/doi/full/10.1080/19345747.2023.2231440)
- [Dobronyi et al.: goal setting, reminders and college success](https://oreopoulos.faculty.economics.utoronto.ca/wp-content/uploads/2020/05/dobronyi-et-al-goal-setting-academic-reminders-and-college-success-jree-2019.pdf)
- [Replication of the smartphone "brain drain" effect](https://pubmed.ncbi.nlm.nih.gov/36007374/)
- [Bastani et al.: generative AI without guardrails can harm learning](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4895486)
- [Extracurricular participation and goal self-regulation](https://www.sciencedirect.com/science/article/abs/pii/S1041608019300548)
- [Hiring managers on extracurricular engagement (JABE)](https://articlegateway.com/journals/index.php/JABE/article/view/7942)
