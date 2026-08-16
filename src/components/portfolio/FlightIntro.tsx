import { useEffect, useState } from "react";

const PATH_A = "M -80 360 C 220 210, 520 430, 1080 150";
const PATH_B = "M 1080 420 C 780 280, 460 90, -80 260";

/**
 * Intro flourish: two small planes take off from opposite edges, cross the
 * viewport along mirrored arcs and leave a dotted contrail that lingers for a
 * few seconds before the whole overlay fades away.
 */
export function FlightIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }
    const t = window.setTimeout(() => setDone(true), 6200);
    return () => window.clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="flight-intro pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path d={PATH_A} className="flight-trail" />
        <path d={PATH_B} className="flight-trail flight-trail-b" />
      </svg>

      <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g className="flight-plane">
          <path
            d="M 0 0 L -14 -6 L -10 0 L -14 6 Z M -9 -1 L -20 -9 L -22 -7 L -14 -1 Z M -9 1 L -20 9 L -22 7 L -14 1 Z"
            className="flight-plane-body"
          />
        </g>
        <g className="flight-plane flight-plane-b">
          <path
            d="M 0 0 L -14 -6 L -10 0 L -14 6 Z M -9 -1 L -20 -9 L -22 -7 L -14 -1 Z M -9 1 L -20 9 L -22 7 L -14 1 Z"
            className="flight-plane-body flight-plane-body-b"
          />
        </g>
      </svg>
    </div>
  );
}
