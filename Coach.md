# Coach: a person in your contacts

## The idea

The coach should feel like a sharp, caring friend who texts him: short messages, real timing, voice notes, and a memory of his life. Two lines never move. It always says it is an AI, and it pushes him toward real people, never away from them.

| Chatbot habit | Contact behavior |
| --- | --- |
| Waits for a question | Texts first at the right moments, within the 2-a-day cap |
| One long reply | 1 to 3 short bubbles, like texting |
| Same voice for everyone | Mirrors his language mix, length, slang and humor |
| Forgets everything | Remembers his week, his people and his wins, with his permission |
| Text only | Voice notes and photos both ways |
| Instant wall of text | Typing indicator and a natural pause of a few seconds |

## How it behaves like a contact

- **An identity he chooses.** He picks the coach's name and an illustrated avatar, never a photoreal human face. A small "AI" tag sits on the profile, the chat header and every voice note.
- **Lives in his notifications like a chat.** Android's conversation-style notifications show the coach's name and avatar with inline reply, like a messaging app. Check which Expo-compatible library supports this before building.
- **Texts first, sparingly.** At most 2 coach-started messages a day. Events trigger them (a missed anchor, a finished retest, a social rep coming up), never a fixed clock minute. Quiet hours follow his sleep window.
- **Writes like a text.** 1 to 3 bubbles, about 40 words each at most, a typing indicator, and a pause scaled to length.
- **Voice notes both ways.** He can send voice notes. The coach replies with a short voice note (30 seconds max) when he turns that on.
- **Remembers and follows up.** "How did chai with Rahul go?" comes from facts he shared, only with memory switched on, and only one open follow-up at a time.
- **Reacts instead of talking.** A thumbs-up on a logged tier often beats a message.
- **Takes days off.** It stays quiet on rest days unless he writes first. It never sends "I miss you" or guilt pings.
- **No phone calls at launch.** Push-to-talk voice replaces real-time calls, which cost more and invite the long sessions linked to worse outcomes (see "Keeping it healthy").

Keep the coach inside the app. Since 15 January 2026, Meta's WhatsApp Business terms ban general-purpose AI assistants and AI companion bots, so WhatsApp can carry template reminders at most ([respond.io](https://respond.io/blog/whatsapp-general-purpose-chatbots-ban), [Galantis](https://whatsapp.galantis.com/blog/whatsapp-ai-chatbot-ban-2026)).

## Learning his dialogue style

The coach learns style from his own messages, stores it as a small profile he can see and edit, and loads it into every reply. No per-user model training is needed. People who match each other's way of talking hit it off more: in one study, closer style matching in speed-date transcripts tripled the odds of mutual interest ([Ireland et al. 2011](https://journals.sagepub.com/doi/abs/10.1177/0956797610392928)).

### The style profile

| Feature | How it's measured | How the coach uses it |
| --- | --- | --- |
| Language mix | Share of Hindi, Hinglish and English words; Latin or Devanagari script | Replies in the same mix and script |
| Message length | Median words per message | Stays within about half to double his length |
| Register | Slang he uses ("bhai", "bro"), punctuation, capitals | Mirrors his register without overdoing slang |
| Emoji | Emojis per message and his favorites | Same rate, only his favorites |
| Humor | Whether he jokes, and how he reacts to the coach's jokes | Turns humor up or down |
| Directness | Which tone gets more follow-through, blunt or soft | Sets the default tone |
| Rhythm | His active hours and reply speed | When to text, and how fast to answer |
| Function words | Language-style-matching score between his messages and the coach's | Moves gradually toward his style, never a copy |

### How it learns

1. **Cold start:** the onboarding module on tone, plus his first 20 messages.
2. **Nightly update:** a server job recomputes the profile from his last 14 days of messages.
3. **Feedback taps:** long-press any coach message for "sounds like me", "too formal", "too much" or "cringe". Each tap nudges the profile.
4. **Memory:** a rolling conversation summary of up to 300 words, plus fact cards ("roommate: Arjun", "exam on the 14th"). He sees, edits and deletes them in Me. Facts expire after 60 days unless he reconfirms them.
5. **Prompt assembly:** fixed persona and rules, then the style card, memory facts, plan state and the last 10 messages. The fixed part can use prompt caching to cut cost.
6. **Quality check:** each week, the team measures what share of coach messages got "sounds like me" versus a negative tap.

**What it never mirrors:** insults, slurs, misogynist slang, self-put-downs like "I'm such a loser", or crisis language. Mirroring stops at the guardrails.

## The message pipeline

Every message, whatever its form, takes the same path: convert, screen for safety, add context, reply, then shape the reply to sound like a contact.

&#91;embedded content: coach message pipeline · 7 steps, 2 side paths\]

His words and his reactions feed the style profile, which shapes the next reply.

## Voice: speech in, speech out

Use an India-tuned speech service for Hinglish, with free on-device options as a fallback. Sarvam's current speech-to-text model, Saaras v3, covers 22 Indian languages plus English and has a codemix mode that keeps English words in English. Its text-to-speech model, Bulbul v3, covers 10 Indian languages plus English, handles Hinglish, and streams audio ([Sarvam docs](https://docs.sarvam.ai/api/getting-started/building-for-india)).

| Job | First choice | Fallback |
| --- | --- | --- |
| Speech to text | Sarvam Saaras v3, codemix mode, called from an Edge Function | Android on-device speech recognition through an Expo speech-recognition library: free and private, weaker on Hinglish |
| Text to speech | Sarvam Bulbul v3 with a stock voice | expo-speech (system voices): free and offline, more robotic |
| Global alternatives | Compare price and Hinglish quality before committing |  |

### How a voice note flows

