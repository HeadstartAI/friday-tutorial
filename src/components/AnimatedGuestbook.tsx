import React, { useState, useEffect } from "react";

const AnimatedGuestbook: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Guestbook";
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, 300); // moderate typing speed

      return () => clearTimeout(timeoutId);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [displayedText, fullText, isComplete]);

  return (
    <div className="font-mono text-2xl md:text-3xl text-white py-2 md:py-0 md:ml-4 text-center self-end">
      <span>{displayedText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default AnimatedGuestbook;
