export default function DotMatrix() {
  const cols = 40;
  const rows = 3;
  return (
    <div
      aria-hidden
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 0,
        padding: "40px 0",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
