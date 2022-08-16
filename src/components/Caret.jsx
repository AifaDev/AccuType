import { useEffect, useRef } from "react";
import { useKeys } from "../State";

export default function Caret() {
  const { position, focused, size, updateSize, letter } = useKeys();
  const myCaret = useRef();
  addEventListener("resize", updateSize);
  useEffect(() => {
    if (letter) {
      const caretHeight = myCaret.current.getBoundingClientRect().height;
      const x = letter?.getBoundingClientRect().x;
      const y =
        letter.getBoundingClientRect().y +
        letter.getBoundingClientRect().height / 2 -
        caretHeight / 2;
      myCaret.current.style.left = x + "px";

      myCaret.current.style.top = y + "px";
    }
  }, [position, size, letter]);

  return (
    <div
      className={`absolute z-10 transition-[left] duration-100 rounded-full w-[3px] animate-[breathe_1s_ease-in-out_infinite]  md:h-9 xm:h-[30px] h-6 bg-bar dark:bg-bar-dark ${
        !focused && "invisible"
      }`}
      ref={myCaret}
    />
  );
}
