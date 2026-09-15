import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import GlobeAscii from "./components/GlobeAscii";
import HomeProjects from "./components/HomeProjects";
import Portfolio from "./components/Portfolio";
import "./Home.css";

type Screen = "home" | "research";
type TransitionPhase = "idle" | "exiting" | "entering";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>("idle");
  const screenRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLButtonElement>(null);
  const researchHeadingRef = useRef<HTMLHeadingElement>(null);
  const transitionTimer = useRef<number | null>(null);
  const navigationLocked = useRef(false);
  const pendingFocus = useRef(false);
  const hasNavigated = useRef(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to false
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  // Apply dark mode class to document and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(
      "darkMode",
      JSON.stringify(isDarkMode),
    );
  }, [isDarkMode]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current !== null) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (screenRef.current) {
      screenRef.current.inert = transitionPhase !== "idle";
    }
  }, [transitionPhase]);

  useLayoutEffect(() => {
    if (pendingFocus.current) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [screen]);

  useEffect(() => {
    if (transitionPhase !== "idle" || !pendingFocus.current) return;

    const target = screen === "research"
      ? researchHeadingRef.current
      : globeRef.current;
    target?.focus({ preventScroll: true });
    pendingFocus.current = false;
  }, [screen, transitionPhase]);

  const navigate = (destination: Screen) => {
    if (navigationLocked.current || destination === screen) return;

    hasNavigated.current = true;
    pendingFocus.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setScreen(destination);
      return;
    }

    navigationLocked.current = true;
    setTransitionPhase("exiting");
    transitionTimer.current = window.setTimeout(() => {
      setScreen(destination);
      setTransitionPhase("entering");
      transitionTimer.current = window.setTimeout(() => {
        transitionTimer.current = null;
        navigationLocked.current = false;
        setTransitionPhase("idle");
      }, 220);
    }, 180);
  };

  const themeAction = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

  return (
    <>
      <div
        ref={screenRef}
        className={`app-screen app-screen--${transitionPhase}${!hasNavigated.current ? " app-screen--initial" : ""}`}
        aria-busy={transitionPhase !== "idle"}
      >
        {screen === "research" ? (
          <>
            <HomeProjects />
            <Portfolio
              onBack={() => navigate("home")}
              headingRef={researchHeadingRef}
            />
          </>
        ) : (
          <div className="home-page">
            <main className="home-layout">
              <section className="home-intro" aria-label="About John Girgis">
                <h1 className="home-name mb-1">John Girgis</h1>
                <div className="text-sm text-muted-foreground mb-3">
                  whiteh4tter [at] gmail [dot] com
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  <button
                    type="button"
                    onClick={() => navigate("research")}
                    className="home-research-link rounded-sm font-normal underline decoration-dotted underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    computational neuroscience + machine learning
                  </button>
                  <br />
                  <span>
                    research @ <span className="italic">yale</span>,{" "}
                    <span className="italic">princeton</span> &amp;{" "}
                    <span className="italic">njit</span>
                  </span>
                  <br />
                  honors computer engineering {" "}
                  <span className="italic">@ njit</span> · 2024—2028
                </p>
                <nav
                  aria-label="Professional profiles"
                  className="mt-4 flex gap-4 text-sm text-muted-foreground"
                >
                  <a
                    href="https://www.linkedin.com/in/john-girgis-nj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    linkedin ↗
                  </a>
                  <a
                    href="https://github.com/astarryknight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    github ↗
                  </a>
                  <a
                    href="/documents/john-girgis-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open John Girgis's CV (PDF)"
                    className="rounded-sm underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    cv ↗
                  </a>
                </nav>
              </section>

              <div className="home-globe">
                <GlobeAscii
                  onClick={() => navigate("research")}
                  buttonRef={globeRef}
                />
              </div>
            </main>
          </div>
        )}
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={() => setIsDarkMode((dark) => !dark)}
        aria-label={themeAction}
        title={themeAction}
      >
        {isDarkMode
          ? <Sun aria-hidden="true" strokeWidth={1.35} />
          : <Moon aria-hidden="true" strokeWidth={1.35} />}
        <span className="theme-toggle-label" aria-hidden="true">
          {isDarkMode ? "Light mode" : "Dark mode"}
        </span>
      </button>
    </>
  );
}
