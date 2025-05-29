"use client";

import { useState } from "react";
import Image from "next/image";
import CircularCarousel from "./src/circle-carousel";

interface Resource {
  title: string;
  type: "blog" | "video" | "podcast" | "paper" | "book" | "other";
  url: string;
  description: string;
}

interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  resources: Resource[];
}
const speakers: Speaker[] = [
  {
    id: "sam-altman",
    name: "Sam Altman",
    role: "CEO",
    company: "OpenAI",
    image: "/speakers/placeholder.svg",
    bio: "Sam Altman is the CEO of OpenAI, former President of Y Combinator, and a key figure in artificial intelligence development and tech entrepreneurship.",
    resources: [
      {
        title: "The Intelligence Age",
        type: "blog",
        url: "https://ia.samaltman.com",
        description:
          "Altman's vision for AI transformation and the future of human capability enhancement",
      },
      {
        title: "Moore's Law for Everything",
        type: "blog",
        url: "https://moores.samaltman.com",
        description:
          "Essay on AI-driven economic growth and societal transformation",
      },
      {
        title: "How to Be Successful",
        type: "blog",
        url: "https://blog.samaltman.com/how-to-be-successful",
        description: "Essay on valuable to points to be successful",
      },
      {
        title: "Productivity",
        type: "blog",
        url: "https://blog.samaltman.com/productivity",
        description: "Essay on how to be productive",
      },
      {
        title: "Sam Altman on the future of AI | ReThinking with Adam Grant",
        type: "video",
        url: "https://www.youtube.com/watch?v=c0NqpG--Pzw",
        description:
          "Deep discussion on AI advances in creativity, empathy, and ethical challenges",
      },
      {
        title: "Sam Altman - How to Succeed with a Startup",
        type: "video",
        url: "https://www.youtube.com/watch?v=0lJKucu6HJc",
        description: "YC talk on startup success",
      },
      {
        title: "How To Build The Future: Sam Altman",
        type: "video",
        url: "https://www.youtube.com/watch?v=xXCBz_8hM9w",
        description: "YC interview with Garry Tan on early days",
      },
      {
        title: "Sam Altman | Lex Fridman Podcast #419",
        type: "video",
        url: "https://www.youtube.com/watch?v=jvqFAi7vkBc",
        description:
          "Lex Fridman interview on OpenAI, GPT-5, Sora, Board Saga, Elon Musk, Ilya, Power & AGI",
      },
    ],
  },
  {
    id: "francois-chollet",
    name: "François Chollet",
    role: "AI Researcher",
    company: "Google",
    image: "/speakers/placeholder.svg",
    bio: "François Chollet is the creator of Keras, one of the most popular deep learning frameworks, and a leading researcher in AI and deep learning.",
    resources: [
      {
        title: "Deep Learning with Python",
        type: "book",
        url: "https://www.manning.com/books/deep-learning-with-python",
        description:
          "Comprehensive guide to deep learning using Python and Keras",
      },
      {
        title: "On the Measure of Intelligence",
        type: "paper",
        url: "https://arxiv.org/abs/1911.01547",
        description:
          "Groundbreaking paper on measuring and evaluating AI systems intelligence",
      },
      {
        title: "The limitations of deep learning",
        type: "blog",
        url: "https://blog.keras.io/the-limitations-of-deep-learning.html",
        description:
          "Critical analysis of deep learning capabilities and future directions",
      },
      {
        title: "François Chollet | Lex Fridman Podcast #120",
        type: "video",
        url: "https://www.youtube.com/watch?v=PUAdj3w3wO4",
        description:
          "Lex Fridman interview on intelligence, AGI, and deep learning",
      },
      {
        title: "François Chollet on OpenAI o-models and ARC",
        type: "video",
        url: "https://www.youtube.com/watch?v=w9WE1aOPjHc",
        description: "Talk on current state of AI and deep learning",
      },
      {
        title: "#51 FRANCOIS CHOLLET",
        type: "video",
        url: "https://www.youtube.com/watch?v=J0p_thJJnoo",
        description: "Talk on intelligence and generalisation",
      },
    ],
  },
  {
    id: "chelsea-finn",
    name: "Chelsea Finn",
    role: "Assistant Professor",
    company: "Stanford University",
    image: "/speakers/placeholder.svg",
    bio: "Chelsea Finn is a leading researcher in machine learning and robotics, known for her work on meta-learning and robotic manipulation.",
    resources: [
      {
        title: "Model-Agnostic Meta-Learning",
        type: "paper",
        url: "https://arxiv.org/abs/1703.03400",
        description:
          "Seminal paper introducing MAML algorithm for fast adaptation",
      },
      {
        title:
          "No Priors Ep. 107 | With Physical Intelligence Co-Founder Chelsea Finn",
        type: "video",
        url: "https://www.youtube.com/watch?v=AzqsJk1f12k&pp=ygUMY2hlbHNlYSBmaW5u",
        description:
          "Chelsea Finn interview on meta-learning, robotics, and AI",
      },
      {
        title: "AI and Robotics - Chelsea Finn & Andrew Ng",
        type: "video",
        url: "https://www.youtube.com/watch?v=IT734HriiHQ",
        description: "Interview with Andrew Ng on AI and robotics",
      },
      {
        title: "Meta-Learning: Learning to Learn Fast",
        type: "video",
        url: "https://www.youtube.com/watch?v=0rZtSwNOTQo",
        description:
          "Comprehensive overview of meta-learning concepts and applications",
      },
      {
        title: "Few-Shot Learning in Robotics",
        type: "paper",
        url: "https://arxiv.org/abs/1707.02920",
        description:
          "Research on enabling robots to learn new skills from limited data",
      },
    ],
  },
  {
    id: "john-jumper",
    name: "John Jumper",
    role: "Senior Research Scientist",
    company: "DeepMind",
    image: "/speakers/placeholder.svg",
    bio: "John Jumper led the development of AlphaFold 2, a breakthrough AI system for protein structure prediction that revolutionized structural biology.",
    resources: [
      {
        title: "Highly accurate protein structure prediction with AlphaFold",
        type: "paper",
        url: "https://www.nature.com/articles/s41586-021-03819-2",
        description:
          "Landmark Nature paper describing AlphaFold 2 breakthrough",
      },
      {
        title: "AlphaFold 3: Revolutionary protein structure prediction",
        type: "paper",
        url: "https://www.nature.com/articles/s41586-024-07487-w",
        description:
          "Latest advancement in protein and molecular structure prediction",
      },
      {
        title: "Nobel Prize lecture: John Jumper",
        type: "video",
        url: "https://www.youtube.com/watch?v=qX1aYUckvnY",
        description: "A lecture by John Jumper, Nobel Prize in Chemistry 2024",
      },
      {
        title: "UChicago John Jumper Talk",
        type: "video",
        url: "https://www.youtube.com/watch?v=7kXd9YZ_jX4",
        description:
          "Watch UChicago alum John Jumper explain the science behind Nobel-winning AlphaFold program",
      },
      {
        title:
          "AI for Science with Sir Paul Nurse, Demis Hassabis, Jennifer Doudna, and John Jumper",
        type: "video",
        url: "https://www.youtube.com/watch?v=nQKmVhLIGcs",
        description:
          "Fireside chat with Paul Nurse, Demis Hassabis, Jennifer Doudna, and John Jumper on AI for science",
      },
    ],
  },
  {
    id: "jared-kaplan",
    name: "Jared Kaplan",
    role: "Co-founder",
    company: "Anthropic",
    image: "/speakers/placeholder.svg",
    bio: "Jared Kaplan is a co-founder of Anthropic and a researcher focused on scaling laws in machine learning and AI safety.",
    resources: [
      {
        title: "Scaling Laws for Neural Language Models",
        type: "paper",
        url: "https://arxiv.org/abs/2001.08361",
        description:
          "Foundational research on language model scaling behavior and performance",
      },
      {
        title: "Constitutional AI: Harmlessness from AI Feedback",
        type: "paper",
        url: "https://arxiv.org/abs/2212.08073",
        description:
          "Anthropic's approach to training AI systems to be helpful and harmless",
      },
      {
        title:
          "Are we ready for human-level AI by 2030? Anthropic's co-founder answers",
        type: "video",
        url: "https://www.youtube.com/watch?v=tC_3KAyli4U",
        description:
          "Interview with Jared Kaplan on AI safety, scaling laws, and the future of AI",
      },
      {
        title: "Anthropic Co-FounderJared Kaplan Discusses Future of AI",
        type: "video",
        url: "https://www.youtube.com/watch?v=zy4sqhBUINU",
        description:
          "Fireside chat with Jared Kaplan on what AI looks like in coming years",
      },
      {
        title: "Jared Kaplan - Johns Hopkins University | Chilloquium",
        type: "video",
        url: "https://www.youtube.com/watch?v=Ll6nXYigs4A",
        description:
          "Lecture on machine learning and physics with Jared Kaplan",
      },
      {
        title: "Training a Helpful and Harmless Assistant with RLHF",
        type: "paper",
        url: "https://arxiv.org/abs/2204.05862",
        description:
          "Research on reinforcement learning from human feedback for AI alignment",
      },
    ],
  },
  {
    id: "andrej-karpathy",
    name: "Andrej Karpathy",
    role: "Former Director of AI",
    company: "Tesla",
    image: "/speakers/placeholder.svg",
    bio: "Andrej Karpathy was the Director of AI at Tesla and is known for his work in deep learning, computer vision, and neural networks.",
    resources: [
      {
        title: "Neural Networks: Zero to Hero",
        type: "video",
        url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
        description:
          "Complete educational series on neural networks from fundamentals to advanced topics",
      },
      {
        title: "State of GPT",
        type: "video",
        url: "https://www.youtube.com/watch?v=bZQun8Y4L2A",
        description:
          "Comprehensive technical overview of GPT architecture and training",
      },
      {
        title: "Andrej Karpathy | Lex Fridman Podcast #333",
        type: "video",
        url: "https://www.youtube.com/watch?v=cdiD-9MMpb0&pp=ygUPYW5kcmVqIGthcnBhdGh5",
        description:
          "Lex Fridman interview with Andrej Karpathy on Tesla AI, Self-Driving, Optimus, Aliens, and AGI",
      },
      {
        title: "No Priors Ep. 80 | With Andrej Karpathy",
        type: "video",
        url: "https://www.youtube.com/watch?v=hM_h0UA7upI",
        description: "Andrej Karpathy on his experience at Tesla and OpenAI",
      },
      {
        title: "The Unreasonable Effectiveness of RNNs",
        type: "blog",
        url: "http://karpathy.github.io/2015/05/21/rnn-effectiveness/",
        description:
          "Influential blog post demonstrating recurrent neural network capabilities",
      },
      {
        title: "A Recipe for Training Neural Networks",
        type: "blog",
        url: "https://karpathy.github.io/2019/04/25/recipe/",
        description: "Blog post on how to train neural networks",
      },
    ],
  },
  {
    id: "fei-fei-li",
    name: "Fei-Fei Li",
    role: "Professor",
    company: "Stanford University",
    image: "/speakers/placeholder.svg",
    bio: "Dr. Fei-Fei Li is a Professor at Stanford University and co-director of Stanford's Human-Centered AI Institute, known for her pioneering work in computer vision and AI education.",
    resources: [
      {
        title: "ImageNet: A Large-Scale Hierarchical Image Database",
        type: "paper",
        url: "https://image-net.org/static_files/papers/imagenet_cvpr09.pdf",
        description:
          "Foundational paper introducing the ImageNet dataset that transformed computer vision",
      },
      {
        title: "How We're Teaching Computers to Understand Pictures",
        type: "video",
        url: "https://www.ted.com/talks/fei_fei_li_how_we_re_teaching_computers_to_understand_pictures",
        description:
          "TED talk on computer vision breakthroughs and AI development",
      },
      {
        title: "Author Talks: Dr. Fei-Fei Li",
        type: "blog",
        url: "https://www.mckinsey.com/featured-insights/mckinsey-on-books/author-talks-dr-fei-fei-li-sees-worlds-of-possibilities-in-a-multidisciplinary-approach-to-ai",
        description:
          "Interview with Fei-Fei Li on her work in computer vision and AI",
      },
      {
        title: "Dr. Fei-Fei Li | Greylock",
        type: "video",
        url: "https://www.youtube.com/watch?v=06M_xmHmDfw",
        description: "Interview with Fei-Fei Li on human-centered AI",
      },
      {
        title: "Dr. Fei-Fei Li | a16z",
        type: "video",
        url: "https://www.youtube.com/watch?v=vIXfYFB7aBI",
        description: "Fei-Fei Li Unveils the Next Frontier of AI",
      },
      {
        title:
          "Geoffrey Hinton in conversation with Fei-Fei Li — Responsible AI development",
        type: "video",
        url: "https://www.youtube.com/watch?v=QWWgr2rN45o",
        description: "Interview with Geoffrey Hinton on responsible AI",
      },
    ],
  },
  {
    id: "elon-musk",
    name: "Elon Musk",
    role: "CEO",
    company: "Tesla, SpaceX, X",
    image: "/speakers/placeholder.svg",
    bio: "Elon Musk is the CEO of multiple companies including Tesla and SpaceX, and has been a significant figure in AI development and discussion.",
    resources: [
      {
        title: "Elon Musk Archives",
        type: "blog",
        url: "https://fs.blog/tag/elon-musk/",
        description: "Ideas and beliefs of Elon Musk",
      },
      {
        title: "Joe Rogan Experience #1609",
        type: "video",
        url: "https://www.youtube.com/watch?v=DxREm3s1scA",
        description:
          "Extended discussion on AI safety, AGI timeline, and technological progress",
      },
      {
        title: "Elon Musk | Lex Fridman Podcast #400",
        type: "video",
        url: "https://www.youtube.com/watch?v=JN3KPFbWCy8&pp=ygUNZWxvbiBtdXNrIGxleA%3D%3D",
        description:
          "Lex Fridman interview with Elon Musk on AI, aliens, physics, video games, and humanity",
      },
      {
        title: "Elon Musk : How to Build the Future",
        type: "video",
        url: "https://www.youtube.com/watch?v=tnBQmEqBCY0",
        description: "YC interview with Sam Altman on building the future",
      },
      {
        title: "Elon Musk and Y Combinator President - FULL CONVERSATION",
        type: "video",
        url: "https://www.youtube.com/watch?v=SqEo107j-uw",
        description: "Fireside chat with Sam Altman on thinking for the future",
      },
    ],
  },
  {
    id: "satya-nadella",
    name: "Satya Nadella",
    role: "CEO",
    company: "Microsoft",
    image: "/speakers/placeholder.svg",
    bio: "Satya Nadella is the CEO of Microsoft, leading the company's transformation and integration of AI across its products and services.",
    resources: [
      {
        title: "Satya Nadella, CEO of Microsoft",
        type: "video",
        url: "https://www.youtube.com/watch?v=rtgN27z0oi0",
        description: "Stanford GSB fireside chat.",
      },
      {
        title: "Hit Refresh: Technology and Leadership",
        type: "book",
        url: "https://news.microsoft.com/hitrefresh/",
        description:
          "Book on digital transformation and the role of AI in business",
      },
      {
        title: "CEO of Microsoft on AI Agents & Quantum | Satya Nadella",
        type: "video",
        url: "https://www.youtube.com/watch?v=ZUPJ1ZnIZvE",
        description: "Southpark Commons fireside chat",
      },
      {
        title:
          "Microsoft Copilot reunites Bill Gates, Steve Ballmer, and Satya Nadella",
        type: "video",
        url: "https://www.youtube.com/watch?v=ncjM7mY4LvE",
        description: "Microsoft CEOs discuss Microsoft history",
      },
      {
        title:
          "UChicago Davos 2019: Satya Nadella, Raghuram Rajan, David Rubenstein, Zhang Xin",
        type: "video",
        url: "https://www.youtube.com/watch?v=7802Gg9w7zU",
        description: "Fireside chat with Satya Nadella on leading change",
      },
      {
        title: "Elad Gil and Satya Nadella",
        type: "video",
        url: "https://blog.eladgil.com/p/fireside-chat-with-satya-nadella",
        description: "Fireside chat with Elad Gil on AI and Microsoft",
      },
    ],
  },
  {
    id: "andrew-ng",
    name: "Andrew Ng",
    role: "Founder",
    company: "DeepLearning.AI",
    image: "/speakers/placeholder.svg",
    bio: "Andrew Ng is a pioneer in machine learning and online education, founder of DeepLearning.AI, and co-founder of Coursera.",
    resources: [
      {
        title: "Machine Learning Yearning",
        type: "book",
        url: "https://www.deeplearning.ai/machine-learning-yearning/",
        description:
          "Technical strategy guide for AI and machine learning project development",
      },
      {
        title: "Deep Learning Specialization",
        type: "other",
        url: "https://www.coursera.org/specializations/deep-learning",
        description:
          "Comprehensive deep learning course series reaching millions of students",
      },
      {
        title: "Andrew Ng: Opportunities in AI - 2023",
        type: "video",
        url: "https://www.youtube.com/watch?v=5p248yoa3oE",
        description: "Stanford GSB fireside lecture",
      },
      {
        title: "Andrew Ng | BUILD 2024 Keynote",
        type: "video",
        url: "https://www.youtube.com/watch?v=KrRD7r7y7NY",
        description: "Build 2024 keynote on AI agents and agentic reasoning",
      },
      {
        title: "How AI Could Empower Any Business | Andrew Ng | TED",
        type: "video",
        url: "https://www.youtube.com/watch?v=reUZRyXxUs4",
        description: "TED talk on future of applications of AI",
      },
      {
        title: "Andrew Ng | Lex Fridman Podcast #73",
        type: "video",
        url: "https://www.youtube.com/watch?v=0jspaMLxBig",
        description:
          "Lex Fridman interview with Andrew Ng on deep learning, education, and real-world AI",
      },
    ],
  },
  {
    id: "aravind-srinivas",
    name: "Aravind Srinivas",
    role: "CEO",
    company: "Perplexity AI",
    image: "/speakers/placeholder.svg",
    bio: "Aravind Srinivas is the CEO of Perplexity AI, working on advancing search and knowledge discovery through AI.",
    resources: [
      {
        title: "Aravind Srinivas | Lex Fridman Podcast #434",
        type: "video",
        url: "https://www.youtube.com/watch?v=e-gwvmhyU7A",
        description:
          "Lex Fridman interview with Aravind Srinivas on the future of AI, search, and the internet",
      },
      {
        title:
          "View From The Top with Aravind Srinivas, Cofounder and CEO of Perplexity",
        type: "video",
        url: "https://www.youtube.com/watch?v=r1Bi10Xt0fc",
        description: "Stanford GSB fireside chat",
      },
      {
        title:
          "Perplexity CEO Aravind Srinivas: From Academic to $9B AI Pioneer | HBS Entrepreneurship Summit 2025",
        type: "video",
        url: "https://www.youtube.com/watch?v=Rkizxztabt8",
        description: "Harvard Business School fireside chat",
      },
      {
        title: "How To Build The Future: Aravind Srinivas",
        type: "video",
        url: "https://www.youtube.com/watch?v=SP7Ua8FKZN4",
        description:
          "YC interview with Aravind Srinivas on building the future",
      },
      {
        title:
          "How AI Will Answer Questions We Haven't Thought to Ask | Aravind Srinivas | TED",
        type: "video",
        url: "https://www.youtube.com/watch?v=MD4W_e3dJPs",
        description:
          "TED talk on how AI will answer questions we haven't thought to ask",
      },
    ],
  },
  {
    id: "varun-mohan",
    name: "Varun Mohan",
    role: "CEO & Co-Founder",
    company: "Windsurf",
    image: "/speakers/placeholder.svg",
    bio: "Varun Mohan leads Windsurf (formerly Codeium), creators of an AI-native IDE used by over 1 million developers to generate 53% of committed enterprise code.",
    resources: [
      {
        title: "Building a Magical AI Code Editor",
        type: "video",
        url: "https://www.youtube.com/watch?v=5Z0RCxDZdrE",
        description:
          "Technical deep dive into Windsurf's architecture and pivot strategy",
      },
      {
        title: "Windsurf CEO | YCombinator",
        type: "video",
        url: "https://www.youtube.com/watch?v=LKgAx7FWva4",
        description:
          "YC interview with Varun Mohan on betting on AI agents, pivoting in 48 hours, and the future of coding",
      },
      {
        title: "The Pivot That Saved Windsurf",
        type: "blog",
        url: "https://www.lennysnewsletter.com/p/the-untold-story-of-windsurf-varun-mohan",
        description:
          "Detailed account of strategic pivot from GPU virtualization to AI-powered IDE",
      },
      {
        title: "AI Code Generation Transforming Industries",
        type: "video",
        url: "https://www.youtube.com/watch?v=hl5FqjTrJ5E",
        description:
          "Discussion on AI-driven workflow optimization with Kleiner Perkins",
      },
      {
        title: "From Autonomous Vehicles to AI Code",
        type: "blog",
        url: "https://alejandrocremades.com/varun-mohan/",
        description: "Founder journey and enterprise adoption strategies",
      },
    ],
  },
  {
    id: "michael-truell",
    name: "Michael Truell",
    role: "CEO & Co-Founder",
    company: "Anysphere",
    image: "/speakers/placeholder.svg",
    bio: 'Michael Truell created Cursor, the fastest-growing AI code editor achieving $300M ARR in 2 years, pioneering "programming after code" paradigms.',
    resources: [
      {
        title: "Future of AI and Software Development",
        type: "video",
        url: "https://www.educationnext.in/posts/michael-truell-on-the-future-of-ai-and-software-development-with-cursor",
        description:
          "Vision for natural language programming and hybrid AI systems",
      },
      {
        title: "The $300M ARR AI Editor Phenomenon",
        type: "blog",
        url: "https://www.lennysnewsletter.com/p/the-rise-of-cursor-michael-truell",
        description: "Growth case study and custom model development insights",
      },
      {
        title: "Programming in the Post-Code Era",
        type: "video",
        url: "https://followin.io/en/feed/18142509",
        description: "Lex Fridman podcast on pseudocode programming future",
      },
      {
        title: "Cursor Team | Lex Fridman Podcast #447",
        type: "video",
        url: "https://www.youtube.com/watch?v=oFfVt3S51T4",
        description:
          "Michael Truell and cursor team on the future of programming with AI",
      },
    ],
  },
];
const carouselImages = [
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20sam%20altman-e4d9da665aedfd8c.png",
    alt: "Sam Altman",
    speakerId: "sam-altman",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20francois%20chollet-1b4956ed75457cec.png",
    alt: "François Chollet",
    speakerId: "francois-chollet",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20chelsea%20finn-e5306697162ef132.png",
    alt: "Chelsea Finn",
    speakerId: "chelsea-finn",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20john%20jumper-90940147d1e5b771.png",
    alt: "John Jumper",
    speakerId: "john-jumper",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20jared%20kaplan2-33bcae103bf3015c.png",
    alt: "Jared Kaplan",
    speakerId: "jared-kaplan",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/Andrej%20Karpathy-ea758b26e27164f6.png",
    alt: "Andrej Karpathy",
    speakerId: "andrej-karpathy",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20fei-fei%20li-09e2a9a72beeba49.png",
    alt: "Fei-Fei Li",
    speakerId: "fei-fei-li",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20elon%20musk-03540062690fda91.png",
    alt: "Elon Musk",
    speakerId: "elon-musk",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20satya-0e6e110a8ae43ccf.png",
    alt: "Satya Nadella",
    speakerId: "satya-nadella",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20andrew%20ng-d2fe686c6a066dc1.png",
    alt: "Andrew Ng",
    speakerId: "andrew-ng",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/Aravind%20Srinivas-6a12179cf7ea821b.png",
    alt: "Aravind Srinivas",
    speakerId: "aravind-srinivas",
  },
  {
    src: "https://i.imgur.com/4qsK1Ib.png",
    alt: "Varun Mohan",
    speakerId: "varun-mohan",
  },
  {
    src: "https://i.imgur.com/CymfSll.png",
    alt: "Michael Truell",
    speakerId: "michael-truell",
  },
];

