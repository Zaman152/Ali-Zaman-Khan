"use client";

interface JimoBotProps {
  size?: "hero" | "large";
}

export default function JimoBot({ size = "hero" }: JimoBotProps) {
  const isLarge = size === "large";
  const w = isLarge ? 800 : 560;
  const h = isLarge ? 600 : 440;

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
      {/* Head outline */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "2px solid rgba(255,255,255,0.1)",
          borderRadius: "40% 40% 35% 35%",
        }}
      />

      {/* Left eye */}
      <div
        style={{
          position: "absolute",
          left: "30%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: isLarge ? 80 : 60,
          height: isLarge ? 120 : 90,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.15)",
          animation: "eyeGlow 3s ease-in-out infinite",
        }}
      />

      {/* Right eye */}
      <div
        style={{
          position: "absolute",
          left: "65%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: isLarge ? 80 : 60,
          height: isLarge ? 120 : 90,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.15)",
          animation: "eyeGlow 3s ease-in-out infinite",
          animationDelay: "0.3s",
        }}
      />
    </div>
  );
}
