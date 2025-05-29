'use client';

import { useState } from 'react';
import Image from 'next/image';
import CircularCarousel from './src/circle-carousel';

interface Resource {
  title: string;
  type: 'blog' | 'video' | 'podcast' | 'paper' | 'other';
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
    bio: 'Sam Altman is the CEO of OpenAI and former president of Y Combinator.',
    resources: [
      {
        title: "Moore's Law for Everything",
        type: 'blog',
        url: 'https://moores.samaltman.com',
        description: 'Essay on AI and economic growth'
      },
      {
        title: 'The Age of AI Has Begun',
        type: 'blog',
        url: 'https://www.gatesnotes.com/The-Age-of-AI-Has-Begun',
        description: 'Conversation with Bill Gates about AI'
      }
    ]
  },
  {
    id: 'andrej-karpathy',
    name: 'Andrej Karpathy',
    role: 'Former Director of AI',
    company: 'Tesla',
    image: '/speakers/placeholder.svg',
    bio: 'Andrej Karpathy was the Director of AI at Tesla and is known for his work in deep learning.',
    resources: [
      {
        title: 'Neural Networks: Zero to Hero',
        type: 'video',
        url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
        description: 'Complete course on neural networks from scratch'
      },
      {
        title: 'State of GPT',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=bZQun8Y4L2A',
        description: 'Technical overview of GPT architecture and capabilities'
      }
    ]
  },
  {
    id: 'demis-hassabis',
    name: 'Demis Hassabis',
    role: 'CEO',
    company: 'Google DeepMind',
    image: '/speakers/placeholder.svg',
    bio: 'Demis Hassabis is the CEO and co-founder of Google DeepMind, leading breakthroughs in AI research and applications.',
    resources: [
      {
        title: 'The Power of Self-Learning Systems',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=l5oQJ8VQxkc',
        description: 'Talk on artificial general intelligence and self-learning systems'
      },
      {
        title: 'The Future of Artificial Intelligence',
        type: 'paper',
        url: 'https://www.science.org/doi/10.1126/science.aaa8403',
        description: 'Scientific paper on the future directions of AI research'
      }
    ]
  },
  {
    id: 'fei-fei-li',
    name: 'Fei-Fei Li',
    role: 'Professor',
    company: 'Stanford University',
    image: '/speakers/placeholder.svg',
    bio: "Dr. Fei-Fei Li is a Professor at Stanford University and co-director of Stanford's Human-Centered AI Institute.",
    resources: [
      {
        title: "How We're Teaching Computers to Understand Pictures",
        type: 'video',
        url: 'https://www.ted.com/talks/fei_fei_li_how_we_re_teaching_computers_to_understand_pictures',
        description: 'TED talk on computer vision and AI'
      },
      {
        title: 'ImageNet: Where Have We Been? Where Are We Going?',
        type: 'paper',
        url: 'https://arxiv.org/abs/2006.06470',
        description: 'Research paper on the impact and future of ImageNet'
      }
    ]
  },
  {
    id: 'ilya-sutskever',
    name: 'Ilya Sutskever',
    role: 'Chief Scientist',
    company: 'OpenAI',
    image: '/speakers/placeholder.svg',
    bio: 'Ilya Sutskever is the Chief Scientist at OpenAI and a key figure in deep learning research.',
    resources: [
      {
        title: 'Deep Learning: A Comprehensive Guide',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=uaaqyVS9-rM',
        description: 'Comprehensive overview of deep learning fundamentals'
      },
      {
        title: 'Sequence to Sequence Learning with Neural Networks',
        type: 'paper',
        url: 'https://arxiv.org/abs/1409.3215',
        description: 'Foundational paper on sequence-to-sequence learning'
      }
    ]
  },
  {
    id: 'yann-lecun',
    name: 'Yann LeCun',
    role: 'Chief AI Scientist',
    company: 'Meta',
    image: '/speakers/placeholder.svg',
    bio: 'Yann LeCun is a Turing Award winner and pioneer in deep learning and computer vision.',
    resources: [
      {
        title: 'Deep Learning, Neural Networks, and the Future of AI',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=SGSOCuByo24',
        description: 'Overview of deep learning and future AI directions'
      },
      {
        title: 'A Path Towards Autonomous AI',
        type: 'paper',
        url: 'https://openreview.net/pdf?id=BZ5a1r-kVsf',
        description: 'Research on autonomous machine learning systems'
      }
    ]
  },
  {
    id: 'geoffrey-hinton',
    name: 'Geoffrey Hinton',
    role: 'Professor Emeritus',
    company: 'University of Toronto',
    image: '/speakers/placeholder.svg',
    bio: 'Geoffrey Hinton is known as the "godfather of AI" and pioneered deep learning techniques.',
    resources: [
      {
        title: 'Deep Learning Revolution',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=Q4gTV4r0zRs',
        description: 'Overview of the deep learning revolution'
      },
      {
        title: 'The Forward-Forward Algorithm',
        type: 'paper',
        url: 'https://arxiv.org/abs/2212.13345',
        description: 'New approach to training neural networks'
      }
    ]
  },
  {
    id: 'dario-amodei',
    name: 'Dario Amodei',
    role: 'CEO',
    company: 'Anthropic',
    image: '/speakers/placeholder.svg',
    bio: 'Dario Amodei is the CEO of Anthropic, focusing on developing safe and ethical AI systems.',
    resources: [
      {
        title: 'AI Safety and Ethics',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=vYbl9CnDCUo',
        description: 'Discussion on AI safety and ethical considerations'
      },
      {
        title: 'Concrete Problems in AI Safety',
        type: 'paper',
        url: 'https://arxiv.org/abs/1606.06565',
        description: 'Research paper on practical AI safety challenges'
      }
    ]
  },
  {
    id: 'greg-brockman',
    name: 'Greg Brockman',
    role: 'President',
    company: 'OpenAI',
    image: '/speakers/placeholder.svg',
    bio: 'Greg Brockman is the President and co-founder of OpenAI, previously CTO of Stripe.',
    resources: [
      {
        title: 'The Journey to ChatGPT',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=vw-KWfKwvTQ',
        description: 'Behind the scenes of ChatGPT development'
      },
      {
        title: 'OpenAI API Documentation',
        type: 'other',
        url: 'https://platform.openai.com/docs/introduction',
        description: 'Guide to using OpenAI APIs and models'
      }
    ]
  },
  {
    id: 'ian-goodfellow',
    name: 'Ian Goodfellow',
    role: 'AI Researcher',
    company: 'DeepMind',
    image: '/speakers/placeholder.svg',
    bio: 'Ian Goodfellow is known for inventing GANs (Generative Adversarial Networks) and is a leading AI researcher.',
    resources: [
      {
        title: 'Deep Learning Book',
        type: 'other',
        url: 'https://www.deeplearningbook.org/',
        description: 'Comprehensive textbook on deep learning'
      },
      {
        title: 'Generative Adversarial Networks',
        type: 'paper',
        url: 'https://arxiv.org/abs/1406.2661',
        description: 'Original paper introducing GANs'
      }
    ]
  }
];

