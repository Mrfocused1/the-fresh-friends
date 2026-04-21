// Full lesson content extracted from:
//   - COURSE CONTENT - Self Publishing Blue Print - 2026.pdf (learning material)
//   - SELF PUBLISHING WORKBOOK 2026.pdf (exercises)
//
// Each lesson is an array of blocks. Block shapes:
//   { type: 'h',        text }            — section heading
//   { type: 'p',        text }            — paragraph
//   { type: 'ul',       items: [] }       — bullet list
//   { type: 'ol',       items: [] }       — numbered list
//   { type: 'quote',    text }            — pull-quote / emphasis
//   { type: 'exercise', title, body: [] } — exercise callout (body is blocks)
//   { type: 'takeaway', text }            — "Key Takeaway" callout

export const LESSON_CONTENT = {

  /* ── MODULE 1: CREATING YOUR CONCEPT ──────────────────────────────── */

  'm1-1': [
    { type: 'p', text: 'Before you write a single page, you need clarity. Many beginners make the mistake of jumping straight into writing, but without a clear concept, it becomes easy to feel stuck, overwhelmed, or unsure of direction.' },
    { type: 'p', text: 'In this lesson, you are going to learn how to intentionally develop a strong book idea that can guide your entire writing process — whether you are creating a children’s book, a novel, or a non-fiction guide.' },

    { type: 'h', text: 'What is a Core Concept?' },
    { type: 'p', text: 'Your core concept is the foundation of your book. It is not your full plot, outline, or finished idea — it is the central focus that everything else will build from.' },
    { type: 'p', text: 'A strong core concept clearly communicates:' },
    { type: 'ul', items: [
      'What your book is about',
      'Who it is for',
      'What the reader will gain, feel, or experience',
    ] },
    { type: 'quote', text: 'If your concept is unclear, your writing will feel unclear. If your concept is strong, your writing becomes much easier.' },

    { type: 'h', text: 'Step 1: Generate Ideas (Without Judging Them)' },
    { type: 'p', text: 'The first step is to create options. At this stage, you are not trying to find the “perfect” idea — you are training your brain to think creatively and openly.' },
    { type: 'p', text: 'Start by exploring different sources of ideas:' },
    { type: 'ul', items: [
      'Personal experiences — What have you been through? What lessons have you learned?',
      'Imagination — What stories, characters, or “what if” scenarios come to mind?',
      'Problems you notice — What do people struggle with? What do you wish existed?',
      'Passions and interests — What topics excite you? What could you talk about for hours?',
    ] },
    { type: 'p', text: 'At this stage, quantity is more important than quality.' },

    { type: 'exercise', title: 'Exercise 1: Idea Brain Dump', body: [
      { type: 'p', text: 'Set a timer for 10 minutes and write down at least 10 book ideas. They can be messy, random, undeveloped.' },
      { type: 'p', text: 'Examples: a story about a vegetable who doesn’t like being eaten; a romance set in a workplace; a guide to building confidence in young children.' },
      { type: 'p', text: 'Goal: Train yourself to generate ideas freely without overthinking.' },
    ] },

    { type: 'h', text: 'Step 2: Identify the Strongest Idea' },
    { type: 'p', text: 'Now that you have a list, it’s time to evaluate. A strong book idea usually has at least one of these qualities:' },
    { type: 'ul', items: [
      'It excites you',
      'It solves a problem',
      'It feels meaningful or important',
      'It has a clear audience',
    ] },
    { type: 'p', text: 'Go through your list and ask: Which idea feels the most natural to explore? Which could I stay committed to? Which has potential to connect with others?' },

    { type: 'exercise', title: 'Exercise 2: Choose Your Top Idea', body: [
      { type: 'p', text: 'From your list, select your top 3 ideas, then narrow down to 1 main idea. Write down why you chose it.' },
      { type: 'p', text: 'Goal: Begin focusing your direction.' },
    ] },

    { type: 'h', text: 'Step 3: Define the Purpose of Your Book' },
    { type: 'p', text: 'Every strong concept has a purpose. This is where many people get stuck — because they think their book is “just a story” or “just information.” In reality, every book creates an experience.' },
    { type: 'p', text: 'Ask yourself: What do I want the reader to feel? What do I want them to learn or understand? What do I want them to take away from this book?' },
    { type: 'p', text: 'Examples:' },
    { type: 'ul', items: [
      'A children’s book may aim to build confidence or teach healthy habits',
      'A novel may explore love, identity, or resilience',
      'A non-fiction book may aim to teach or guide',
    ] },

    { type: 'exercise', title: 'Exercise 3: Define the Reader Experience', body: [
      { type: 'p', text: 'Complete these sentences:' },
      { type: 'ul', items: [
        '“After reading this book, my reader will feel…”',
        '“After reading this book, my reader will understand…”',
      ] },
      { type: 'p', text: 'Goal: Clarify the purpose behind your idea.' },
    ] },

    { type: 'h', text: 'Step 4: Turn Your Idea into a Clear Concept' },
    { type: 'p', text: 'Now you will shape your idea into a simple, clear concept statement. A strong concept should be easy to explain, specific (not vague), and clearly communicate the focus.' },
    { type: 'quote', text: 'Formula: “This is a book about [main idea] for [target audience], that helps them [result or experience].”' },
    { type: 'p', text: 'Examples:' },
    { type: 'ul', items: [
      '“This is a children’s book about a shy vegetable learning to make friends, helping young children build confidence.”',
      '“This is a novel about two strangers who reconnect after years apart, exploring love and timing.”',
      '“This is a guide for parents to help their children develop healthy eating habits.”',
    ] },

    { type: 'exercise', title: 'Exercise 4: Write Your Core Concept', body: [
      { type: 'p', text: 'Write your own concept using the formula above. Then refine it by asking: Is this clear? Is this specific? Would someone understand this quickly?' },
      { type: 'p', text: 'Rewrite it 2–3 times until it feels strong.' },
      { type: 'p', text: 'Goal: Create a clear, focused concept you can build on.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Trying to include too many ideas at once',
      'Being too vague (“a story about life”)',
      'Choosing an idea you think will sell, but don’t care about',
      'Overthinking before you’ve even started',
    ] },
    { type: 'p', text: 'Remember: clarity comes from refining, not from waiting.' },

    { type: 'takeaway', text: 'Your core concept is not about being perfect — it’s about being clear enough to move forward. Once you have a strong concept, every next step (writing, designing, marketing) becomes easier and more intentional.' },
  ],

  'm1-2': [
    { type: 'p', text: 'Once you have your book idea, the next step is understanding who you are creating it for. Many beginners believe their book is “for everyone” — but this is one of the biggest mistakes you can make. When you try to speak to everyone, you end up connecting with no one.' },
    { type: 'p', text: 'In this lesson, you will learn how to clearly define your target audience so your book feels relevant, engaging, and valuable to the right people.' },

    { type: 'h', text: 'What is a Target Audience?' },
    { type: 'p', text: 'Your target audience is the specific group of people your book is created for. These are the readers who will:' },
    { type: 'ul', items: [
      'Be most interested in your topic or story',
      'Benefit the most from your book',
      'Feel like the book was made just for them',
    ] },
    { type: 'p', text: 'The clearer you are about your audience, the easier it becomes to write your content, design your book, and market and sell it.' },

    { type: 'h', text: 'Step 1: Identify Who Your Book is For' },
    { type: 'p', text: 'Start by getting specific. Instead of saying “My book is for everyone,” say:' },
    { type: 'ul', items: [
      '“My book is for busy parents with children aged 3–6”',
      '“My book is for young adults who enjoy romance novels”',
    ] },
    { type: 'p', text: 'You are defining real people with real lives.' },

    { type: 'h', text: 'Key Areas to Consider' },
    { type: 'ul', items: [
      'Age group — children, teens, adults?',
      'Gender (if relevant) — does your book appeal more to a specific group?',
      'Lifestyle — busy? Students? Parents? Professionals?',
      'Interests — health, adventure, relationships, learning?',
      'Challenges or needs — what are they struggling with or searching for?',
    ] },

    { type: 'exercise', title: 'Exercise 1: Describe Your Ideal Reader', body: [
      { type: 'p', text: 'Write a short paragraph describing your ideal reader. Include their age, lifestyle, what they care about, and what they need help with or enjoy.' },
      { type: 'p', text: 'Example: “A busy mum in her 30s with young children who wants simple ways to encourage healthy eating at home.”' },
      { type: 'p', text: 'Goal: Move from “everyone” to a specific, real person.' },
    ] },

    { type: 'h', text: 'Step 2: Understand What Your Reader Wants' },
    { type: 'p', text: 'Now that you know who they are, you need to understand what they want. Your book should either solve a problem, create a feeling, provide entertainment or escape, or teach something valuable.' },
    { type: 'p', text: 'Ask yourself: What is my reader currently struggling with? What are they searching for or interested in? What would make them pick up this book?' },

    { type: 'exercise', title: 'Exercise 2: Identify Your Reader’s Needs', body: [
      { type: 'p', text: 'Complete these sentences:' },
      { type: 'ul', items: [
        '“My reader is struggling with…”',
        '“My reader wants…”',
        '“My reader would love a book that…”',
      ] },
      { type: 'p', text: 'Goal: Align your book idea with real needs or desires.' },
    ] },

    { type: 'h', text: 'Step 3: Match Your Book to Your Audience' },
    { type: 'p', text: 'Now you will connect your idea (from Lesson 1) with your audience. A strong book works because it is designed with the reader in mind.' },
    { type: 'p', text: 'Think about: Is my language appropriate for this audience? Does my idea solve their problem or interest them? Is the tone right — fun, educational, emotional, simple, detailed?' },

    { type: 'h', text: 'Examples Across Book Types' },
    { type: 'ul', items: [
      'Children’s Books — Audience = children (but also parents buying the book). Focus on simple language, engaging visuals, clear messages.',
      'Novels — Audience = readers who enjoy a specific genre. Focus on relatable characters and engaging storylines.',
      'Non-Fiction — Audience = people looking for solutions or guidance. Focus on clarity, value, and actionable content.',
    ] },

    { type: 'exercise', title: 'Exercise 3: Align Your Idea', body: [
      { type: 'p', text: 'Answer these questions:' },
      { type: 'ul', items: [
        'Why would my audience care about this book?',
        'What makes this book relevant to them?',
        'How will it improve their life or experience?',
      ] },
      { type: 'p', text: 'Goal: Ensure your idea and audience are connected.' },
    ] },

    { type: 'h', text: 'Step 4: Create a Reader Profile' },
    { type: 'p', text: 'Now you will bring everything together into a clear reader profile. This helps you stay focused throughout the entire process.' },
    { type: 'p', text: 'Your Reader Profile Should Include:' },
    { type: 'ul', items: [
      'Who they are (age, lifestyle)',
      'What they care about',
      'What they struggle with',
      'What they want or need',
      'Why your book is perfect for them',
    ] },

    { type: 'exercise', title: 'Exercise 4: Build Your Reader Profile', body: [
      { type: 'p', text: 'Write your full reader profile using this structure:' },
      { type: 'quote', text: '“My book is for [who they are], who [their lifestyle]. They struggle with [problem] and want [desire]. This book will help them by [result].”' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Saying “everyone” is your audience',
      'Being too vague (e.g. “people who like books”)',
      'Ignoring the reader’s needs and focusing only on your idea',
      'Not considering who is actually buying the book (especially for children’s books)',
    ] },

    { type: 'takeaway', text: 'When you clearly define your audience, your book becomes easier to write, more engaging, and more likely to sell. A successful book is not just about a good idea — it’s about a good idea for the right people.' },
  ],

  'm1-3': [
    { type: 'p', text: 'Once you have your idea and audience, the next step is understanding what already exists in the market. Many beginners skip this step — but market research is what helps you create a book that is not just good, but relevant, competitive, and sellable.' },
    { type: 'p', text: 'In this lesson, you will learn how to research existing books, identify opportunities, and position your idea in a smart way.' },

    { type: 'h', text: 'What is Market Research?' },
    { type: 'p', text: 'Market research is the process of studying other books in your category so you can understand:' },
    { type: 'ul', items: [
      'What is already popular',
      'What readers are responding to',
      'What is missing (your opportunity)',
    ] },
    { type: 'p', text: 'You are not copying — you are learning what works and where you can stand out.' },

    { type: 'h', text: 'Step 1: Find Books Similar to Your Idea' },
    { type: 'p', text: 'Start by researching books that are similar to yours. The best place to begin is Amazon, where you can see bestselling books, reader reviews, book covers and titles, and categories and rankings.' },
    { type: 'p', text: 'Search using keywords related to your idea. Examples: “children’s healthy eating books”, “romance novels second chance love”, “parenting guides for toddlers”. Aim to find 3–5 books closely related to your idea.' },

    { type: 'h', text: 'What to Look For' },
    { type: 'ul', items: [
      'Titles and subtitles — how are they written? What makes them appealing?',
      'Book covers — colours, style, illustrations, fonts',
      'Descriptions — how do they explain the book? What benefits are highlighted?',
      'Reviews — what do readers love? What do they complain about?',
    ] },
    { type: 'p', text: 'This gives you insight into both successes and gaps.' },

    { type: 'exercise', title: 'Exercise 1: Research Your Market', body: [
      { type: 'p', text: 'Find 3–5 books similar to your idea and write down the title of each book, what you like about it, and what you think could be improved.' },
      { type: 'p', text: 'Goal: Understand what already exists and start spotting opportunities.' },
    ] },

    { type: 'h', text: 'Step 2: Identify Trends and Gaps' },
    { type: 'p', text: 'Now that you’ve looked at existing books, it’s time to analyse patterns. You are looking for two key things:' },
    { type: 'p', text: 'Trends (What’s Working) — things you see repeatedly: popular themes or topics, common styles or formats, recurring messages. Trends show you what readers are already interested in.' },

    { type: 'h', text: 'Step 3: Position Your Book' },
    { type: 'p', text: 'Now you will use your research to refine your idea. Instead of creating something random, you are creating something relevant, needed, and differentiated.' },
    { type: 'p', text: 'Ask yourself: How is my book similar to what exists? How is my book different or better? What unique angle, message, or style am I bringing?' },

    { type: 'exercise', title: 'Exercise 2: Define Your Position', body: [
      { type: 'p', text: 'Complete the sentence:' },
      { type: 'quote', text: '“My book is similar to [existing books], but it is different because [your unique angle].”' },
      { type: 'p', text: 'Then answer: What makes my book stand out? Why would someone choose my book over others?' },
      { type: 'p', text: 'Goal: Clearly define your unique value.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Not researching at all',
      'Copying other books instead of learning from them',
      'Ignoring reader reviews (this is where the real insight is)',
      'Trying to be completely different with no relevance to the market',
    ] },
    { type: 'p', text: 'Balance is key: familiar enough to attract readers, different enough to stand out.' },

    { type: 'takeaway', text: 'Market research helps you move from “I have an idea” to “I have a strong, positioned book idea that people will want.” The most successful self-published books are not accidents — they are informed, intentional, and aligned with what readers are already looking for.' },
  ],

  'm1-4': [
    { type: 'p', text: 'You’ve chosen your idea. You understand your audience. You’ve researched the market. Now comes one of the most important steps: making sure people actually want your book.' },
    { type: 'p', text: 'Many beginners skip this and spend weeks (or months) creating a book that no one buys. Validation helps you test your idea early, so you can move forward with confidence — or adjust before it’s too late.' },

    { type: 'h', text: 'What Does It Mean to Validate Your Idea?' },
    { type: 'p', text: 'Validation means getting real feedback from real people before you fully commit to creating your book. Instead of asking “Do I like this idea?” you start asking “Would other people actually want this?”' },
    { type: 'p', text: 'A validated idea gives you:' },
    { type: 'ul', items: [
      'Confidence in your direction',
      'Insight into what people care about',
      'A higher chance of selling your book',
    ] },

    { type: 'h', text: 'Step 1: Share Your Idea (Simply and Clearly)' },
    { type: 'p', text: 'Before you can validate your idea, you need to communicate it clearly. Use your concept from Lesson 1 and keep it simple.' },
    { type: 'p', text: 'Examples:' },
    { type: 'ul', items: [
      '“I’m thinking of creating a children’s book that helps kids build confidence through fun food characters.”',
      '“I’m planning a novel about second-chance love set in London.”',
    ] },
    { type: 'p', text: 'You are not selling yet — you are testing interest.' },

    { type: 'h', text: 'Where to Share Your Idea' },
    { type: 'p', text: 'Start with spaces where your audience already exists:' },
    { type: 'ul', items: [
      'Social media (polls, stories, posts)',
      'Conversations with friends, parents, or readers',
      'WhatsApp groups or communities',
      'Email lists (if you have one)',
    ] },
    { type: 'p', text: 'The goal is to get quick, honest reactions.' },

    { type: 'h', text: 'Step 2: Ask the Right Questions' },
    { type: 'p', text: 'Validation is not just about sharing — it’s about listening intentionally. Avoid yes/no questions like “Do you like this idea?”' },
    { type: 'p', text: 'Instead, ask questions that give you useful insight:' },
    { type: 'ul', items: [
      '“Would you buy or read a book like this?”',
      '“What would you expect from this kind of book?”',
      '“What would make this more interesting or useful?”',
      '“What do you feel is missing from books like this?”',
    ] },

    { type: 'exercise', title: 'Exercise 1: Gather Real Feedback', body: [
      { type: 'p', text: 'Share your book idea with at least 5–10 people. Ask them 2–3 of the questions above and write down what excited them, what confused them, and what suggestions they gave.' },
      { type: 'p', text: 'Goal: Collect real, honest insights (not just compliments).' },
    ] },

    { type: 'h', text: 'Step 3: Refine and Strengthen Your Idea' },
    { type: 'p', text: 'Now it’s time to use your feedback. Look for patterns: Did multiple people show interest? Did they suggest similar improvements? Were there any common concerns or confusion?' },
    { type: 'p', text: 'You might adjust your concept, make your message clearer, refine your audience, or add something your audience specifically wants. This step turns a “good idea” into a market-ready idea.' },

    { type: 'exercise', title: 'Exercise 2: Improve Your Concept', body: [
      { type: 'p', text: 'Rewrite your core concept using your feedback. Then answer: What did I change or improve? Why is this version stronger? Do I feel more confident in this idea now?' },
      { type: 'p', text: 'Goal: Create a refined, validated concept you are ready to build on.' },
    ] },

    { type: 'h', text: 'Signs Your Idea is Strong' },
    { type: 'ul', items: [
      'People understand it quickly',
      'People show genuine interest (not just politeness)',
      'People ask questions or want more',
      'You feel more confident explaining it',
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Only asking friends who will say “it’s nice”',
      'Ignoring feedback that challenges your idea',
      'Asking vague questions and getting vague answers',
      'Skipping validation because you’re excited to start',
    ] },
    { type: 'p', text: 'Excitement is great — but clarity and confirmation are what lead to results.' },

    { type: 'takeaway', text: 'Validation turns your idea from “I think this could work” into “I know people are interested in this.” That shift is what separates hopeful creators from successful self-publishers.' },
  ],

  /* ── MODULE 2: BOOK BLUEPRINT ─────────────────────────────────────── */

  'm2-1': [
    { type: 'p', text: 'Now that you have a validated idea, it’s time to organise your thoughts into a clear structure. Many beginners feel overwhelmed at this stage because they try to “figure it out as they go.” But strong books are not random — they are intentionally structured.' },
    { type: 'p', text: 'In this lesson, you will learn how to break your idea into clear sections or chapters, so writing your book becomes easier, more focused, and more enjoyable.' },

    { type: 'h', text: 'What is Chapter Structure?' },
    { type: 'p', text: 'Your chapter structure is the framework of your book. It is how your content or story is organised into sections that guide the reader from beginning to end, make your book easy to follow, and deliver your message in a clear and engaging way.' },
    { type: 'p', text: 'Think of it like a roadmap — without it, you can get lost. With it, you always know where you’re going.' },

    { type: 'h', text: 'Step 1: Break Your Idea into Key Parts' },
    { type: 'p', text: 'Start by asking yourself: “If I had to explain my book in sections, what would those sections be?” You are not writing chapters yet — you are identifying the main building blocks of your book.' },

    { type: 'h', text: 'How This Looks for Different Books' },
    { type: 'ul', items: [
      'Children’s Books — Beginning (introduction of character/problem), Middle (challenge or journey), End (resolution and message)',
      'Novels — Beginning (setup, characters, conflict introduced), Middle (rising tension, obstacles, development), End (climax and resolution)',
      'Non-Fiction — Introduction to the topic, Key lessons/steps/themes, Conclusion or transformation',
    ] },

    { type: 'exercise', title: 'Exercise 1: Map Your Book Sections', body: [
      { type: 'p', text: 'Write down 3–5 key sections your book will include.' },
      { type: 'p', text: 'Example: Introduction to healthy eating; Understanding food groups; Making healthy choices fun; Simple recipes or activities.' },
      { type: 'p', text: 'Goal: See your book as organised parts, not one overwhelming task.' },
    ] },

    { type: 'h', text: 'Step 2: Turn Sections into Chapters' },
    { type: 'p', text: 'Now that you have your main sections, you will begin shaping them into chapters. Each chapter should focus on one clear idea, moment, or lesson. This keeps your book easy to read, easy to write, and easy to understand.' },
    { type: 'p', text: 'For each section, ask: What does the reader need to learn or experience here? What is the purpose of this chapter? Then give each chapter a simple working title.' },
    { type: 'p', text: 'Example — A section like “Building confidence in children” could become chapters like:' },
    { type: 'ul', items: [
      '“Why Confidence Matters”',
      '“Understanding Your Child’s Emotions”',
      '“Simple Ways to Build Confidence Daily”',
    ] },

    { type: 'exercise', title: 'Exercise 2: Create Your Chapter List', body: [
      { type: 'p', text: 'Choose one of your sections and break it into at least 3 chapter ideas. For each chapter, write a working title and one sentence describing what it will cover.' },
      { type: 'p', text: 'Goal: Start turning your ideas into real, structured content.' },
    ] },

    { type: 'h', text: 'Step 3: Create a Logical Flow' },
    { type: 'p', text: 'Now you will organise your chapters into the right order. Your book should feel like a journey — each chapter should naturally lead to the next.' },
    { type: 'p', text: 'Ask Yourself: Does this order make sense for the reader? Am I introducing things in a clear way? Does each chapter build on the previous one?' },
    { type: 'p', text: 'Think About the Reader Experience — what do they need to understand first? What should come next? Where does the transformation or conclusion happen?' },

    { type: 'exercise', title: 'Exercise 3: Organise Your Flow', body: [
      { type: 'p', text: 'Take your chapter ideas and: (1) Put them in order, (2) Read them from start to finish, (3) Adjust anything that feels out of place.' },
      { type: 'p', text: 'Then answer: Does this feel clear and easy to follow? Would a reader understand the journey?' },
      { type: 'p', text: 'Goal: Create a smooth, logical structure for your book.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Trying to write without a structure',
      'Overloading chapters with too many ideas',
      'Creating chapters with no clear purpose',
      'Not thinking about the reader’s journey',
    ] },
    { type: 'p', text: 'Remember: structure creates clarity — for you and your reader.' },

    { type: 'takeaway', text: 'You don’t need to have everything written — you just need a clear plan. When your chapters are structured, writing becomes faster, your ideas flow more easily, and your book feels professional and complete.' },
  ],

  'm2-2': [
    { type: 'p', text: 'Now that you have your chapter structure, the next step is to think about how your reader moves through your book. A great book is not just a collection of chapters — it is a journey. From the first page to the last, your reader should feel guided, engaged, and changed in some way.' },
    { type: 'p', text: 'In this lesson, you will learn how to intentionally design your reader’s experience, so your book feels clear, meaningful, and impactful.' },

    { type: 'h', text: 'What is the Reader Journey?' },
    { type: 'p', text: 'The reader journey is the emotional and mental experience someone has while reading your book. It answers questions like:' },
    { type: 'ul', items: [
      'How does the reader feel at the beginning?',
      'What do they discover along the way?',
      'How are they different by the end?',
    ] },
    { type: 'p', text: 'Whether it’s a children’s book, a novel, or non-fiction — every strong book takes the reader on a before → during → after transformation.' },

    { type: 'h', text: 'Step 1: Define the Start and End Point' },
    { type: 'p', text: 'Before you think about everything in the middle, you need clarity on where your reader is starting and where your reader is going.' },
    { type: 'p', text: 'Think About the Beginning — What does my reader currently feel, know, or struggle with? Why are they picking up this book?' },
    { type: 'ul', items: [
      'A child who feels shy or unsure',
      'A reader looking for escape or connection',
      'A parent wanting guidance or support',
    ] },
    { type: 'p', text: 'Think About the End — How do I want my reader to feel by the end? What should they understand, learn, or experience?' },
    { type: 'ul', items: [
      'Feeling more confident',
      'Feeling inspired or emotionally moved',
      'Having clear knowledge or practical tools',
    ] },
    { type: 'p', text: 'This creates your transformation — the reason your book matters.' },

    { type: 'h', text: 'Step 2: Guide the Journey in Between' },
    { type: 'p', text: 'Now you will connect the beginning and the end through your chapters. Each chapter should move the reader one step forward. Instead of thinking “What do I want to say next?” think “What does my reader need next?”' },

    { type: 'h', text: 'How to Guide the Reader Effectively' },
    { type: 'ul', items: [
      'Introduce ideas clearly and simply',
      'Build understanding step by step',
      'Keep them engaged (emotion, curiosity, or value)',
      'Avoid overwhelming them with too much at once',
    ] },

    { type: 'h', text: 'Across Different Book Types' },
    { type: 'ul', items: [
      'Children’s Books — Start with a relatable situation, build a simple engaging journey, end with a clear message or feeling',
      'Novels — Start with intrigue or conflict, build tension and emotional connection, end with resolution or transformation',
      'Non-Fiction — Start with a problem or need, guide with clear steps or insights, end with clarity, confidence, or action',
    ] },

    { type: 'exercise', title: 'Exercise: Map Your Reader Journey', body: [
      { type: 'p', text: 'Complete the following:' },
      { type: 'ul', items: [
        '“At the beginning of my book, my reader feels…”',
        '“By the end of my book, my reader feels…”',
      ] },
      { type: 'p', text: 'Then write: “To get them there, my book will guide them through…” (List 3–5 key stages or moments from your chapters.)' },
      { type: 'p', text: 'Goal: Clearly see the transformation your book creates.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Focusing only on what you want to say, not what the reader needs',
      'Making the journey confusing or unclear',
      'Not having a clear transformation or outcome',
      'Overloading the reader with too much too quickly',
    ] },
    { type: 'p', text: 'Always come back to this: Your book is for the reader, not just for you.' },

    { type: 'takeaway', text: 'A well-mapped reader journey ensures your book is easy to follow, emotionally engaging, and meaningful. People may forget information, but they will always remember how your book made them feel.' },
  ],

  'm2-3': [
    { type: 'p', text: 'Now that you have your chapter structure and reader journey, it’s time to decide what actually goes inside each part of your book. This step helps you avoid feeling stuck when writing, repeating yourself, or missing important ideas.' },
    { type: 'p', text: 'Instead of guessing as you go, you’ll create a clear content map that guides your writing from start to finish.' },

    { type: 'h', text: 'What is Content Mapping?' },
    { type: 'p', text: 'Content mapping is the process of planning what each chapter (or page) will include. It helps you stay organised, write with purpose, and ensure your ideas flow clearly.' },
    { type: 'p', text: 'Think of it as filling in the details of your structure — turning your chapters into actionable writing points.' },

    { type: 'h', text: 'Step 1: Break Each Chapter into Key Points' },
    { type: 'p', text: 'Now you will go one level deeper. Instead of just having chapter titles, you will decide: What exactly will I cover in this chapter?' },
    { type: 'p', text: 'Each chapter should be broken into 2–5 key points. These points act as your guide when writing — so you are never starting from a blank page.' },

    { type: 'h', text: 'How This Looks Across Book Types' },
    { type: 'ul', items: [
      'Children’s Picture Books — Each page or spread = one moment or idea. Focus on what is happening in the scene, what the character is feeling, what the illustration will show. Keep it simple, visual, and engaging.',
      'Novels — Break chapters into key events, character actions, emotional shifts. Focus on movement and development.',
      'Non-Fiction — Break chapters into key lessons or steps, examples or stories, practical tips or takeaways. Focus on clarity and value.',
    ] },

    { type: 'exercise', title: 'Exercise 1: Map One Chapter', body: [
      { type: 'p', text: 'Choose one chapter and write the chapter title plus 3–5 key points you will cover.' },
      { type: 'p', text: 'Example — Chapter: Building Confidence. Points: What confidence is; Why it matters; Simple daily habits.' },
      { type: 'p', text: 'Goal: Turn a chapter into clear, structured content.' },
    ] },

    { type: 'h', text: 'Step 2: Create a Natural Flow Within and Between Chapters' },
    { type: 'p', text: 'Now that you have your content points, you need to ensure they flow smoothly. Good flow means ideas are introduced in the right order, each point connects naturally to the next, and the reader never feels confused or overwhelmed.' },
    { type: 'p', text: 'Ask yourself: Does this make sense in this order? Am I explaining things clearly before moving on? Does each point build on the last?' },

    { type: 'h', text: 'For Visual & Illustrated Books' },
    { type: 'p', text: 'If your book includes images (especially children’s books), think about:' },
    { type: 'ul', items: [
      'What the text says vs what the illustration shows',
      'Not repeating the same thing in both',
      'Using visuals to enhance understanding or emotion',
    ] },
    { type: 'p', text: 'Example — Text: “Lily felt nervous on her first day.” Illustration: Shows her body language, classroom, expressions.' },

    { type: 'exercise', title: 'Exercise 2: Check Your Flow', body: [
      { type: 'p', text: 'Take your chapter from Exercise 1 and: (1) Read your key points in order, (2) Adjust anything that feels out of place, (3) Add a note for what the reader learns or feels at each point (and optionally what a visual/illustration could show).' },
      { type: 'p', text: 'Then answer: Does this feel easy to follow? Would this keep a reader engaged?' },
      { type: 'p', text: 'Goal: Ensure your content is clear, connected, and engaging.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Writing without planning your content',
      'Adding too many ideas into one chapter',
      'Repeating the same points in different ways',
      'Ignoring how visuals and text work together',
    ] },
    { type: 'p', text: 'Remember: Clarity creates confidence — for you and your reader.' },

    { type: 'takeaway', text: 'Content mapping turns your book from “I know what I want to say” into “I know exactly how to say it, step by step.” When your content is mapped: writing becomes faster, your ideas feel organised, and your book feels professional and intentional.' },
  ],

  'm2-4': [
    { type: 'p', text: 'You’ve done the thinking. You’ve built the structure. You’ve mapped your content. Now it’s time to bring everything together into one place — your book blueprint.' },
    { type: 'p', text: 'This is the step that turns your idea into a clear, actionable plan you can follow from start to finish.' },

    { type: 'h', text: 'What is a Book Blueprint?' },
    { type: 'p', text: 'Your book blueprint is a complete overview of your book. It combines your core concept, target audience, chapter structure, content plan, and reader journey.' },
    { type: 'p', text: 'Think of it as your master guide — something you can return to at any point to stay focused and aligned. Instead of guessing what to do next, your blueprint tells you exactly where you’re going.' },

    { type: 'h', text: 'Step 1: Bring Everything Together' },
    { type: 'p', text: 'Now you will gather all the work you’ve already done and organise it into one clear document. Your blueprint does not need to be complicated — it just needs to be clear and usable.' },
    { type: 'p', text: 'Your Book Blueprint Should Include:' },
    { type: 'ul', items: [
      'Your Core Concept — what your book is about (your one-sentence idea)',
      'Your Target Audience — who your book is for and what they need',
      'Your Reader Journey — where your reader starts and where they end',
      'Your Chapter Structure — a list of your chapters in order',
      'Your Content Map — key points for each chapter (or pages for children’s books)',
    ] },

    { type: 'h', text: 'For Different Types of Books' },
    { type: 'ul', items: [
      'Children’s Picture Books — Include page-by-page ideas, note what happens in each scene, add simple notes for illustrations',
      'Novels — Include chapter summaries, highlight key plot points and character development',
      'Non-Fiction — Include key lessons, frameworks, or steps; focus on clarity and progression',
    ] },
    { type: 'p', text: 'Your blueprint should match the type of book you’re creating.' },

    { type: 'exercise', title: 'Exercise 1: Build Your Blueprint', body: [
      { type: 'p', text: 'Create your book blueprint using the structure above. You can write it in a document, use bullet points, and keep it simple and clear.' },
      { type: 'p', text: 'Goal: Have everything in one place so you can see your full book clearly.' },
    ] },

    { type: 'h', text: 'Step 2: Refine and Strengthen Your Plan' },
    { type: 'p', text: 'Now that your blueprint is created, it’s time to review and improve it. This step is what takes your book from “good” to strong and intentional.' },
    { type: 'p', text: 'Ask yourself: Is my idea clear and focused? Does my structure make sense from start to finish? Does each chapter have a purpose? Is the reader journey clear?' },
    { type: 'p', text: 'Look for Opportunities to Improve — simplify sections that feel too complicated, remove anything unnecessary, strengthen weak areas, add missing steps or moments.' },

    { type: 'exercise', title: 'Exercise 2: Review Your Blueprint', body: [
      { type: 'p', text: 'Go through your blueprint and: (1) Highlight anything that feels unclear, (2) Make at least 2 improvements or adjustments, (3) Write a final version of your core concept.' },
      { type: 'p', text: 'Then answer: Do I feel clear about what I’m creating? Could I confidently explain my book to someone else?' },
      { type: 'p', text: 'Goal: Turn your plan into something you feel confident executing.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Skipping this step and jumping straight into writing',
      'Overcomplicating your blueprint',
      'Not reviewing or refining your plan',
      'Creating a blueprint but not using it',
    ] },
    { type: 'p', text: 'Remember: your blueprint is a tool, not just a task.' },

    { type: 'takeaway', text: 'Your book blueprint is what transforms your idea into something real and achievable. It gives you direction, clarity, and confidence. Instead of wondering what to do next, you now have a step-by-step plan to follow.' },
  ],

  /* ── MODULE 3: WRITING YOUR MANUSCRIPT ────────────────────────────── */

  'm3-1': [
    { type: 'p', text: 'Now that you have your book blueprint, the next step is deciding how your content will be delivered. Not all books are structured the same way. Some books are driven by story, while others are focused on teaching — and some combine both.' },
    { type: 'p', text: 'In this lesson, you will learn how to choose the right structure for your book, so your message is delivered in the most effective and engaging way.' },

    { type: 'h', text: 'What is Story vs Educational Structure?' },
    { type: 'p', text: 'This is about how your book communicates its message.' },
    { type: 'ul', items: [
      'A story structure teaches through characters, experiences, and emotions',
      'An educational structure teaches through clear information, steps, or guidance',
    ] },
    { type: 'p', text: 'Neither is better — it depends on your idea, your audience, and the experience you want to create.' },

    { type: 'h', text: 'Story-Based Structure (Narrative)' },
    { type: 'p', text: 'This structure is built around characters, events, and a journey or transformation. The reader learns through the story, not direct instruction.' },
    { type: 'p', text: 'Best For: Children’s books; Novels; Books focused on emotional connection or life lessons.' },
    { type: 'p', text: 'Example — A children’s book about healthy eating: a character who doesn’t like vegetables, faces a challenge, learns to try new foods, and ends with a positive transformation. The lesson is shown, not explained.' },

    { type: 'h', text: 'Educational Structure (Informational)' },
    { type: 'p', text: 'This structure is built around clear ideas, lessons or steps, and practical guidance. The reader learns through direct teaching.' },
    { type: 'p', text: 'Best For: Non-fiction books; Guides, workbooks, or manuals; Topics that require clarity and instruction.' },
    { type: 'p', text: 'Example — A healthy eating guide: Chapter 1: Why nutrition matters; Chapter 2: Understanding food groups; Chapter 3: Simple meal ideas. The lesson is explained clearly.' },

    { type: 'h', text: 'Blended Structure (Story + Education)' },
    { type: 'p', text: 'Many powerful books use both. For example: a story with a clear message at the end; a children’s book with a lesson and activity; a guide that includes real-life stories. This is often the most engaging approach.' },

    { type: 'exercise', title: 'Exercise 1: Choose Your Structure', body: [
      { type: 'p', text: 'Is my book better suited to: story-based, educational, or a mix of both? Then write: “My book will use a [structure type] because…”' },
      { type: 'p', text: 'Goal: Make a clear, intentional choice.' },
    ] },

    { type: 'h', text: 'Step 2: Apply the Structure to Your Book' },
    { type: 'p', text: 'Now that you’ve chosen your structure, you need to apply it to your blueprint. This ensures your book feels consistent, clear, and purposeful.' },
    { type: 'ul', items: [
      'If You Chose Story-Based — Focus on character development, key moments and events, emotional progression. Each chapter or page should move the story forward.',
      'If You Chose Educational — Focus on clear lessons or steps, logical progression, practical value. Each chapter should teach something specific.',
      'If You Chose Blended — Balance both: use story to engage, use structure to teach. Example: Story → Lesson → Activity or takeaway.',
    ] },

    { type: 'h', text: 'For Visual & Illustrated Books' },
    { type: 'ul', items: [
      'Let the story carry the emotion',
      'Let the visuals support understanding',
      'Keep text simple and intentional',
    ] },
    { type: 'p', text: 'Avoid over-explaining — let the experience do the work.' },

    { type: 'exercise', title: 'Exercise 2: Apply Your Structure', body: [
      { type: 'p', text: 'Take one chapter (or section/page) and rewrite it based on your chosen structure: if story-based describe what happens; if educational list what is taught; if blended include both elements.' },
      { type: 'p', text: 'Then answer: Does this feel clear and engaging? Does it match the experience I want to create?' },
      { type: 'p', text: 'Goal: Bring your structure to life in a practical way.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Mixing structures without intention',
      'Overloading a story with too much teaching',
      'Making educational content too dry or complex',
      'Not considering what your audience prefers',
    ] },
    { type: 'p', text: 'Always come back to this: How does my reader learn best?' },

    { type: 'takeaway', text: 'The way you structure your book shapes the entire experience. Story creates connection. Education creates clarity. Together, they create impact. Your job is to choose the approach that best delivers your message.' },
  ],

  'm3-2': [
    { type: 'p', text: 'You’ve done the planning. You’ve built your blueprint. Now it’s time to do the thing many people delay the most: start writing your book.' },
    { type: 'p', text: 'The writing process doesn’t need to feel overwhelming or perfect — it just needs to be consistent and intentional. In this lesson, you will learn how to approach writing in a simple, structured way, so you can actually finish your manuscript.' },

    { type: 'h', text: 'What is the Writing Process?' },
    { type: 'p', text: 'The writing process is how you turn your plan into a completed manuscript. It’s not about writing everything perfectly the first time — it’s about:' },
    { type: 'ul', items: [
      'Getting your ideas down',
      'Following your structure',
      'Improving as you go',
    ] },
    { type: 'p', text: 'Progress is more important than perfection.' },

    { type: 'h', text: 'Step 1: Start with Progress, Not Perfection' },
    { type: 'p', text: 'One of the biggest reasons people don’t finish their books is because they try to make everything perfect on the first try. This slows you down and creates pressure.' },
    { type: 'p', text: 'Instead, focus on writing freely, following your content map, and getting your ideas out of your head.' },
    { type: 'p', text: 'How to Make Writing Easier:' },
    { type: 'ul', items: [
      'Break your writing into small sections (one chapter or page at a time)',
      'Set a simple goal (e.g. 20–30 minutes per session)',
      'Use your blueprint — don’t start from scratch',
    ] },
    { type: 'p', text: 'You are not creating the final version — you are creating your first draft.' },

    { type: 'exercise', title: 'Exercise 1: Start Your First Draft', body: [
      { type: 'p', text: 'Choose one chapter (or page if it’s a children’s book) and set a timer for 20–30 minutes. Write without editing or stopping. Focus only on getting your ideas down.' },
      { type: 'p', text: 'Afterwards, reflect: How did that feel? What helped you get started?' },
      { type: 'p', text: 'Goal: Build momentum and reduce fear around writing.' },
    ] },

    { type: 'h', text: 'Step 2: Stay Consistent & Overcome Writer’s Block' },
    { type: 'p', text: 'Writer’s block is not a lack of ability — it’s usually overthinking, fear of getting it wrong, or trying to be perfect. The solution is not to wait — it’s to keep moving.' },

    { type: 'h', text: 'Simple Ways to Overcome Writer’s Block' },
    { type: 'ul', items: [
      'Lower the pressure — remind yourself: this is just a draft',
      'Go back to your plan — use your content map to guide you',
      'Write something small — even one paragraph is progress',
      'Change your environment — a new space can shift your energy',
      'Talk it out — say your ideas out loud, then write them',
    ] },
    { type: 'p', text: 'Consistency Over Intensity — You don’t need to write for hours. Writing a little, often, is more powerful than waiting for the “perfect moment.”' },

    { type: 'h', text: 'Step 3: Write in a Digital Format (Prepare for Publishing)' },
    { type: 'p', text: 'As you write, it is important that your manuscript is created in a digital format. This is especially important if you plan to self-publish using platforms like Amazon Kindle Direct Publishing.' },
    { type: 'p', text: 'Why This Matters — your manuscript will eventually need to be edited, formatted, and uploaded for publishing. Working digitally makes this process much easier.' },

    { type: 'h', text: 'Best Practices' },
    { type: 'ul', items: [
      'Use tools like Microsoft Word or Google Docs',
      'Keep your work organised — one document per book (or clearly labelled chapters)',
      'Save your work regularly — use cloud storage or backups',
    ] },
    { type: 'p', text: 'For Illustrated & Children’s Books — write your text in a document first and keep notes for page breaks, illustrations, and scene descriptions. This makes it much easier when you move to design and layout later.' },

    { type: 'exercise', title: 'Exercise 2: Set Up Your Writing System', body: [
      { type: 'p', text: 'Set yourself up to succeed by creating your writing document, adding your chapter titles or pages, and writing a simple weekly writing goal.' },
      { type: 'p', text: 'Then answer: When will I write? How will I stay consistent?' },
      { type: 'p', text: 'Goal: Create a system that supports you finishing your book.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Waiting for motivation instead of building a routine',
      'Editing while writing your first draft',
      'Writing without using your structure',
      'Not saving or organising your work properly',
    ] },
    { type: 'p', text: 'Remember: done is better than perfect.' },

    { type: 'takeaway', text: 'Writing your book is not about talent — it’s about process and consistency. Small steps lead to big results. The goal is simple: start, keep going, and finish your first draft.' },
  ],

  'm3-3': [
    { type: 'p', text: 'You’ve written your first draft — that’s a huge achievement. Now it’s time to refine your work. Editing is where your book transforms from “something written” to something ready to be read.' },
    { type: 'p', text: 'In this lesson, you will learn how to edit your own work step-by-step, so it becomes clearer, stronger, and more engaging.' },

    { type: 'h', text: 'What is Self-Editing?' },
    { type: 'p', text: 'Self-editing is the process of reviewing and improving your own writing before sharing it with others or publishing. It helps you:' },
    { type: 'ul', items: [
      'Improve clarity',
      'Fix mistakes',
      'Strengthen your message or story',
      'Create a better experience for your reader',
    ] },
    { type: 'p', text: 'Writing is creating. Editing is refining.' },

    { type: 'h', text: 'Step 1: Edit for Clarity and Structure' },
    { type: 'p', text: 'Start by looking at the big picture. Before focusing on grammar or spelling, ask: Does this make sense?' },
    { type: 'p', text: 'What to Look For:' },
    { type: 'ul', items: [
      'Are your ideas clear and easy to understand?',
      'Does each chapter have a purpose?',
      'Does your content follow a logical flow?',
      'Are you repeating yourself anywhere?',
    ] },

    { type: 'h', text: 'For Different Book Types' },
    { type: 'ul', items: [
      'Children’s Books — Keep language simple and easy to follow; ensure the message is clear; remove unnecessary words',
      'Novels — Check story flow, pacing, and character development; make sure scenes connect logically',
      'Non-Fiction — Ensure each chapter teaches something clear; remove anything confusing or unnecessary',
    ] },
    { type: 'p', text: 'Focus on clarity first, not perfection.' },

    { type: 'h', text: 'Step 2: Edit for Language and Quality' },
    { type: 'p', text: 'Now you can focus on the details. This includes grammar, spelling, sentence structure, and tone and readability.' },
    { type: 'p', text: 'How to Improve Your Writing:' },
    { type: 'ul', items: [
      'Shorten long or complicated sentences',
      'Replace unclear words with simpler ones',
      'Read your work out loud (this helps you hear mistakes)',
    ] },

    { type: 'h', text: 'Helpful AI Tools' },
    { type: 'ul', items: [
      'Grammarly — Helps with grammar, spelling, and clarity',
      'Hemingway Editor — Highlights complex sentences and improves readability',
      'ChatGPT — Can help rewrite, simplify, or improve sections of your text',
    ] },
    { type: 'p', text: 'Use these tools to support you — not replace your voice.' },

    { type: 'h', text: 'Step 3: Refine the Reader Experience' },
    { type: 'p', text: 'Now think about your book from the reader’s perspective. Ask yourself: How does this feel to read?' },
    { type: 'p', text: 'What to Focus On:' },
    { type: 'ul', items: [
      'Is the tone consistent throughout?',
      'Is it engaging and easy to follow?',
      'Does it match your audience?',
      'Does it deliver the experience you intended?',
    ] },
    { type: 'p', text: 'For Visual & Illustrated Books — ensure text and images work together; avoid over-explaining what the illustration already shows; keep language concise and impactful.' },
    { type: 'p', text: 'Your goal is to create a smooth, enjoyable reading experience.' },

    { type: 'exercise', title: 'Exercise 1: Edit One Section', body: [
      { type: 'p', text: 'Choose one chapter (or page) and: (1) Read it slowly, (2) Highlight anything unclear, anything repetitive, and any mistakes, (3) Rewrite that section to improve clarity and flow.' },
      { type: 'p', text: 'Then reflect: What improved? What did you remove or simplify?' },
      { type: 'p', text: 'Goal: Practice improving your work intentionally.' },
    ] },

    { type: 'exercise', title: 'Exercise 2: Use an AI Tool', body: [
      { type: 'p', text: 'Take a section of your writing and: (1) Run it through one of the tools above, (2) Review the suggestions, (3) Accept or adjust changes based on your voice.' },
      { type: 'p', text: 'Then answer: Did this improve clarity? Did it still sound like me?' },
      { type: 'p', text: 'Goal: Learn how to use tools without losing your voice.' },
    ] },

    { type: 'h', text: 'Common Mistakes to Avoid' },
    { type: 'ul', items: [
      'Editing while writing your first draft',
      'Only checking spelling and ignoring clarity',
      'Over-editing and removing your natural voice',
      'Relying completely on AI without reviewing',
    ] },
    { type: 'p', text: 'Editing is about improving — not replacing your originality.' },

    { type: 'takeaway', text: 'Self-editing is what turns your book into something ready to share with the world. You don’t need to be perfect — you just need to be clear, intentional, and thoughtful.' },
  ],

  'm3-4': [
    { type: 'p', text: 'You’ve drafted, restructured, and self-edited. This final lesson is about the last pass before your manuscript moves into book format — a focused consistency check that makes sure every page feels polished and intentional.' },
    { type: 'p', text: 'By the end of this module you should have a finished, clear and fully edited digital manuscript ready to be transferred into book format. The manuscript is easy to read and has all the chapters and components in digital format.' },

    { type: 'h', text: 'Step 1: Full Read-Through in One Sitting' },
    { type: 'p', text: 'Read your manuscript from cover to cover in as few sittings as possible. You’re not hunting for typos yet — you’re checking the experience:' },
    { type: 'ul', items: [
      'Does the tone stay consistent from chapter 1 to the end?',
      'Does the pacing work, or does it drag in places?',
      'Are there any chapters that feel out of place or repeat a point you already made?',
    ] },
    { type: 'p', text: 'Mark anything that breaks the flow. Don’t fix it yet — just note it.' },

    { type: 'h', text: 'Step 2: Read It Out Loud' },
    { type: 'p', text: 'Reading out loud is one of the fastest ways to catch problems your eyes skip over. You’ll hear:' },
    { type: 'ul', items: [
      'Sentences that are too long or tangled',
      'Repeated words within the same paragraph',
      'Dialogue or narration that doesn’t sound natural',
    ] },
    { type: 'p', text: 'If you stumble reading it, your reader will stumble too. Rewrite until it reads smoothly aloud.' },

    { type: 'h', text: 'Step 3: Final Consistency Check' },
    { type: 'p', text: 'Run a pass purely for consistency. The small details matter when the book is printed:' },
    { type: 'ul', items: [
      'Chapter titles use the same style and capitalisation throughout',
      'Character, product, or place names are spelled the same every time',
      'Tense and point of view stay consistent within each section',
      'Spacing between paragraphs and around headings is uniform',
      'Numbers, dates, and measurements follow one style (e.g. “10” vs “ten”)',
    ] },

    { type: 'h', text: 'Step 4: Finalise Your Digital Manuscript' },
    { type: 'p', text: 'Once the polish pass is done, clean up your document so it’s ready to move into the KDP template in Module 4:' },
    { type: 'ul', items: [
      'One document per book, clearly named and saved to cloud storage',
      'Chapters clearly separated (use page breaks, not blank lines)',
      'For illustrated books: keep notes for page breaks, illustrations, and scene descriptions alongside the text',
      'Keep a backup copy before you begin formatting',
    ] },

    { type: 'exercise', title: 'Exercise: Final Polish Pass', body: [
      { type: 'p', text: 'Do a full read-through with these four passes in order: flow, read-aloud, consistency, digital clean-up. Each time, stop and correct as you go.' },
      { type: 'p', text: 'Then answer: Would I be happy handing this manuscript to a printer today? If not, what’s the last thing standing in the way?' },
      { type: 'p', text: 'Goal: A truly publish-ready manuscript you’re confident transferring into the KDP template.' },
    ] },

    { type: 'takeaway', text: 'The final polish is the difference between “a book I wrote” and “a book I’m proud to publish.” You don’t need perfection — you need a manuscript that’s clear, consistent, and ready to become a real book.' },
  ],

  /* ── MODULE 4: FORMATTING & COVER DESIGN ──────────────────────────── */

  'm4-1': [
    { type: 'p', text: 'Before you format or design your book, you must choose your trim size. Trim size = the final printed size of your book (width × height). This is one of the most important setup decisions you will make, as it affects your layout, formatting, and the overall finish of your book on Amazon KDP.' },

    { type: 'h', text: 'Step 1: Choose a Size Based on Your Book Type' },
    { type: 'p', text: 'Select a size that matches your book category:' },
    { type: 'ul', items: [
      '6" x 9" (15.24 x 22.86 cm) → fiction, non-fiction, self-help',
      '5.5" x 8.5" (13.97 x 21.59 cm) → memoirs, smaller books',
      '5" x 8" (12.7 x 20.32 cm) → novels, compact books',
      '8.5" x 11" (21.59 x 27.94 cm) → workbooks, journals',
      '8.5" x 8.5" → children’s picture books',
    ] },

    { type: 'h', text: 'Step 2: Match the Size to Your Content' },
    { type: 'p', text: 'Choose based on what your book includes:' },
    { type: 'ul', items: [
      'Mostly text → smaller sizes (5" x 8", 6" x 9")',
      'Images or illustrations → larger sizes (8.5" x 8.5", 8.5" x 11")',
      'Interactive or activity-based → larger sizes for space',
    ] },

    { type: 'h', text: 'Step 3: Lock Your Size Before Formatting' },
    { type: 'p', text: 'Once you choose your trim size:' },
    { type: 'ul', items: [
      'Set your document to this exact size in your writing software',
      'Keep all formatting consistent with this size',
      'Do not change it later',
    ] },
    { type: 'p', text: 'Your trim size affects your entire book layout and cover.' },

    { type: 'exercise', title: 'Exercise: Choose Your Final Book Size', body: [
      { type: 'p', text: 'Complete this:' },
      { type: 'quote', text: '“My book will be sized at ______ because it suits my [book type] and allows for [text/images/reader experience].”' },
    ] },
  ],

  'm4-2': [
    { type: 'p', text: 'Before you start formatting your book, you need to download the correct template from Amazon Kindle Direct Publishing. KDP templates are pre-formatted documents that already include the correct page size, margins, and layout settings.' },

    { type: 'h', text: 'Step 1: Go to the KDP Template Page' },
    { type: 'p', text: 'Go to the official KDP template page. Once there, scroll to the template section and decide if you want:' },
    { type: 'ul', items: [
      'Blank template (recommended for beginners)',
      'Sample content template (includes example pages)',
    ] },

    { type: 'h', text: 'Step 2: Select Your Trim Size and Download' },
    { type: 'ul', items: [
      'Choose your trim size (from your previous lesson)',
      'Select your language',
      'Click Download',
    ] },
    { type: 'p', text: 'The file will download as a ZIP folder containing your template.' },

    { type: 'h', text: 'Step 3: Open and Prepare Your Template' },
    { type: 'ul', items: [
      'Open (extract) the ZIP folder',
      'Select the template file (usually Microsoft Word)',
      'Open the document and review the layout',
    ] },
    { type: 'p', text: 'You can now start adding your content inside the template.' },

    { type: 'exercise', title: 'Exercise: Download Your Template', body: [
      { type: 'quote', text: '“I have downloaded the [trim size] template and opened it in [software]. I am now ready to begin formatting my book.”' },
    ] },

    { type: 'quote', text: 'More details: https://kdp.amazon.com/en_US/help/topic/GDDYZG2C7RVF5N9J' },
  ],

  'm4-3': [
    { type: 'p', text: 'Now that you have your KDP template, the next step is to move your manuscript into it and format it correctly. You will be copying your text, placing it into the template, and adjusting it to fit the layout.' },

    { type: 'h', text: 'Step 1: Copy Your Manuscript into the Template' },
    { type: 'p', text: 'Open both your original manuscript document and your KDP template document.' },
    { type: 'ul', items: [
      'Highlight your text from the original document',
      'Copy (Ctrl + C / Cmd + C)',
      'Paste into the KDP template (Ctrl + V / Cmd + V)',
    ] },
    { type: 'p', text: 'Paste your content section by section (not all at once) to keep control of formatting.' },

    { type: 'h', text: 'Step 2: Format Your Text to Fit the Template' },
    { type: 'p', text: 'After pasting, your formatting may look incorrect — this is normal. Now adjust your text.' },
    { type: 'p', text: 'Apply consistent:' },
    { type: 'ul', items: [
      'Font style',
      'Font size',
      'Line spacing',
    ] },
    { type: 'p', text: 'Use the template’s headings for chapter titles and page breaks between chapters. Make sure your text stays within the margins and layout of the template.' },

    { type: 'h', text: 'Step 3: Add Images or Illustrations (If Applicable)' },
    { type: 'p', text: 'If your book includes visuals, insert images directly into the template via Insert → Image → Upload file. Position images in line with text or on separate pages, aligned with your content (especially for children’s books). Adjust size, placement, and spacing.' },
    { type: 'p', text: 'Ensure images are clear and do not overflow the page margins.' },

    { type: 'exercise', title: 'Exercise: Transfer Your First Section', body: [
      { type: 'quote', text: '“I have copied and pasted my [chapter/page] into the KDP template, formatted the text, and adjusted the layout to fit the page correctly.”' },
    ] },

    { type: 'p', text: 'Your template is where your book comes to life — you can move, design and format your book properly. Once you are happy, download as a PDF and move on to cover design using Canva.' },
  ],

  'm4-4': [
    { type: 'p', text: 'Your book cover is the first thing people see — and on platforms like Amazon KDP, it plays a huge role in whether someone clicks or buys.' },
    { type: 'p', text: 'For KDP, your cover must be one single PDF file that includes the back cover (left), spine (middle), and front cover (right). This creates a wrap-around cover for your printed book.' },
    { type: 'p', text: 'In this lesson, you will create your full cover using Canva.' },

    { type: 'h', text: 'Step 1: Create a Canva Account & Set Your Cover Size' },
    { type: 'p', text: 'If you’ve never used Canva before:' },
    { type: 'ol', items: [
      'Go to www.canva.com',
      'Click Sign up',
      'Create a free account (email, Google, or Apple)',
      'Once logged in, click “Create a design” (top right)',
      'Select “Custom size”',
    ] },
    { type: 'p', text: 'Set Your Dimensions — your cover must include front + spine + back. Set units to inches and use this formula:' },
    { type: 'quote', text: 'Width = (Front × 2) + spine\nHeight = trim height' },
    { type: 'p', text: 'Example (6" x 9" book): Width ≈ 12.5" (includes spine space), Height = 9". Click Create new design — you now have a blank canvas that represents your full book cover.' },

    { type: 'h', text: 'Step 2: Design Your Front Cover (Right Side)' },
    { type: 'p', text: 'Your canvas is split into 3 sections: Left = back cover, Middle = spine, Right = front cover. Start with the right side (front cover).' },
    { type: 'p', text: 'Add Your Content — use the left-hand menu in Canva:' },
    { type: 'ul', items: [
      'Click Text → Add a heading (your book title)',
      'Click Text again → Add smaller text (author name)',
      'Click Elements → Add shapes, icons, or images',
      'Click Uploads → Add your own images if needed',
    ] },
    { type: 'p', text: 'What to Include:' },
    { type: 'ul', items: [
      'Book title (large and clear)',
      'Subtitle (optional)',
      'Author name',
      'Simple visuals',
    ] },
    { type: 'p', text: 'Keep it easy to read, clean, and not overcrowded.' },

    { type: 'h', text: 'Step 3: Design Your Back Cover + Spine' },
    { type: 'p', text: 'Now move to the rest of your canvas. Back Cover (Left Side) — add your book description (blurb).' },
    { type: 'p', text: 'How to Write a Simple Blurb — use this structure:' },
    { type: 'quote', text: 'Hook → What it’s about → Why it matters' },
    { type: 'p', text: 'Example: “This fun and engaging story helps children build confidence through food and friendship. Perfect for young readers learning healthy habits.”' },

    { type: 'h', text: 'Step 4: Final Check & Download Your Cover' },
    { type: 'p', text: 'Before downloading, review everything.' },
    { type: 'p', text: 'Final Checklist:' },
    { type: 'ul', items: [
      'Front cover is on the right',
      'Back cover is on the left',
      'Spine is in the middle',
      'Text is not too close to edges',
      'Everything is clear and readable',
    ] },
    { type: 'p', text: 'Download Your File:' },
    { type: 'ol', items: [
      'Click Share (top right)',
      'Click Download',
      'File type: PDF Print',
      'Click Download',
    ] },
    { type: 'p', text: 'You now have ONE PDF file that includes back cover, spine, and front cover. This is ready to upload to KDP.' },
  ],

  /* ── MODULE 5: AMAZON ACCOUNT SET UP ──────────────────────────────── */

  'm5-1': [
    { type: 'p', text: 'Amazon Kindle Direct Publishing (KDP) is a platform that allows you to publish your book on Amazon for free. It gives you the ability to turn your manuscript into a real book that people can buy online, without needing a traditional publisher.' },

    { type: 'h', text: 'How KDP Works' },
    { type: 'p', text: 'KDP is designed to be simple and accessible, even for beginners. Once your book is ready, you can:' },
    { type: 'ul', items: [
      'Upload your manuscript (your formatted book file)',
      'Upload your cover (front, spine, and back in one PDF)',
      'Add your book details (title, description, keywords)',
      'Set your price',
    ] },
    { type: 'p', text: 'After publishing, your book becomes available on Amazon for customers to purchase.' },

    { type: 'h', text: 'Print-on-Demand (Important to Understand)' },
    { type: 'p', text: 'KDP uses a system called print-on-demand. This means:' },
    { type: 'ul', items: [
      'Your book is only printed when someone orders it',
      'You do not need to buy or store inventory',
      'Amazon handles printing, shipping, and delivery',
    ] },
    { type: 'p', text: 'This makes it low-risk and beginner-friendly.' },

    { type: 'h', text: 'How You Make Money' },
    { type: 'p', text: 'When someone buys your book, Amazon takes a printing cost and you receive the remaining profit (royalty). You can set your price and control your earnings.' },

    { type: 'h', text: 'Types of Books You Can Publish' },
    { type: 'ul', items: [
      'Paperback books',
      'Hardback books',
      'eBooks (Kindle version)',
    ] },
    { type: 'p', text: 'You can choose one or all formats depending on your goals.' },

    { type: 'h', text: 'Why KDP is Powerful' },
    { type: 'ul', items: [
      'Free to use',
      'Global distribution (your book can be sold worldwide)',
      'No need for a publisher',
      'Full control over your book and pricing',
    ] },
    { type: 'p', text: 'It allows you to turn your idea into a published product quickly and independently.' },

    { type: 'exercise', title: 'Exercise: Reflect on Your Publishing Goal', body: [
      { type: 'p', text: 'Complete this sentence: “I want to use KDP to publish my book because…”' },
    ] },
  ],

  'm5-2': [
    { type: 'h', text: 'Step 1: Create a KDP Account' },
    { type: 'p', text: 'Already have an Amazon account? To sign in to your KDP account:' },
    { type: 'ol', items: [
      'Go to https://kdp.amazon.com',
      'Under Sign in with your Amazon account, click Sign in',
      'Enter your email address and password, then click Sign in',
      'After you’ve successfully logged into your account you’ll be directed to your KDP Bookshelf',
    ] },
    { type: 'p', text: 'Don’t have an Amazon account? To create your KDP account:' },
    { type: 'ol', items: [
      'Go to KDP, and click Sign up',
      'Click Create your KDP account',
      'Enter your name, email address, and a secure password',
    ] },
    { type: 'p', text: 'Once you’ve created your account, you’ll need to enter author, payment, and tax information.' },

    { type: 'h', text: 'Step 2: Author/Publisher Information' },
    { type: 'p', text: 'To set up your account profile:' },
    { type: 'ol', items: [
      'Select a Business type (individual or corporation)',
      'Add your first and last name or the name of your publishing company. Don’t enter your pen name or include special characters (e.g. & ! ? #)',
      'Enter the mailing address you want used for tax reporting and royalty payments. Make sure the address is valid',
      'Click Save',
    ] },
    { type: 'p', text: 'Note: The name provided in the Author/Publisher Information should be the legal name of the author. Payments and tax forms will be issued under the same name. If you want to use a pen name, enter it when setting up your book details.' },

    { type: 'h', text: 'Step 3: Getting Paid' },
    { type: 'p', text: 'KDP provides different payment methods such as direct deposits, wire transfer or check. Alternative payment methods such as Amazon Payments or PayPal are not available at this time.' },
    { type: 'p', text: 'To add a bank account:' },
    { type: 'ol', items: [
      'Go to your KDP account',
      'Complete two-step verification',
      'Under Getting Paid, click Add a bank account',
      'Enter your bank account information according to your country/region requirements. Check Add my bank account',
      'Click Add to save information',
      'Click Save',
    ] },
    { type: 'p', text: 'Note: The account holder’s name should match the name associated with the bank account exactly, or Amazon may not be able to deposit your payments.' },

    { type: 'h', text: 'Step 4: Tax Information' },
    { type: 'p', text: 'Amazon requires all publishers, including nonprofit or tax-exempt organisations, to provide valid taxpayer identification in order to comply with country-specific tax reporting regulations. Tax withholding and specific requirements vary based on whether you are a U.S. citizen or non-U.S. citizen.' },
    { type: 'p', text: 'To complete your tax profile:' },
    { type: 'ol', items: [
      'Go to Your Account',
      'Select Tax Information',
      'Click Complete Tax Profile',
      'Respond to the requested information. Save and submit the form',
    ] },
    { type: 'p', text: 'If you are a non-U.S. publisher interested in claiming tax treaty benefits to reduce your withholding, you have to provide a tax identification number (TIN).' },
  ],

  'm5-3': [
    { type: 'p', text: 'Watch the Amazon KDP account setup video. This guide is provided by Kindle Direct Publishing and is designed to support you visually through the process. It will take you step by step through setting up your account, and is especially helpful if you get stuck or prefer clear, visual guidance along the way.' },

    { type: 'h', text: 'Video Links' },
    { type: 'p', text: 'YouTube video — account setup walkthrough:' },
    { type: 'quote', text: 'https://www.youtube.com/watch?v=lyP_8p-SJco' },
    { type: 'p', text: 'Setting up payment account video:' },
    { type: 'quote', text: 'https://kdp.amazon.com/en_US/help/topic/GUFL3496V6U2ESA7' },
  ],

  'm5-4': [
    { type: 'p', text: 'Before you move on to publishing, run through this full KDP account checklist. If anything is missing, pause and complete it now — it’s much easier than fixing gaps after you’ve started uploading a book.' },

    { type: 'h', text: 'Account Setup' },
    { type: 'ul', items: [
      'Sign in to your KDP account',
      'Complete your Author/Publisher Name',
      'Add your email and contact details',
    ] },

    { type: 'h', text: 'Payment & Tax Details' },
    { type: 'ul', items: [
      'Add your bank account details (for royalties)',
      'Complete tax information (important to get paid correctly)',
      'Double-check all payment details are correct',
    ] },

    { type: 'h', text: 'Book Preparation' },
    { type: 'ul', items: [
      'Finalise your book title',
      'Write your book description',
      'Choose keywords (what people will search)',
      'Choose categories (where your book will sit on Amazon)',
    ] },

    { type: 'h', text: 'Files Ready to Upload' },
    { type: 'ul', items: [
      'Upload your manuscript (Word or PDF)',
      'Upload your book cover',
      'Preview your book using KDP preview tool',
    ] },
  ],

  /* ── MODULE 6: PUBLISHING YOUR BOOK! ──────────────────────────────── */

  'm6-1': [
    { type: 'h', text: 'Step 1: How to Upload Your Book (Watch Video)' },
    { type: 'p', text: 'Before starting, make sure you are happy with your manuscript and cover. Note that you can edit both at any time and re-upload if there are any mistakes. But before we start publishing, watch the video recommended below.' },
    { type: 'p', text: 'We have hand-picked this video by Sean Dollwet, “How to upload a book to Amazon KDP” — because he goes through every step for publishing Kindle and paperback books.' },

    { type: 'h', text: 'Watch This Video' },
    { type: 'quote', text: 'https://www.youtube.com/watch?v=H4x8fH-vd1g' },
  ],

  'm6-2': [
    { type: 'h', text: 'Step 1: Start Upload Process' },
    { type: 'p', text: 'KDP’s book setup makes it easy for you to upload, enter, and modify your book before publishing. The information you enter during this setup will be used in creating your book’s Amazon detail page. The detail page is where readers go to buy your book.' },
    { type: 'p', text: 'If you want to sell your book as an eBook, hardcover, and paperback, be sure to create all formats in your KDP account and link them together.' },
    { type: 'p', text: 'Note: Before publishing your book, don’t forget to format your manuscript and cover. You can review KDP’s guidelines and recommendations on Paperback Formatting, Hardcover Formatting, and eBook Formatting in the Help Center.' },

    { type: 'h', text: 'Step 2: Enter Book Details' },
    { type: 'p', text: 'Entering your book details is the first step towards publishing your book. These details directly correlate with what shows up on the Amazon detail page for your book. You have full control over what is displayed. However, keep in mind that some of these fields can’t be modified once your book is published — pay extra close attention to ensure all of these details are correct.' },
    { type: 'p', text: 'The title, subtitle, author name, series information, and ISBN in your manuscript file must match the details you enter during title setup. Kindle eBooks, paperbacks, and hardcover books are linked automatically if the author name and book title of both editions match exactly.' },
    { type: 'p', text: 'For low-content books, you can choose to either use your own ISBN or publish without an ISBN.' },
    { type: 'p', text: 'To begin:' },
    { type: 'ol', items: [
      'Go to your Bookshelf',
      'Click the + Create button',
      'Click to choose which type of book to create',
    ] },
    { type: 'p', text: 'When entering your book details, note KDP cannot accept HTML tags in the title, subtitle, author, contributors, or keywords fields.' },

    { type: 'h', text: 'Step 3: Upload and Preview Book' },
    { type: 'p', text: 'The next step in the setup workflow is to upload and preview your book. Here, you can upload your manuscript and preview it to see exactly what your book will look like.' },
    { type: 'p', text: 'This section of the setup workflow also contains information about your book’s ISBN. You will need a unique ISBN for each format of your book: eBook, paperback, and hardcover.' },
    { type: 'p', text: 'Notes:' },
    { type: 'ul', items: [
      'If you are publishing a paperback or hardcover book, you will have to enter your print options before previewing',
      'Ensure the manuscript you upload contains the book’s interior for the title and description you entered. Your description should describe the main plot, theme, or idea of the book',
      'For eBooks, an error message will surface if there is a mismatch',
    ] },

    { type: 'h', text: 'Title Creation Limit' },
    { type: 'p', text: 'To ensure a positive experience for all authors, KDP limits the number of titles you can create at the same time to 10 per book format each week. If you expect to regularly create a large number of titles, contact KDP to inquire about an exception.' },
  ],

  'm6-3': [
    { type: 'p', text: 'Now that your book is ready, you need to decide how much to sell it for and understand how you get paid. When you publish on Amazon KDP, you don’t keep the full price of the book — your earnings are called royalties.' },
    { type: 'quote', text: 'A royalty = the money you receive from each sale after costs are taken.' },

    { type: 'h', text: 'Step 1: Understand How Paperback Royalties Work' },
    { type: 'p', text: 'For paperback books, KDP uses a simple formula:' },
    { type: 'quote', text: 'Royalty = 60% of your list price – printing cost' },
    { type: 'p', text: 'What This Means:' },
    { type: 'ul', items: [
      'You set your book price',
      'Amazon takes 40%',
      'You get 60% (before printing cost)',
      'Then printing cost is deducted',
    ] },
    { type: 'p', text: 'Why Amazon Takes a Cut — Amazon covers printing your book, shipping and delivery, hosting your book on their platform, and customer service. This is why you don’t need to manage stock or logistics.' },

    { type: 'h', text: 'Step 2: Choose the Right Price for Your Book' },
    { type: 'p', text: 'KDP has minimum prices based on your book size, page count, and printing cost. You cannot price your book below this minimum.' },
    { type: 'p', text: 'How to Price as a Beginner — start by looking at similar books on Amazon and choosing a price in that range.' },

    { type: 'h', text: 'General Beginner Pricing Guide' },
    { type: 'ul', items: [
      'Short books → £5.99 – £8.99',
      'Medium books → £8.99 – £12.99',
      'Larger / premium books → £12.99+',
    ] },
    { type: 'p', text: 'Make sure your price covers printing cost, leaves you with profit, and feels reasonable to your audience.' },

    { type: 'h', text: 'Step 3: Understand eBook Royalties (Simple Overview)' },
    { type: 'p', text: 'If you also create a Kindle eBook, the royalty options are:' },
    { type: 'ul', items: [
      '70% royalty (for books priced within Amazon’s range)',
      '35% royalty (for lower or higher priced books)',
    ] },
    { type: 'p', text: 'eBooks have no printing cost, so your profit is usually higher.' },

    { type: 'h', text: 'When Will I Get Paid?' },
    { type: 'p', text: 'Royalties are paid every month, approximately 60 days after the end of the month in which the sale was reported (90 days for Expanded Distribution) as long as you meet the minimum threshold for payment.' },
    { type: 'p', text: 'Payment schedule:' },
    { type: 'ul', items: [
      'January → End of March',
      'February → End of April',
      'March → End of May',
      'April → End of June',
      'May → End of July',
      'June → End of August',
      'July → End of September',
      'August → End of October',
      'September → End of November',
      'October → End of December',
      'November → End of January',
      'December → End of February',
    ] },

    { type: 'exercise', title: 'Exercise: Set Your Book Price', body: [
      { type: 'quote', text: '“My book will be priced at £____ because similar books are priced at £____ and this allows me to make a profit after printing costs.”' },
    ] },

    { type: 'takeaway', text: 'You don’t need to get pricing perfect — you can always adjust it later. The goal is to choose a price that is competitive, profitable, and aligned with your audience.' },
  ],

  'm6-4': [
    { type: 'p', text: 'Note that it can take up to 72 hours for your book to publish onto Amazon — you will receive an email directly from Amazon letting you know when your book is officially live and ready for sale. You can search your book on Amazon stores and purchase your proof/author copy.' },
    { type: 'p', text: 'If you are publishing a paperback or hardcover book, it’s time to start thinking about ordering your author copies. Ordering author copies is not mandatory, although it gives you the option to see your book in person before publishing. If you order an author copy, you can submit your book for publication right away or wait until you’ve received and reviewed the proof. It’s up to you.' },

    { type: 'h', text: 'Step 1: Ordering Your Author Copy (Optional)' },
    { type: 'p', text: 'Once your book is live, it will appear on your Bookshelf. This is where you can edit and update your book at any time. It’s also where you can order your author copies.' },
    { type: 'p', text: 'Amazon allows you to order up to 999 copies at once. You’ll only pay the printing cost per book, plus a single postage and packaging fee. Your order will appear in your basket alongside your regular Amazon purchases, and the checkout process is exactly the same.' },

    { type: 'takeaway', text: 'Congratulations — you are now a self-published author! This isn’t the end, it’s just the beginning. Keep writing, keep publishing, and reach out to Onyx Publishing at any point if you need additional guidance along the way.' },
  ],
};
