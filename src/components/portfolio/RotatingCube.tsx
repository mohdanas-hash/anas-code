const faces = [
  { label: "C++", className: "cube-face-front" },
  { label: "Python", className: "cube-face-back" },
  { label: "JS", className: "cube-face-right" },
  { label: "DSA", className: "cube-face-left" },
  { label: "{ }", className: "cube-face-top" },
  { label: "</>", className: "cube-face-bottom" },
];

export function RotatingCube({ className = "" }: { className?: string }) {
  return (
    <div className={`cube-scene ${className}`} aria-hidden="true">
      <div className="cube">
        {faces.map((f) => (
          <div key={f.label} className={`cube-face ${f.className}`}>
            {f.label}
          </div>
        ))}
      </div>
    </div>
  );
}
