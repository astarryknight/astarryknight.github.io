import { useEffect, useId, useRef, useState } from "react";
import { BookOpen, Glasses } from "lucide-react";
import "./HomeProjects.css";

export default function HomeProjects() {
  const [notchOpen, setNotchOpen] = useState(false);
  const [documentOpen, setDocumentOpen] = useState(false);
  const notchRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const notchPanelId = useId();
  const documentId = useId();

  useEffect(() => {
    if (!notchOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNotchOpen(false);
    };

    const closeOutside = (event: PointerEvent) => {
      if (
        notchRef.current &&
        !notchRef.current.contains(event.target as Node)
      ) {
        setNotchOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [notchOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (documentOpen && !dialog.open) {
      dialog.showModal();
    } else if (!documentOpen && dialog.open) {
      dialog.close();
    }
  }, [documentOpen]);

  const closeDocument = () => setDocumentOpen(false);

  return (
    <>
      <a
        className="course-book-link"
        href="https://astarryknight.github.io/ai-ml/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the AI and machine learning course"
        title="AI/ML Course"
      >
        <BookOpen aria-hidden="true" strokeWidth={1.35} />
        <span className="home-project-hover-label" aria-hidden="true">
          AI/ML Course
        </span>
      </a>

      <div
        ref={notchRef}
        className={`home-notch${notchOpen ? " home-notch--open" : ""}`}
      >
        <button
          type="button"
          className="home-notch-trigger"
          aria-expanded={notchOpen}
          aria-controls={notchPanelId}
          onClick={() => setNotchOpen((open) => !open)}
        >
          <span className="home-notch-camera" aria-hidden="true" />
          <span className="home-project-sr-only">
            {notchOpen ? "Close Notchable" : "Open Notchable"}
          </span>
        </button>

        {notchOpen && (
          <div id={notchPanelId} className="home-notch-panel">
            <div className="home-notch-project">
              <div className="home-notch-project-heading">
                <p className="home-notch-label">Project · 2024</p>
                <strong>Notchable</strong>
              </div>
              <p>
                A macOS utility that brings device notifications and calendar
                access into the display notch.
              </p>
              <a
                href="https://github.com/astarryknight/Notchable"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code ↗
              </a>
            </div>
          </div>
        )}
      </div>
      <span
        className="home-project-hover-label home-notch-hover-label"
        aria-hidden="true"
      >
        Notchable
      </span>

      <a
        className="memento-glasses-link"
        href="https://www.linkedin.com/posts/john-girgis-nj_hackmit-mentra-activity-7373747554213208064-hnSo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View the MementoAI project post on LinkedIn"
        title="MementoAI"
      >
        <Glasses aria-hidden="true" strokeWidth={1.35} />
        <span className="home-project-hover-label" aria-hidden="true">
          MementoAI
        </span>
      </a>

      <button
        type="button"
        className="cera-ring-trigger"
        aria-haspopup="dialog"
        aria-expanded={documentOpen}
        aria-controls={documentId}
        onClick={() => setDocumentOpen(true)}
      >
        <span className="cera-ring-icon" aria-hidden="true" />
        <span className="home-project-hover-label" aria-hidden="true">
          Cera One
        </span>
        <span className="home-project-sr-only">
          Open Cera One concept document
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id={documentId}
        className="cera-document-dialog"
        aria-labelledby={`${documentId}-title`}
        onClose={() => setDocumentOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDocument();
        }}
      >
        <article className="cera-document">
          <header className="cera-document-header">
            <p>Concept 001&nbsp;&nbsp; / &nbsp;&nbsp;2026</p>
            <button type="button" onClick={closeDocument}>
              Close
            </button>
          </header>

          <div className="cera-document-title">
            <p>Wearable accessibility</p>
            <h2 id={`${documentId}-title`}>Cera One</h2>
          </div>

          <p className="cera-document-summary">
            Developing a dry-sEMG wearable band to add accessibility control
            to daily-use devices.
          </p>

          <div
            className="cera-document-placeholder"
            role="img"
            aria-label="Cera One documentation pending"
          >
            <span>Documentation pending</span>
          </div>

          <footer className="cera-document-footer">
            <span>Dry sEMG</span>
            <span>Wearable input</span>
            <span>Accessible control</span>
          </footer>
        </article>
      </dialog>
    </>
  );
}
