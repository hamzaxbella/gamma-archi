"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothscrollProps {
    children : ReactNode
}

function Smoothscroll({children} : SmoothscrollProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default Smoothscroll