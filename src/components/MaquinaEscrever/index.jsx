import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function MaquinaEscrever({ text }) {

  MaquinaEscrever.propTypes = {
    text: PropTypes.string.isRequired
  };

  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typingDelay, setTypingDelay] = useState(400); // Initial delay for typing

  useEffect(() => {
    const startTyping = () => {
      if (currentCharIndex < text.length) {
        setDisplayText(text.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
        setTypingDelay(typingDelay + 20); // Increase the delay for each character
      }
    };
    
    const typingInterval = setInterval(startTyping, typingDelay);
    return () => clearInterval(typingInterval);
  }, [currentCharIndex, text, typingDelay]);

  return (
    <div className="textoMaquinaEscrever">
      {displayText}
    </div>
  );
}