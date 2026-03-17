"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 200;

function getFramePath(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/frames/tea-pour/ezgif-frame-${padded}.jpg`;
}

export default function TeaPourScroll() {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Draw frame on canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || !img.naturalWidth) return;

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    // BG Canvas dimensions
    const bgCanvas = bgCanvasRef.current;
    let bgCtx: CanvasRenderingContext2D | null = null;
    let bgRect: DOMRect | null = null;
    
    if (bgCanvas) {
      bgCtx = bgCanvas.getContext("2d");
      bgRect = bgCanvas.getBoundingClientRect();
      if (bgCtx && bgRect) {
        if (bgCanvas.width !== bgRect.width * dpr || bgCanvas.height !== bgRect.height * dpr) {
          bgCanvas.width = bgRect.width * dpr;
          bgCanvas.height = bgRect.height * dpr;
          bgCtx.scale(dpr, dpr);
        }
        bgCtx.clearRect(0, 0, bgRect.width, bgRect.height);
      }
    }

    // Clear FG canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = rect.width / rect.height;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    // Draw Foreground (Contain)
    if (imgAspect > canvasAspect) {
      // Image is wider than canvas (e.g., mobile portrait) - fit to width
      drawWidth = rect.width;
      drawHeight = drawWidth / imgAspect;
      offsetX = 0;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      // Image is taller than canvas - fit to height
      drawHeight = rect.height;
      drawWidth = drawHeight * imgAspect;
      offsetX = (rect.width - drawWidth) / 2;
      offsetY = 0;
    }
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Draw Background (Cover)
    if (bgCtx && bgRect) {
      const bgCanvasAspect = bgRect.width / bgRect.height;
      let bgDrawWidth: number, bgDrawHeight: number, bgOffsetX: number, bgOffsetY: number;

      if (imgAspect > bgCanvasAspect) {
        // Image wider than canvas - cover height
        bgDrawHeight = bgRect.height;
        bgDrawWidth = bgDrawHeight * imgAspect;
        bgOffsetX = (bgRect.width - bgDrawWidth) / 2;
        bgOffsetY = 0;
      } else {
        // Image taller than canvas - cover width
        bgDrawWidth = bgRect.width;
        bgDrawHeight = bgDrawWidth / imgAspect;
        bgOffsetX = 0;
        bgOffsetY = (bgRect.height - bgDrawHeight) / 2;
      }
      bgCtx.drawImage(img, bgOffsetX, bgOffsetY, bgDrawWidth, bgDrawHeight);
    }
  }, []);

  // Scroll handler
  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the container
      const scrollProgress = Math.max(
        0,
        Math.min(1, -rect.top / (containerHeight - windowHeight))
      );

      // Map scroll to frame index (REVERSED: scroll down → frames go from 200 to 1)
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor((1 - scrollProgress) * (TOTAL_FRAMES - 1))
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Draw the initial frame (last frame = empty/separated)
    drawFrame(TOTAL_FRAMES - 1);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, drawFrame]);

  // Handle resize
  useEffect(() => {
    if (!isLoaded) return;

    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, drawFrame]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream">
          <div className="flex flex-col items-center gap-6">
            {/* Loading Crown */}
            <svg
              width="50"
              height="35"
              viewBox="0 0 60 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse"
            >
              <path
                d="M5 35 L10 10 L20 22 L30 5 L40 22 L50 10 L55 35 Z"
                fill="#D4AF37"
                stroke="#B8960F"
                strokeWidth="1.5"
              />
            </svg>

            {/* Progress Bar */}
            <div className="h-1 w-48 overflow-hidden rounded-full bg-cream-dark">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${loadProgress}%`,
                  background: "linear-gradient(90deg, #8B0000, #D4AF37)",
                }}
              />
            </div>

            <p className="font-[family-name:var(--font-outfit)] text-sm tracking-widest text-warm-dark/60">
              PREPARING YOUR ROYAL POUR — {loadProgress}%
            </p>
          </div>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#e0d8d0]">
        
        {/* Background Ambient Canvas (Blurred & Scaled) */}
        <canvas
          ref={bgCanvasRef}
          className="absolute inset-0 h-full w-full opacity-80 blur-3xl scale-110 saturate-150 transition-opacity duration-300"
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        />

        {/* Foreground Canvas (Sharp & Contained) */}
        <canvas
          ref={canvasRef}
          className="relative z-10 h-full w-full drop-shadow-2xl"
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        />

        {/* Top/Bottom Gradient Overlays to smoothly blend the edges into sections */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(to_bottom,var(--color-cream)_0%,transparent_15%,transparent_85%,var(--color-cream)_100%)]" />
      </div>
    </div>
  );
}
