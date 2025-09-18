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
        className="transition-scale hover:scale-105 active:scale-95 focus:outline-none rounded-lg"
        aria-label="Toggle dark mode"
      >
        <ImageWithFallback
          src={globeGif}
          alt="Globe ASCII Animation - Click to toggle dark mode"
          className="w-64 h-64 object-contain select-none dark:invert"
          draggable="false"
        />
      </button>
    </div>
  );
}