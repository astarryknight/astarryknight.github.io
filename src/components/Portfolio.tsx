// Restore alongside the Buschman media below when a preview is ready.
// import buschmanLabArtwork from "../assets/buschman-lab.png";
import engelLabManuscriptPreview from "../assets/engel-lab-manuscript-preview.png";
import nandyLabPoster from "../assets/nandy-lab-poster.png";
import stackfusePoster from "../assets/stackfuse-poster.png";
import "./Portfolio.css";

interface WorkLink {
  label: string;
  href: string;
}

type WorkMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      orientation?: "landscape" | "portrait";
      treatment?: "monochrome" | "natural";
    }
  | {
      kind: "placeholder";
      label: string;
      orientation?: "landscape" | "portrait";
    };

interface TimelineEntry {
  category: "Research";
  title: string;
  period: string;
  summary: string;
  links?: WorkLink[];
  media?: WorkMedia;
}

interface PortfolioProps {
  onBack: () => void;
}

const research: TimelineEntry[] = [
  {
    category: "Research",
    title: "Nandy Lab",
    period: "2026—Present",
    summary:
      "Computational neuroscience research on how cognition emerges from biological constraints at Yale School of Medicine.",
    media: {
      kind: "image",
      src: nandyLabPoster,
      alt: "Research poster titled More than what meets the eye: Towards a mechanistic model of active sampling",
      width: 1636,
      height: 1228,
      orientation: "landscape",
      treatment: "natural",
    },
  },
  {
    category: "Research",
    title: "Buschman Lab",
    period: "2025—Present",
    summary:
      "Developing neural models and synthetic retinal datasets to study visual processing and saccadic prediction at Princeton Neuroscience Institute.",
    // media: {
    //   kind: "image",
    //   src: buschmanLabArtwork,
    //   alt: "Abstract neural network artwork from the Buschman Lab",
    //   width: 813,
    //   height: 626,
    //   orientation: "portrait",
    // },
  },
  {
    category: "Research",
    title: "Brain Age Prediction",
    period: "2025",
    summary:
      "Hyperbolic graph neural networks for MEG brain-age prediction, published at IEEE MIT URTC.",
    links: [
      {
        label: "Publication",
        href: "https://doi.org/10.1109/URTC68753.2025.11533033",
      },
      {
        label: "Code",
        href: "https://github.com/astarryknight/hgcn_e2e",
      },
    ],
    media: {
      kind: "placeholder",
      label: "Media pending — Brain Age Prediction",
      orientation: "portrait",
    },
  },
  {
    category: "Research",
    title: "Engel Lab",
    period: "Jan—May 2025",
    summary:
      "Neural compositionality and generalization research at Princeton Neuroscience Institute.",
    links: [
      {
        label: "Manuscript",
        href: "/documents/engel-lab-manuscript.pdf",
      },
    ],
    media: {
      kind: "image",
      src: engelLabManuscriptPreview,
      alt: "First page of the manuscript Task-identity structure and interpopulation connectivity shape compositional geometry in recurrent neural networks, by John Girgis and Iman Wahle",
      width: 1076,
      height: 1382,
      orientation: "portrait",
      treatment: "natural",
    },
  },
  {
    category: "Research",
    title: "StackFuse / StackCore",
    period: "2025",
    summary:
      "Fusion 360 and Python tools for parallel Monte Carlo tolerance analysis, built at Princeton Plasma Physics Laboratory.",
    links: [
      {
        label: "StackFuse",
        href: "https://github.com/astarryknight/stackfuse",
      },
      {
        label: "StackCore",
        href: "https://github.com/astarryknight/stackcore",
      },
    ],
    media: {
      kind: "image",
      src: stackfusePoster,
      alt: "Research poster titled StackCore and StackFuse: Quick, Easy, and Intuitive Tolerance Stack Up Analyses",
      width: 1602,
      height: 1202,
      treatment: "natural",
    },
  },
];

function Media({ media }: { media: WorkMedia }) {
  if (media.kind === "placeholder") {
    return (
      <div
        role="img"
        aria-label={media.label}
        className={`portfolio-media-frame portfolio-placeholder portfolio-placeholder--${
          media.orientation ?? "landscape"
        }`}
      >
        <span>{media.label}</span>
      </div>
    );
  }

  return (
    <figure
      className={`portfolio-media-frame portfolio-media-frame--${
        media.orientation ?? "landscape"
      }`}
    >
      <img
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        className={`portfolio-media portfolio-media--${
          media.treatment ?? "monochrome"
        }`}
      />
    </figure>
  );
}

function WorkEntry({ entry }: { entry: TimelineEntry }) {
  return (
    <article
      className={`portfolio-entry ${
        entry.media ? "portfolio-entry--media" : "portfolio-entry--text"
      }`}
    >
      {entry.media && <Media media={entry.media} />}

      <div className={entry.media ? "portfolio-caption" : ""}>
        <p className="portfolio-category">{entry.category}</p>

        <div className="portfolio-title-row">
          <h2>{entry.title}</h2>
          <p>{entry.period}</p>
        </div>

        <p className="portfolio-summary">{entry.summary}</p>

        {entry.links && (
          <nav
            aria-label={`${entry.title} links`}
            className="portfolio-links"
          >
            {entry.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </nav>
        )}
      </div>
    </article>
  );
}

export default function Portfolio({ onBack }: PortfolioProps) {
  return (
    <div className="portfolio-page">
      <main className="portfolio-main">
        <h1 className="portfolio-sr-only">Research by John Girgis</h1>

        <button
          type="button"
          onClick={onBack}
          className="portfolio-home"
        >
          ← Home
        </button>

        <div className="portfolio-timeline">
          {research.map((entry) => (
            <WorkEntry key={entry.title} entry={entry} />
          ))}
        </div>
      </main>
    </div>
  );
}
