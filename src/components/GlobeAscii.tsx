import type { Ref } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import globeGif from '../assets/globe.gif';

interface GlobeAsciiProps {
  onClick?: () => void;
  buttonRef?: Ref<HTMLButtonElement>;
}

export default function GlobeAscii({ onClick, buttonRef }: GlobeAsciiProps) {
  return (
    <div className="globe-navigation flex items-center justify-center">
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        className="rounded-lg transition-scale hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        aria-label="Inside my Brain"
        title="Inside my Brain"
      >
        <ImageWithFallback
          src={globeGif}
          alt="Spinning ASCII globe"
          className="w-80 h-80 object-contain select-none dark:invert max-w-none"
          draggable="false"
        />
      </button>
      <span className="globe-navigation-hint" aria-hidden="true">Inside my Brain</span>
    </div>
  );
}
