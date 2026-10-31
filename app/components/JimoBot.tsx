"use client";

interface JimoBotProps {
  size?: "hero" | "large";
}

export default function JimoBot({ size = "hero" }: JimoBotProps) {
  const isLarge = size === "large";
  const w = isLarge ? 800 : 600;
  const h = isLarge ? 620 : 480;
  const eyeW = isLarge ? 90 : 65;
  const eyeH = isLarge ? 130 : 95;

  return (
    <div
      aria-hidden
      style={{
        position: "relative",
        width: w,
        height: h,
        maxWidth: "90vw",
        animation: "float 8s ease-in-out infinite",
      }}
    >
      {/* Head outline — brighter, with glow trail */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "42% 42% 36% 36%",
          border: "1.5px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 0 30px rgba(255,255,255,0.03), inset 0 0 30px rgba(255,255,255,0.01)",
        }}
      />
      {/* Light trail accent along top-right edge */}
      <div
        style={{
          position: "absolute",
          top: "2%",
          right: "8%",
          width: "55%",
          height: "55%",
          borderRadius: "50% 42% 0 0",
          borderTop: "1.5px solid rgba(140,180,255,0.18)",
          borderRight: "1.5px solid rgba(140,180,255,0.10)",
          borderBottom: "none",
          borderLeft: "none",
          filter: "blur(0.5px)",
          pointerEvents: "none",
        }}
      />

      {/* Left eye */}
      <div
        style={{
          position: "absolute",
          left: "30%",
          top: "48%",
          transform: "translate(-50%,-50%)",
          width: eyeW,
          height: eyeH,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.18)",
          background: "rgba(59,130,246,0.04)",
          animation: "eyeGlow 3s ease-in-out infinite",
        }}
      />

      {/* Right eye */}
      <div
        style={{
          position: "absolute",
          left: "65%",
          top: "48%",
          transform: "translate(-50%,-50%)",
          width: eyeW,
          height: eyeH,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.18)",
          background: "rgba(59,130,246,0.04)",
          animation: "eyeGlow 3s ease-in-out infinite",
          animationDelay: "0.3s",
        }}
      />
    </div>
  );
}
