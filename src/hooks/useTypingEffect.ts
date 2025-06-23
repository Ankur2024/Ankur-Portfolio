import { useEffect, useState } from 'react';

export const useTypingEffect = (
  words: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  delayBetweenWords: number = 2000
) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return displayText;
};