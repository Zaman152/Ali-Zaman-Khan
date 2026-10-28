"use client";

import JimoBot from "./JimoBot";

export default function BotReveal() {
  return (
    <section
      aria-hidden
      style={{
        position: "relative",
        height: 400,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          transform: "translateY(40%)",
        }}
      >
        <JimoBot size="large" />
      </div>
    </section>
  );
}
