"use client";
import { metadata } from "./metadata"; // Import the metadata here
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import Smoothscroll from "@/components/Smoothscroll";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "@/components/loader/Loader";
import CustomCursor from "@/components/customCursor/CustomCursor";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loaderFinished, setLoaderFinished] = useState<boolean>(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const tl: gsap.core.Timeline = gsap.timeline({
      onComplete: () => setLoaderFinished(true),
    });
    setTimeline(tl);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title ?? "Default Title")}</title> {/* Ensure it's a string */}
        <meta name="description" content={String(metadata.description ?? "Default description")} /> {/* Ensure it's a string */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {loaderFinished ? (
          <main className="relative">
            <Header />
            <Smoothscroll>{children}</Smoothscroll>
            <section className="bg-background -translate-y-1 w-full h-20 main-radius absolute left-0 z-10" />
            <Footer />
            <CustomCursor />
          </main>
        ) : (
          <Loader timeline={timeline} />
        )}
      </body>
    </html>
  );
}
