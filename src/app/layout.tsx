"use client";
import { metadata } from "./metadata"; // Import the metadata
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
        {/* Title and Description */}
        <title>{String(metadata.title ?? "Default Title")}</title>
        <meta
          name="description"
          content={String(metadata.description ?? "Default description")}
        />

        {/* Icons */}
        {metadata.icons && (
          Array.isArray(metadata.icons)
            ? metadata.icons.map((icon, index) => {
                if (typeof icon === 'string') {
                  return <link key={index} rel="icon" href={icon} />;
                }
                if ('url' in icon) {
                  // Convert URL to string if it's a URL object
                  const iconUrl = typeof icon.url === 'string' ? icon.url : icon.url.toString();
                  return (
                    <link
                      key={index}
                      rel="icon"
                      href={iconUrl} // Use the correct string type for href
                      media={icon.media}
                    />
                  );
                }
                return null;
              })
            : typeof metadata.icons === 'string'
            ? <link rel="icon" href={metadata.icons} />
            : null
        )}

        {/* Keywords */}
        {metadata.keywords && (
          <meta
            name="keywords"
            content={
              Array.isArray(metadata.keywords)
                ? metadata.keywords.join(", ") // If it's an array, join it
                : metadata.keywords // If it's a string, use it directly
            }
          />
        )}
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