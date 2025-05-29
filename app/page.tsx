"use client";

import { useState } from "react";
import Image from "next/image";
import CircularCarousel from "./src/circle-carousel";

interface Resource {
  title: string;
  type: "blog" | "video" | "podcast" | "paper" | "other";
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
    id: 'sam-altman',
    name: 'Sam Altman',
    role: 'CEO',
    company: 'OpenAI',
    image: '/speakers/placeholder.svg',
    bio: 'Sam Altman is the CEO of OpenAI, former President of Y Combinator, and a key figure in artificial intelligence development and tech entrepreneurship.',
    resources: [
      {
        title: "The Intelligence Age",
        type: 'blog',
        url: 'https://ia.samaltman.com',
        description: 'Altman\'s vision for AI transformation and the future of human capability enhancement'
      },
      {
        title: "Moore's Law for Everything",
        type: 'blog',
        url: 'https://moores.samaltman.com',
        description: 'Essay on AI-driven economic growth and societal transformation'
      },
      {
        title: 'Sam Altman on the future of AI | ReThinking with Adam Grant',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=c0NqpG--Pzw',
        description: 'Deep discussion on AI advances in creativity, empathy, and ethical challenges'
      },
      {
        title: 'OpenAI DevDay Keynote',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=U9mJuUkhUzk',
        description: 'Major announcements on GPT-4 Turbo and revolutionary AI developments'
      }
    ]
  },
  {
    id: 'francois-chollet',
    name: 'François Chollet',
    role: 'AI Researcher',
    company: 'Google',
    image: '/speakers/placeholder.svg',
    bio: 'François Chollet is the creator of Keras, one of the most popular deep learning frameworks, and a leading researcher in AI and deep learning.',
    resources: [
      {
        title: 'Deep Learning with Python',
        type: 'other',
        url: 'https://www.manning.com/books/deep-learning-with-python',
        description: 'Comprehensive guide to deep learning using Python and Keras'
      },
      {
        title: 'On the Measure of Intelligence',
        type: 'paper',
        url: 'https://arxiv.org/abs/1911.01547',
        description: 'Groundbreaking paper on measuring and evaluating AI systems intelligence'
      },
      {
        title: 'The limitations of deep learning',
        type: 'blog',
        url: 'https://blog.keras.io/the-limitations-of-deep-learning.html',
        description: 'Critical analysis of deep learning capabilities and future directions'
      },
      {
        title: 'ARC Prize and AGI Reasoning',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=Yl3ZCpn_5uM',
        description: 'Discussion on artificial general intelligence and reasoning benchmarks'
      }
    ]
  },
  {
    id: 'chelsea-finn',
    name: 'Chelsea Finn',
    role: 'Assistant Professor',
    company: 'Stanford University',
    image: '/speakers/placeholder.svg',
    bio: 'Chelsea Finn is a leading researcher in machine learning and robotics, known for her work on meta-learning and robotic manipulation.',
    resources: [
      {
        title: 'Model-Agnostic Meta-Learning',
        type: 'paper',
        url: 'https://arxiv.org/abs/1703.03400',
        description: 'Seminal paper introducing MAML algorithm for fast adaptation'
      },
      {
        title: 'Meta-Learning: Learning to Learn Fast',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=0rZtSwNOTQo',
        description: 'Comprehensive overview of meta-learning concepts and applications'
      },
      {
        title: 'Robotic Learning and Meta-Learning',
        type: 'blog',
        url: 'https://ai.stanford.edu/blog/robotic-learning/',
        description: 'Stanford AI Lab blog on advances in robotic learning systems'
      },
      {
        title: 'Few-Shot Learning in Robotics',
        type: 'paper',
        url: 'https://arxiv.org/abs/1707.02920',
        description: 'Research on enabling robots to learn new skills from limited data'
      }
    ]
  },
  {
    id: 'john-jumper',
    name: 'John Jumper',
    role: 'Senior Research Scientist',
    company: 'DeepMind',
    image: '/speakers/placeholder.svg',
    bio: 'John Jumper led the development of AlphaFold 2, a breakthrough AI system for protein structure prediction that revolutionized structural biology.',
    resources: [
      {
        title: 'Highly accurate protein structure prediction with AlphaFold',
        type: 'paper',
        url: 'https://www.nature.com/articles/s41586-021-03819-2',
        description: 'Landmark Nature paper describing AlphaFold 2 breakthrough'
      },
      {
        title: 'AlphaFold 3: Revolutionary protein structure prediction',
        type: 'paper',
        url: 'https://www.nature.com/articles/s41586-024-07487-w',
        description: 'Latest advancement in protein and molecular structure prediction'
      },
      {
        title: 'The AlphaFold Story',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=uQ1uVbrIv-Q',
        description: 'Behind-the-scenes look at AlphaFold development and impact'
      },
      {
        title: 'CASP14 Presentation',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=W7wJDrREhPY',
        description: 'Presentation at Critical Assessment of Structure Prediction competition'
      }
    ]
  },
  {
    id: 'jared-kaplan',
    name: 'Jared Kaplan',
    role: 'Co-founder',
    company: 'Anthropic',
    image: '/speakers/placeholder.svg',
    bio: 'Jared Kaplan is a co-founder of Anthropic and a researcher focused on scaling laws in machine learning and AI safety.',
    resources: [
      {
        title: 'Scaling Laws for Neural Language Models',
        type: 'paper',
        url: 'https://arxiv.org/abs/2001.08361',
        description: 'Foundational research on language model scaling behavior and performance'
      },
      {
        title: 'Constitutional AI: Harmlessness from AI Feedback',
        type: 'paper',
        url: 'https://arxiv.org/abs/2212.08073',
        description: 'Anthropic\'s approach to training AI systems to be helpful and harmless'
      },
      {
        title: 'AI Safety and Scaling Laws',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=MEIGdL8rb4A',
        description: 'Discussion on AI safety challenges in large language models'
      },
      {
        title: 'Training a Helpful and Harmless Assistant with RLHF',
        type: 'paper',
        url: 'https://arxiv.org/abs/2204.05862',
        description: 'Research on reinforcement learning from human feedback for AI alignment'
      }
    ]
  },
  {
    id: 'andrej-karpathy',
    name: 'Andrej Karpathy',
    role: 'Former Director of AI',
    company: 'Tesla',
    image: '/speakers/placeholder.svg',
    bio: 'Andrej Karpathy was the Director of AI at Tesla and is known for his work in deep learning, computer vision, and neural networks.',
    resources: [
      {
        title: 'Neural Networks: Zero to Hero',
        type: 'video',
        url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
        description: 'Complete educational series on neural networks from fundamentals to advanced topics'
      },
      {
        title: 'State of GPT',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=bZQun8Y4L2A',
        description: 'Comprehensive technical overview of GPT architecture and training'
      },
      {
        title: 'Tesla AI Day Presentation',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=j0z4FweCy4M',
        description: 'Overview of Tesla\'s Full Self-Driving AI and Dojo supercomputer'
      },
      {
        title: 'The Unreasonable Effectiveness of RNNs',
        type: 'blog',
        url: 'http://karpathy.github.io/2015/05/21/rnn-effectiveness/',
        description: 'Influential blog post demonstrating recurrent neural network capabilities'
      }
    ]
  },
  {
    id: 'fei-fei-li',
    name: 'Fei-Fei Li',
    role: 'Professor',
    company: 'Stanford University',
    image: '/speakers/placeholder.svg',
    bio: "Dr. Fei-Fei Li is a Professor at Stanford University and co-director of Stanford's Human-Centered AI Institute, known for her pioneering work in computer vision and AI education.",
    resources: [
      {
        title: 'ImageNet: A Large-Scale Hierarchical Image Database',
        type: 'paper',
        url: 'https://image-net.org/static_files/papers/imagenet_cvpr09.pdf',
        description: 'Foundational paper introducing the ImageNet dataset that transformed computer vision'
      },
      {
        title: "How We're Teaching Computers to Understand Pictures",
        type: 'video',
        url: 'https://www.ted.com/talks/fei_fei_li_how_we_re_teaching_computers_to_understand_pictures',
        description: 'TED talk on computer vision breakthroughs and AI development'
      },
      {
        title: 'Human-Centered AI: Principles and Practices',
        type: 'blog',
        url: 'https://hai.stanford.edu/news/human-centered-ai-principles-practices',
        description: 'Vision for developing AI that augments human capabilities ethically'
      },
      {
        title: 'The Worlds I See: A Memoir',
        type: 'other',
        url: 'https://www.worldsisee.com/',
        description: 'Memoir detailing her journey in AI and computer vision research'
      }
    ]
  },
  {
    id: 'elon-musk',
    name: 'Elon Musk',
    role: 'CEO',
    company: 'Tesla, SpaceX, X',
    image: '/speakers/placeholder.svg',
    bio: 'Elon Musk is the CEO of multiple companies including Tesla and SpaceX, and has been a significant figure in AI development and discussion.',
    resources: [
      {
        title: 'Tesla AI Day 2022',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=ODSJsviD_SU',
        description: 'Presentation on Tesla Bot, Full Self-Driving, and Dojo supercomputer'
      },
      {
        title: 'Joe Rogan Experience #1609',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=DxREm3s1scA',
        description: 'Extended discussion on AI safety, AGI timeline, and technological progress'
      },
      {
        title: 'Neuralink Progress Update',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=DVvmgjBL74w',
        description: 'Demonstration of brain-computer interface technology and applications'
      },
      {
        title: 'xAI and Grok AI Announcement',
        type: 'blog',
        url: 'https://x.ai/blog/grok',
        description: 'Introduction to xAI company and Grok AI assistant development'
      }
    ]
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
        title: "Microsoft and OpenAI Partnership",
        type: "blog",
        url: "https://blogs.microsoft.com/blog/2023/01/23/microsoftandopenaiextendpartnership/",
        description: "Strategic partnership announcement to democratize AI technologies"
      },
      {
        title: "The Future of Work with AI",
        type: "video",
        url: "https://www.youtube.com/watch?v=Bf5JJqiF3nY",
        description: "Vision for AI transformation in productivity and workplace applications"
      },
      {
        title: "Hit Refresh: Technology and Leadership",
        type: "other",
        url: "https://news.microsoft.com/hitrefresh/",
        description: "Book on digital transformation and the role of AI in business"
      },
      {
        title: "Microsoft Copilot Launch",
        type: "video",
        url: "https://www.youtube.com/watch?v=B2-8wrF9Okc",
        description: "Introduction of AI-powered productivity tools across Microsoft 365"
      }
    ]
  },
  {
    id: 'andrew-ng',
    name: 'Andrew Ng',
    role: 'Founder',
    company: 'DeepLearning.AI',
    image: '/speakers/placeholder.svg',
    bio: 'Andrew Ng is a pioneer in machine learning and online education, founder of DeepLearning.AI, and co-founder of Coursera.',
    resources: [
      {
        title: 'Machine Learning Yearning',
        type: 'other',
        url: 'https://www.deeplearning.ai/machine-learning-yearning/',
        description: 'Technical strategy guide for AI and machine learning project development'
      },
      {
        title: 'Deep Learning Specialization',
        type: 'other',
        url: 'https://www.coursera.org/specializations/deep-learning',
        description: 'Comprehensive deep learning course series reaching millions of students'
      },
      {
        title: 'AI Transformation Playbook',
        type: 'blog',
        url: 'https://landing.ai/ai-transformation-playbook/',
        description: 'Strategic framework for implementing AI in business organizations'
      },
      {
        title: 'The State of AI and MLOps',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=NchLsZDUDPY',
        description: 'Insights on artificial intelligence trends and machine learning operations'
      }
    ]
  },
  {
    id: 'aravind-srinivas',
    name: 'Aravind Srinivas',
    role: 'CEO',
    company: 'Perplexity AI',
    image: '/speakers/placeholder.svg',
    bio: 'Aravind Srinivas is the CEO of Perplexity AI, working on advancing search and knowledge discovery through AI.',
    resources: [
      {
        title: 'Perplexity AI Technology Overview',
        type: 'blog',
        url: 'https://blog.perplexity.ai/introducing-perplexity',
        description: 'Technical deep-dive into AI-powered search and question-answering systems'
      },
      {
        title: 'The Future of Search with AI',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=_iGYP7e1Uo4',
        description: 'Vision for revolutionizing information discovery through artificial intelligence'
      },
      {
        title: 'Retrieval-Augmented Generation Research',
        type: 'paper',
        url: 'https://arxiv.org/abs/2005.11401',
        description: 'Research contributions to RAG systems for improved AI knowledge access'
      },
      {
        title: 'Building the Next Generation Search Engine',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=mGG4TdXh__I',
        description: 'Entrepreneurial journey and technical insights from Perplexity AI development'
      }
    ]
  },
  {
    id: 'varun-mohan',
    name: 'Varun Mohan',
    role: 'CEO & Co-Founder',
    company: 'Windsurf',
    image: '/speakers/placeholder.svg',
    bio: 'Varun Mohan leads Windsurf (formerly Codeium), creators of an AI-native IDE used by over 1 million developers to generate 53% of committed enterprise code.',
    resources: [
      {
        title: "Building a Magical AI Code Editor",
        type: 'video',
        url: 'https://www.youtube.com/watch?v=5Z0RCxDZdrE',
        description: 'Technical deep dive into Windsurf\'s architecture and pivot strategy'
      },
      {
        title: "The Pivot That Saved Windsurf",
        type: 'blog',
        url: 'https://www.lennysnewsletter.com/p/the-untold-story-of-windsurf-varun-mohan',
        description: 'Detailed account of strategic pivot from GPU virtualization to AI-powered IDE'
      },
      {
        title: "AI Code Generation Transforming Industries",
        type: 'video',
        url: 'https://www.youtube.com/watch?v=hl5FqjTrJ5E',
        description: 'Discussion on AI-driven workflow optimization with Kleiner Perkins'
      },
      {
        title: "From Autonomous Vehicles to AI Code",
        type: 'blog',
        url: 'https://alejandrocremades.com/varun-mohan/',
        description: 'Founder journey and enterprise adoption strategies'
      }
    ]
  },
  {
    id: 'michael-truell',
    name: 'Michael Truell',
    role: 'CEO & Co-Founder',
    company: 'Anysphere',
    image: '/speakers/placeholder.svg',
    bio: 'Michael Truell created Cursor, the fastest-growing AI code editor achieving $300M ARR in 2 years, pioneering "programming after code" paradigms.',
    resources: [
      {
        title: "Future of AI and Software Development",
        type: 'video',
        url: 'https://www.educationnext.in/posts/michael-truell-on-the-future-of-ai-and-software-development-with-cursor',
        description: 'Vision for natural language programming and hybrid AI systems'
      },
      {
        title: "The $300M ARR AI Editor Phenomenon",
        type: 'blog',
        url: 'https://www.lennysnewsletter.com/p/the-rise-of-cursor-michael-truell',
        description: 'Growth case study and custom model development insights'
      },
      {
        title: "Programming in the Post-Code Era",
        type: 'video',
        url: 'https://followin.io/en/feed/18142509',
        description: 'Lex Fridman podcast on pseudocode programming future'
      },
      {
        title: "Cursor Technical Architecture",
        type: 'blog',
        url: 'https://mntruell.com',
        description: 'Founder\'s perspective on AI-driven coding automation'
      }
    ]
  }
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
  }
];

export default function Home() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);
  const [clickedImageSrc, setClickedImageSrc] = useState<string>("");
  const [hasInitialAnimationRun, setHasInitialAnimationRun] = useState(false);

  const handleCarouselImageClick = (
    speaker: Speaker
  ) => {
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
                    {selectedSpeaker.name.split(' ')[0]}&apos;s Work
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
