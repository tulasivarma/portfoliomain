import { useEffect, useState } from 'react';

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const HOLD_DELAY = 1400;

export function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      const holdTimeout = setTimeout(() => setIsDeleting(true), HOLD_DELAY);
      return () => clearTimeout(holdTimeout);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((index) => index + 1);
      return undefined;
    }

    const timeout = setTimeout(
      () => {
        setText((current) =>
          isDeleting ? current.slice(0, -1) : currentWord.slice(0, current.length + 1)
        );
      },
      isDeleting ? DELETE_SPEED : TYPE_SPEED
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}
