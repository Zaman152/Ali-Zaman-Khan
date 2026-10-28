export default function ConcentricCircles({
  top = "50%",
  left = "50%",
}: {
  top?: string;
  left?: string;
}) {
  const rings = [200, 300, 400, 500, 600];
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top,
        left,
        width: 0,
        height: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {rings.map((r, i) => (
        <div
          key={r}
          style={{
            position: "absolute",
            width: r,
            height: r,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.04)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) scale(1)",
            animation: `radarPulse 6s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
