"use client";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Smoothscroll from "@/components/Smoothscroll";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loader from "@/components/loader/Loader";
// export const metadata: Metadata = {
//   title: "Kara aya architecture",
//   description: "Atelier d'architecture a tangier, maroc",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const tl: gsap.core.Timeline = gsap.timeline({
      onComplete: () => setLoaderFinished(true),
    });
    setTimeline(tl);
  }, []);

  return (
    <html lang="en">
      <body>
          {loaderFinished ? (
        <main className="relative">
              <Header />
              <Smoothscroll>{children}</Smoothscroll>
            <div className="bg-background -translate-y-1  w-full h-20 main-radius absolute left-0 z-20 " />
            <Footer />
        </main>
          ) : (
            <Loader timeline={timeline} />
          )}
      </body>
    </html>
  );
}
