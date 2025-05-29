import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Startup School Speakers Hub",
  description: "Explore resources, talks, and insights from leading AI experts and entrepreneurs.",
  keywords: "AI, artificial intelligence, startup, technology, entrepreneurship, machine learning",
  authors: [{ name: "AI Startup School" }],
  openGraph: {
    title: "AI Startup School Speakers Hub",
    description: "Explore resources, talks, and insights from leading AI experts and entrepreneurs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Startup School Speakers Hub",
    description: "Explore resources, talks, and insights from leading AI experts and entrepreneurs.",
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
