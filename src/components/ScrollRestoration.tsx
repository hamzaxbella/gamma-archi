"use client"; // Ensures this component only runs on the client

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ScrollRestoration = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [router, setRouter] = useState<any>(null);

  useEffect(() => {
    // Ensure this runs only after the component is mounted on the client
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Initialize the router only when mounted
      const r = require('next/router').default;
      setRouter(r);
    }
  }, [isMounted]);

  useEffect(() => {
    if (!router) return; // Ensure the router is defined before proceeding

    const handleRouteChange = () => {
      window.scrollTo(0, 0); // Scroll to the top on route change
    };

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange); // Clean up event listener
    };
  }, [router]);

  return null; // This component doesn't render anything
};

export default ScrollRestoration;
