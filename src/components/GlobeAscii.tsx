import { ImageWithFallback } from './figma/ImageWithFallback';
import globeGif from '../assets/globe.gif';

interface GlobeAsciiProps {
  onClick?: () => void;
}

export default function GlobeAscii({ onClick }: GlobeAsciiProps) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClick}
        className="rounded-lg transition-scale hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        aria-label="Toggle dark mode"
      >
        <ImageWithFallback
          src={globeGif}
          alt="Globe ASCII Animation - Click to toggle dark mode"
          className="w-80 h-80 object-contain select-none dark:invert max-w-none"
          draggable="false"
        />
      </button>
    </div>
  );
}
