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
    <h1 className="font-display mt-[10px] min-w-[420px] font-extrabold drop-shadow-sm">
      {displayedText ? displayedText : <>&nbsp;</>}
    </h1>
  );
}
