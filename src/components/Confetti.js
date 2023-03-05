import React from "react";
import "./Confetti.css";
import ConfettiExplosion from "react-confetti-explosion";

const Confetti = () => {
  const [isExploding, setIsExploding] = React.useState(false);

  const props = {
    force: 0.8,
    duration: 3000,
    particleCount: 250,
    width: 1600,
  };

  const handleConfetti = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 3000);
  };

  return (
    <div className="confetti">
      <button
        onClick={handleConfetti}
        className="confettiButton btn btn-outline-dark"
      >
        <i class="fa-solid fa-wand-magic-sparkles"></i> Click Me!{" "}
        <i class="fa-solid fa-wand-magic-sparkles"></i>
      </button>
      {isExploding && <ConfettiExplosion {...props} />}
    </div>
  );
};

export default Confetti;
