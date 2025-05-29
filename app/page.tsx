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
    id: "sam-altman",
    name: "Sam Altman",
    role: "CEO",
    company: "OpenAI",
    image: "/speakers/placeholder.svg",
    bio: "Sam Altman is the CEO of OpenAI and former president of Y Combinator.",
    resources: [
      {
        title: "Moore's Law for Everything",
        type: "blog",
        url: "https://moores.samaltman.com",
        description: "Essay on AI and economic growth",
      },
      {
        title: "The Age of AI Has Begun",
        type: "blog",
        url: "https://www.gatesnotes.com/The-Age-of-AI-Has-Begun",
        description: "Conversation with Bill Gates about AI",
      },
    ],
  },
  {
    id: "andrej-karpathy",
    name: "Andrej Karpathy",
    role: "Former Director of AI",
    company: "Tesla",
    image: "/speakers/placeholder.svg",
    bio: "Andrej Karpathy was the Director of AI at Tesla and is known for his work in deep learning.",
    resources: [
      {
        title: "Neural Networks: Zero to Hero",
        type: "video",
        url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
        description: "Complete course on neural networks from scratch",
      },
      {
        title: "State of GPT",
        type: "video",
        url: "https://www.youtube.com/watch?v=bZQun8Y4L2A",
        description: "Technical overview of GPT architecture and capabilities",
      },
    ],
  },
  {
    id: "demis-hassabis",
    name: "Demis Hassabis",
    role: "CEO",
    company: "Google DeepMind",
    image: "/speakers/placeholder.svg",
    bio: "Demis Hassabis is the CEO and co-founder of Google DeepMind, leading breakthroughs in AI research and applications.",
    resources: [
      {
        title: "The Power of Self-Learning Systems",
        type: "video",
        url: "https://www.youtube.com/watch?v=l5oQJ8VQxkc",
        description:
          "Talk on artificial general intelligence and self-learning systems",
      },
      {
        title: "The Future of Artificial Intelligence",
        type: "paper",
        url: "https://www.science.org/doi/10.1126/science.aaa8403",
        description: "Scientific paper on the future directions of AI research",
      },
    ],
  },
  {
    id: "fei-fei-li",
    name: "Fei-Fei Li",
    role: "Professor",
    company: "Stanford University",
    image: "/speakers/placeholder.svg",
    bio: "Dr. Fei-Fei Li is a Professor at Stanford University and co-director of Stanford's Human-Centered AI Institute.",
    resources: [
      {
        title: "How We're Teaching Computers to Understand Pictures",
        type: "video",
        url: "https://www.ted.com/talks/fei_fei_li_how_we_re_teaching_computers_to_understand_pictures",
        description: "TED talk on computer vision and AI",
      },
      {
        title: "ImageNet: Where Have We Been? Where Are We Going?",
        type: "paper",
        url: "https://arxiv.org/abs/2006.06470",
        description: "Research paper on the impact and future of ImageNet",
      },
    ],
  },
  {
    id: "ilya-sutskever",
    name: "Ilya Sutskever",
    role: "Chief Scientist",
    company: "OpenAI",
    image: "/speakers/placeholder.svg",
    bio: "Ilya Sutskever is the Chief Scientist at OpenAI and a key figure in deep learning research.",
    resources: [
      {
        title: "Deep Learning: A Comprehensive Guide",
        type: "video",
        url: "https://www.youtube.com/watch?v=uaaqyVS9-rM",
        description: "Comprehensive overview of deep learning fundamentals",
      },
      {
        title: "Sequence to Sequence Learning with Neural Networks",
        type: "paper",
        url: "https://arxiv.org/abs/1409.3215",
        description: "Foundational paper on sequence-to-sequence learning",
      },
    ],
  },
  {
    id: "yann-lecun",
    name: "Yann LeCun",
    role: "Chief AI Scientist",
    company: "Meta",
    image: "/speakers/placeholder.svg",
    bio: "Yann LeCun is a Turing Award winner and pioneer in deep learning and computer vision.",
    resources: [
      {
        title: "Deep Learning, Neural Networks, and the Future of AI",
        type: "video",
        url: "https://www.youtube.com/watch?v=SGSOCuByo24",
        description: "Overview of deep learning and future AI directions",
      },
      {
        title: "A Path Towards Autonomous AI",
        type: "paper",
        url: "https://openreview.net/pdf?id=BZ5a1r-kVsf",
        description: "Research on autonomous machine learning systems",
      },
    ],
  },
  {
    id: "geoffrey-hinton",
    name: "Geoffrey Hinton",
    role: "Professor Emeritus",
    company: "University of Toronto",
    image: "/speakers/placeholder.svg",
    bio: 'Geoffrey Hinton is known as the "godfather of AI" and pioneered deep learning techniques.',
    resources: [
      {
        title: "Deep Learning Revolution",
        type: "video",
        url: "https://www.youtube.com/watch?v=Q4gTV4r0zRs",
        description: "Overview of the deep learning revolution",
      },
      {
        title: "The Forward-Forward Algorithm",
        type: "paper",
        url: "https://arxiv.org/abs/2212.13345",
        description: "New approach to training neural networks",
      },
    ],
  },
  {
    id: "dario-amodei",
    name: "Dario Amodei",
    role: "CEO",
    company: "Anthropic",
    image: "/speakers/placeholder.svg",
    bio: "Dario Amodei is the CEO of Anthropic, focusing on developing safe and ethical AI systems.",
    resources: [
      {
        title: "AI Safety and Ethics",
        type: "video",
        url: "https://www.youtube.com/watch?v=vYbl9CnDCUo",
        description: "Discussion on AI safety and ethical considerations",
      },
      {
        title: "Concrete Problems in AI Safety",
        type: "paper",
        url: "https://arxiv.org/abs/1606.06565",
        description: "Research paper on practical AI safety challenges",
      },
    ],
  },
  {
    id: "greg-brockman",
    name: "Greg Brockman",
    role: "President",
    company: "OpenAI",
    image: "/speakers/placeholder.svg",
    bio: "Greg Brockman is the President and co-founder of OpenAI, previously CTO of Stripe.",
    resources: [
      {
        title: "The Journey to ChatGPT",
        type: "video",
        url: "https://www.youtube.com/watch?v=vw-KWfKwvTQ",
        description: "Behind the scenes of ChatGPT development",
      },
      {
        title: "OpenAI API Documentation",
        type: "other",
        url: "https://platform.openai.com/docs/introduction",
        description: "Guide to using OpenAI APIs and models",
      },
    ],
  },
  {
    id: "ian-goodfellow",
    name: "Ian Goodfellow",
    role: "AI Researcher",
    company: "DeepMind",
    image: "/speakers/placeholder.svg",
    bio: "Ian Goodfellow is known for inventing GANs (Generative Adversarial Networks) and is a leading AI researcher.",
    resources: [
      {
        title: "Deep Learning Book",
        type: "other",
        url: "https://www.deeplearningbook.org/",
        description: "Comprehensive textbook on deep learning",
      },
      {
        title: "Generative Adversarial Networks",
        type: "paper",
        url: "https://arxiv.org/abs/1406.2661",
        description: "Original paper introducing GANs",
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
    alt: "Andrej Karpathy",
    speakerId: "andrej-karpathy",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20chelsea%20finn-e5306697162ef132.png",
    alt: "Demis Hassabis",
    speakerId: "demis-hassabis",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20john%20jumper-90940147d1e5b771.png",
    alt: "Fei-Fei Li",
    speakerId: "fei-fei-li",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20jared%20kaplan2-33bcae103bf3015c.png",
    alt: "Ilya Sutskever",
    speakerId: "ilya-sutskever",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/Andrej%20Karpathy-ea758b26e27164f6.png",
    alt: "Yann LeCun",
    speakerId: "yann-lecun",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20fei-fei%20li-09e2a9a72beeba49.png",
    alt: "Geoffrey Hinton",
    speakerId: "geoffrey-hinton",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20elon%20musk-03540062690fda91.png",
    alt: "Dario Amodei",
    speakerId: "dario-amodei",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20satya-0e6e110a8ae43ccf.png",
    alt: "Greg Brockman",
    speakerId: "greg-brockman",
  },
  {
    src: "https://d2xtzufx9mvgbo.cloudfront.net/events/new%20andrew%20ng-d2fe686c6a066dc1.png",
    alt: "Ian Goodfellow",
    speakerId: "ian-goodfellow",
  },
];

export default function Home() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomFromPosition, setZoomFromPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [showCarousel, setShowCarousel] = useState(true);
  const [clickedImageSrc, setClickedImageSrc] = useState<string>("");
  const [showZoomingImage, setShowZoomingImage] = useState(false);
  const [hasInitialAnimationRun, setHasInitialAnimationRun] = useState(false);

  const handleCarouselImageClick = (
    speaker: Speaker,
    imagePosition: { x: number; y: number }
  ) => {
    // Find the corresponding carousel image
    const carouselImage = carouselImages.find(
      (img) => img.speakerId === speaker.id
    );
    if (carouselImage) {
      setClickedImageSrc(carouselImage.src);
    }

    setZoomFromPosition(imagePosition);
    setIsZooming(true);
    setShowZoomingImage(true);

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
      setZoomFromPosition(null);
      setShowZoomingImage(false);
    }, 600);
  };

  const handleBackToCarousel = () => {
    setSelectedSpeaker(null);
    setShowCarousel(true);
    setClickedImageSrc("");
    setShowZoomingImage(false);
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
                    className="object-cover"
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
                    Resources
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
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-blue-600 text-lg mb-2">
                              {resource.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                              {resource.description}
                            </p>
                          </div>
                          <span className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full ml-4 flex-shrink-0">
                            {resource.type}
                          </span>
                        </div>
                        <div className="flex items-center text-blue-500 text-sm font-medium">
                          Explore Resource
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
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
