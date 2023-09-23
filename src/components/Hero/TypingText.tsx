import { useEffect, useState } from "react";

export function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <h1 className="mt-[10px] min-w-[420px] text-3xl drop-shadow-sm md:text-[2.75rem] md:font-extrabold">
      {displayedText ? displayedText : <>&nbsp;</>}
    </h1>
  );
}
