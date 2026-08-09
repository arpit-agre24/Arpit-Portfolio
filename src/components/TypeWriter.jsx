import React, { useEffect, useState } from "react";

const TypeWriter = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseDuration = 1800;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words]);

  return (
    <span className="inline-block min-w-[22ch]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;