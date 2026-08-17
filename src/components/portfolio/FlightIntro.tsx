import { useEffect, useState } from "react";

const PATH_A = "M -80 360 C 220 210, 520 430, 1080 150";
const PATH_B = "M 1080 420 C 780 280, 460 90, -80 260";

const PLANE =
  "M 26 0 L -8 -11 L -2 0 L -8 11 Z M -4 -2 L -22 -16 L -27 -12 L -14 -2 Z M -4 2 L -22 16 L -27 12 L -14 2 Z";

/**
 * Intro flourish: two small planes take off from opposite edges, cross the
 * viewport along mirrored arcs and leave a dotted contrail that lingers for a
 * few seconds before the whole overlay fades away.
 */
export function FlightIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

        <g className="flight-plane">
          <path d={PLANE} className="flight-plane-body" />
          <animateMotion
            path={PATH_A}
            dur="3.2s"
            begin="0.2s"
            rotate="auto"
            fill="freeze"
            calcMode="spline"
            keyPoints="0;1"
            keyTimes="0;1"
            keySplines="0.4 0 0.6 1"
          />
        </g>

        <g className="flight-plane">
          <path d={PLANE} className="flight-plane-body flight-plane-body-b" />
          <animateMotion
            path={PATH_B}
            dur="3.2s"
            begin="0.2s"
            rotate="auto"
            fill="freeze"
            calcMode="spline"
            keyPoints="0;1"
            keyTimes="0;1"
            keySplines="0.4 0 0.6 1"
          />
        </g>
      </svg>
    </div>
  );
}
