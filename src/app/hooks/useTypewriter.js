// src/app/hooks/useTypewriter.js
"use client"; // Add this line

import { useState, useEffect } from 'react';

export function useTypewriter(words, delay = 150) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      setText((prev) => {
        const fullText = words[index];
        return isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1);
      });

      if (!isDeleting && text === words[index]) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingSpeed = isDeleting ? delay / 2 : delay;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, delay]);

  return text;
}
