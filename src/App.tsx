import React, { useState, useEffect } from "react";
import GlobeAscii from "./components/GlobeAscii";
import HomeProjects from "./components/HomeProjects";
import Portfolio from "./components/Portfolio";
import "./Home.css";

export default function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (showPortfolio) {
    return <Portfolio onBack={() => setShowPortfolio(false)} />;
  }

  return (
    <div className="home-page">
      <HomeProjects />

      <main className="home-layout">
        <section className="home-intro" aria-label="About John Girgis">
        <h1 className="home-name mb-1">
          John Girgis
        </h1>
        <div className="text-sm text-muted-foreground mb-3">
          whiteh4tter [at] gmail [dot] com
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          <button
            onClick={() => setShowPortfolio(true)}
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
            aria-disabled="true"
            title="CV coming soon"
            className="cursor-default rounded-sm underline decoration-dotted underline-offset-4 opacity-60"
          >
            cv ↗
          </a>
        </nav>
        </section>

        <div className="home-globe">
          <GlobeAscii onClick={toggleDarkMode} />
        </div>
      </main>
    </div>
  );
}
