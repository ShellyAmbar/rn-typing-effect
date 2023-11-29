import { useEffect, useRef, useState } from 'react';
import TypingEffectProps from '../interfaces';

const useTypingEffect = ({ text = '', typingDelay = 200, cursorDelay = 800, onEndTyping }: TypingEffectProps) => {
  const [typedText, setTypedText] = useState('');
  const currentIndex = useRef(0);
  const [isCursor, setisCursor] = useState(false);

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (currentIndex.current < text.length) {
        currentIndex.current += 1;
        setTypedText(text.slice(0, currentIndex.current));
      } else {
        clearInterval(textInterval);
        onEndTyping && onEndTyping();
      }
    }, typingDelay);

    const cursorInterval = setInterval(() => {
      setisCursor(isCursor => !isCursor);
    }, cursorDelay);

    return () => {
      clearInterval(textInterval);
      clearInterval(cursorInterval);
    };
  }, []);
  return {
    typedText,
    isCursor,
  };
};

export default useTypingEffect;
