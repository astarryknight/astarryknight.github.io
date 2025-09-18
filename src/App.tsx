import React, { useState, useEffect } from "react";
import GlobeAscii from "./components/GlobeAscii";
import Portfolio from "./components/Portfolio";

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
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setShowPortfolio(false)}
            className="mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </button>
          <Portfolio />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content area with ASCII globe */}
      <div className="flex-1 flex items-center justify-center px-4">
        <GlobeAscii onClick={toggleDarkMode} />
      </div>

      {/* Footer content */}
      <div className="pb-12 px-8">
        <h1 className="mb-1" style={{ fontSize: "2.5rem" }}>
          John Girgis
        </h1>
        <div className="text-sm text-muted-foreground mb-3">
          whiteh4tter [at] gmail [dot] com
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          <button
            onClick={() => setShowPortfolio(true)}
            className="hover:text-foreground transition-colors underline decoration-dotted underline-offset-4"
          >
            swe, neuroscience, and machine learning
          </button>
          <br />
          <span>ML & neuro researcher @ <span className="italic">princeton</span>, <span className="italic">njit</span> (f25)</span>
          <br />
          honors computer engineering {" "}
          <span className="italic">@ njit</span>
        </p>
      </div>
    </div>
  );
}