export default function Home() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);
  const [clickedImageSrc, setClickedImageSrc] = useState<string>("");
  const [hasInitialAnimationRun, setHasInitialAnimationRun] = useState(false);

  const handleCarouselImageClick = (speaker: Speaker) => {
    // Find the corresponding carousel image
    const carouselImage = carouselImages.find(
      (img) => img.speakerId === speaker.id
    );
    if (carouselImage) {
      setClickedImageSrc(carouselImage.src);
    }

    setIsZooming(true);

    // Start hiding carousel immediately
    setTimeout(() => {
      setShowCarousel(false);
    }, 100);

    // Set the selected speaker after zoom starts
    setTimeout(() => {
      setSelectedSpeaker(speaker);
    }, 250);

    // Complete the zoom animation
    setTimeout(() => {
      setIsZooming(false);
    }, 600);
  };

  const handleBackToCarousel = () => {
    setSelectedSpeaker(null);
    setShowCarousel(true);
    setClickedImageSrc("");
  };

  return (
    <main className="min-h-screen bg-gray-100 relative">
      {/* Zooming Image Overlay */}
      {/* {showZoomingImage && clickedImageSrc && (
        <div style={getZoomingImageStyles()}>
          <Image
            src={clickedImageSrc}
            alt="Zooming speaker"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )} */}

      {/* Carousel View */}
      {showCarousel && (
        <div
          className={`transition-opacity duration-150 ${
            isZooming ? "opacity-0" : "opacity-100"
          }`}
        >
          <CircularCarousel
            images={carouselImages}
            title="YC AI Startup School"
            subtitle="CLICK TO EXPLORE SPEAKERS"
            radius={320}
            imageSize={100}
            speakers={speakers}
            onImageClick={handleCarouselImageClick}
            hasInitialAnimationRun={hasInitialAnimationRun}
            onInitialAnimationComplete={() => setHasInitialAnimationRun(true)}
          />
        </div>
      )}

      {/* Zoomed Speaker View */}
      {!showCarousel && (
        <div
          className={`min-h-screen bg-gray-100 ${
            selectedSpeaker ? "opacity-100" : "opacity-0"
          } transition-opacity duration-250`}
        >
          {/* Back Button */}
          <div className="absolute top-6 left-6 z-20">
            <button
              onClick={handleBackToCarousel}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 hover:scale-105 transform"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </div>

          {selectedSpeaker && (
            <div className="min-h-screen">
              {/* Large Speaker Image */}
              <div className="flex items-center justify-center pt-20 pb-8">
                <div
                  className={`relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-350 ${
                    selectedSpeaker
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0"
                  }`}
                >
                  <Image
                    src={clickedImageSrc || selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Speaker Information */}
              <div
                className={`max-w-4xl mx-auto px-6 pb-8 transition-all duration-350 delay-150 ${
                  selectedSpeaker
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {selectedSpeaker.name}
                  </h1>
                  <p className="text-xl text-gray-600 mb-1">
                    {selectedSpeaker.role}
                  </p>
                  <p className="text-lg text-gray-500">
                    {selectedSpeaker.company}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    About
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed bg-white rounded-lg p-6 shadow-sm">
                    {selectedSpeaker.bio}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    {selectedSpeaker.name.split(" ")[0]}&apos;s Work
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedSpeaker.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 shadow-sm"
                        style={{
                          animationDelay: `${300 + index * 50}ms`,
                          animation: selectedSpeaker
                            ? "slideInUp 0.6s ease-out forwards"
                            : "none",
                          opacity: 0,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-blue-600 text-lg mb-2">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {resource.description}
                            </p>
                          </div>
                          <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full ml-4 flex-shrink-0">
                            {resource.type}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Original Content (hidden when carousel is showing) */}
      {!showCarousel && selectedSpeaker && (
        <div style={{ display: "none" }}>
          {/* Header */}
          <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                AI Startup School Speakers Hub
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Speakers Grid */}
              <div
                className={`col-span-1 ${
                  selectedSpeaker ? "md:col-span-1" : "md:col-span-2"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {speakers.map((speaker) => (
                    <div
                      key={speaker.id}
                      className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-all duration-200 hover:scale-105 ${
                        selectedSpeaker?.id === speaker.id
                          ? "ring-2 ring-blue-500"
                          : ""
                      }`}
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">
                            {speaker.name}
                          </h2>
                          <p className="text-gray-600">{speaker.role}</p>
                          <p className="text-gray-500 text-sm">
                            {speaker.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources Panel */}
              {selectedSpeaker && (
                <div className="col-span-1 md:col-span-1">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-2">
                        {selectedSpeaker.name}
                      </h2>
                      <p className="text-gray-600">{selectedSpeaker.bio}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Resources</h3>
                      <div className="space-y-4">
                        {selectedSpeaker.resources.map((resource, index) => (
                          <a
                            key={index}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-blue-600">
                                  {resource.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {resource.description}
                                </p>
                              </div>
                              <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                                {resource.type}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