const carouselImages = [
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20sam%20altman-e4d9da665aedfd8c.png",
    alt: "Image 1",
  },
  { src: "/images/image2.jpg", alt: "Image 2" },
  { src: "/images/image3.jpg", alt: "Image 3" },
  { src: "/images/image4.jpg", alt: "Image 4" },
  { src: "/images/image5.jpg", alt: "Image 5" },
  { src: "/images/image6.jpg", alt: "Image 6" },
  { src: "/images/image7.jpg", alt: "Image 7" },
  { src: "/images/image8.jpg", alt: "Image 8" },
  { src: "/images/image9.jpg", alt: "Image 9" },
  { src: "/images/image10.jpg", alt: "Image 10" },
  { src: "/images/image11.jpg", alt: "Image 11" },
  { src: "/images/image12.jpg", alt: "Image 12" },
  { src: "/images/image13.jpg", alt: "Image 13" },
  { src: "/images/image14.jpg", alt: "Image 14" },
  { src: "/images/image15.jpg", alt: "Image 15" },
  { src: "/images/image16.jpg", alt: "Image 16" },
  { src: "/images/image17.jpg", alt: "Image 17" },
  { src: "/images/image18.jpg", alt: "Image 18" },
  { src: "/images/image19.jpg", alt: "Image 19" },
  { src: "/images/image20.jpg", alt: "Image 20" },
];

export default function Home() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <CircularCarousel
        images={carouselImages}
        title="The future is built on Artificial Intelligence."
        subtitle="SCROLL TO EXPLORE"
        radius={320}
        imageSize={100}
      />
      ;
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
                      <h2 className="text-xl font-semibold">{speaker.name}</h2>
                      <p className="text-gray-600">{speaker.role}</p>
                      <p className="text-gray-500 text-sm">{speaker.company}</p>
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
    </main>
  );
}
