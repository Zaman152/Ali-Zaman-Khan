export default function GridBackground() {
  return (
    <>
      <div className="grid-bg" />
      {/* Sparkle dots scattered */}
      <div className="sparkle" style={{ top: "15%", left: "10%", animationDelay: "0s" }} />
      <div className="sparkle" style={{ top: "25%", right: "15%", animationDelay: "1s" }} />
      <div className="sparkle" style={{ top: "55%", left: "20%", animationDelay: "2s" }} />
      <div className="sparkle" style={{ top: "70%", right: "25%", animationDelay: "0.5s" }} />
      <div className="sparkle" style={{ top: "40%", left: "80%", animationDelay: "1.5s" }} />
      <div className="sparkle" style={{ top: "85%", left: "50%", animationDelay: "2.5s" }} />
    </>
  );
}