1. He holds to record, up to 60 seconds.
2. Audio goes to an Edge Function, which transcribes it and deletes the audio immediately.
3. The transcript appears in the chat, editable, then runs through the same pipeline as text.
4. If he chose voice replies, the coach's text becomes a voice note of 30 seconds at most, with its transcript underneath.

**Voice rules:** never store his voice; never clone a real person's voice; the coach uses a stock voice labeled as an AI voice. Aim for under 3 seconds from send to the coach's first reply bubble.

## Photos: what the coach can see

Photos turn real life into plan input. Claude's API accepts images, so the coach function can describe them, but face and body judgments stay off-limits.

| He sends | The coach does | Guardrail |
| --- | --- | --- |
| A timetable or schedule | Pulls out classes and times, then proposes anchors he confirms | The photo is dropped after extraction |
| A meal | Notes whether there's a protein source and a vegetable, suggests one easy swap | No calorie or weight numbers. Off entirely for anyone with eating-disorder flags |
| His room, before and after a reset | Notices the change and logs the reset | Never required as proof |
| Gym or home equipment | Lists what's usable, suggests cards that fit |  |
| Notes, a whiteboard or a book page | Summarizes for his craft project and turns it into quiz questions | For his own study only |
| A finished-task photo | Reacts and logs it | Optional, never required |

**Never:** rate faces, bodies, physique or attractiveness; estimate body fat; identify people in a photo; or analyze screenshots of someone else's chats or profiles. If he wants help replying to someone, the coach helps him phrase his own message.

**Progress photos** live only in an encrypted on-device gallery. They are never sent to the AI and never scored.

**Implementation notes:** re-encode every photo on the device before upload to strip location data; run on-device face detection and decline photos where a face fills the frame; treat any text inside an image as data, never as instructions.

## Keeping it healthy

A coach that feels like a friend is exactly the kind of product that can deepen loneliness if it's built for engagement. Your users skew lonely, so these rules are core features, not legal padding.

**What the evidence says**

- In a 4-week randomized trial with 981 people, higher daily chatbot use went with more loneliness, more emotional dependence and less socializing with real people, across text and voice. People with stronger attachment tendencies fared worse ([Fang et al. 2025](https://export.arxiv.org/pdf/2503.17473), [MIT Media Lab](https://www.media.mit.edu/posts/openai-mit-research-collaboration-affective-use-and-emotional-wellbeing-in-ChatGPT/)).
- California's companion-chatbot law, SB 243, has been in force since 1 January 2026. It requires a clear notice that the bot is AI wherever a reasonable person could think otherwise, plus a published crisis-prevention protocol with referrals ([FPF](https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/)). The app is India-first, but meeting this bar costs little and covers any California users.

**The rules**

1. **Always honest.** The AI tag stays visible. "Are you real?" gets a plain answer every time. The coach never claims feelings, a body, a past or a life outside the app.
2. **Points outward.** Every week, at least one message nudges a real-person step from the social ladder. If chat time is high while social reps stay low for 2 weeks, the coach says so and suggests one person to text.
3. **Has a time budget.** After about 20 minutes of chat in a day (our default, to test), it wraps up warmly instead of continuing.
4. **No romance or companionship roleplay.** No "I miss you", jealousy, guilt or exclusivity.
5. **If he calls it his only friend,** it takes that seriously and kindly, encourages one human connection, and shows support options if he sounds distressed.
6. **Crisis stays fixed code,** as in the Guardrails, and the protocol is published on the website.
7. **The team watches it.** Track coach minutes per day against social reps per week, alongside the independence metric.

## Privacy and security for voice and photos

His raw voice and the photos he sends the coach are never kept. Everything he chooses to keep gets the same protection as his journal.

| Data | Kept? | Rule |
| --- | --- | --- |
| His voice audio | No | Uploaded over TLS to an Edge Function, deleted right after transcription, never logged |
| Transcripts | Yes, as chat messages | Same protection as coach messages; he can edit or delete them |
| Coach voice notes | 7 days | Private storage with signed, expiring links |
| Photos sent to the coach | No, unless he saves one | Location data stripped on the device; analyzed, then dropped |
| Progress photos | Only on his phone | Encrypted gallery; never sent to the AI or the server |
| Style profile and memory facts | Yes | Visible and editable in Me; deleted with his account |

- **New consents,** each off by default: voice notes (speech to text), coach voice replies, photos to the coach, and memory. Microphone and camera permissions are requested only on first use.
- **Processors:** list Sarvam and Anthropic in the privacy policy, and check where each processes and retains data. DPDP allows transfers abroad except to countries the government restricts, so check current notifications before launch.
- **Upload limits:** 60 seconds of audio, 5 MB per image, file types checked by content, per-user rate limits.
- **Injection through media:** text inside a photo or a transcript is data. It never changes the coach's rules (OWASP LLM01).

## Sources

- [Fang et al. 2025, randomized study of chatbot use and loneliness (arXiv)](https://export.arxiv.org/pdf/2503.17473)
- [MIT Media Lab: affective use and emotional wellbeing](https://www.media.mit.edu/posts/openai-mit-research-collaboration-affective-use-and-emotional-wellbeing-in-ChatGPT/)
- [Future of Privacy Forum: California SB 243 and chatbot laws](https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/)
- [Ireland et al. 2011, language style matching](https://journals.sagepub.com/doi/abs/10.1177/0956797610392928)
- [Sarvam docs: building for Indian languages](https://docs.sarvam.ai/api/getting-started/building-for-india)
- [respond.io: WhatsApp's 2026 AI chatbot policy](https://respond.io/blog/whatsapp-general-purpose-chatbots-ban)
- [Galantis: what WhatsApp still allows](https://whatsapp.galantis.com/blog/whatsapp-ai-chatbot-ban-2026)
