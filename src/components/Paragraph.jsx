import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useKeys } from "../State";

export default function Paragraph({ ...props }) {
  window.onblur = () => {
    document.title = "Paused";
    myParagraph.current.blur();
  };
  window.onfocus = () => myParagraph.current.focus();

  window.onresize = () => {
    myParagraph.current.blur();
    updateSize();
  };

  const {
    addKey,
    removeKey,
    setFocus,
    focused,
    setLetter,
    letters,
    startSession,
    startCounter,
    endSession,
    countLetter,
    countTypo,
    updateSize,
  } = useKeys();
  const firstUpdate = useRef(true);
  const [index, setIndex] = useState([0, 0]);
  const modifiers = {
    Tab: true,
    CapsLock: true,
    ShiftLeft: true,
    ShiftRight: true,
    ControlRight: true,
    ControlLeft: true,
    AltRight: true,
    AltLeft: true,
    Enter: true,
    Backspace: true,
    Escape: true,
    MetaLeft: true,
    MetaRight: true,
  };
  const myParagraph = useRef();
  useLayoutEffect(() => {
    if (index[0] === 0 && index[1] === 0) {
      startSession();
    }
    if (index[0] === 0 && index[1] === 1) {
      startCounter();
    }
    const element =
      myParagraph.current.firstChild.firstChild.children[index[0]].children[
        index[1]
      ];
    setLetter(element);
  }, [index]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      myParagraph.current.focus();
    } 
  }, []);

  return (
    <div
      ref={myParagraph}
      onKeyDown={(e) => {
        e.preventDefault();
        if (e.key === "Escape") {
          e.target.blur();
        } else if (e.key === "Tab") {
          setIndex([0, 0]);
        }
        addKey(e.code);
        const letter = letters[index[0]][index[1]];
        if (!modifiers[e.code]) {
          if (
            letter.key === e.key ||
            (letter.code === "Space" && e.code === "Space")
          ) {
            letter.state = "correct";
            countLetter();
            if (letters[index[0]][index[1] + 1]) {
              setIndex((prev) => [prev[0], prev[1] + 1]);
            } else if (letters[index[0] + 1][0]?.code !== "Finish") {
              setIndex((prev) => [prev[0] + 1, 0]);
            } else {
              setIndex((prev) => [prev[0] + 1, 0]);
              endSession();
              setIndex([0, 0]);
            }
          } else {
            letter.state = "incorrect";
            countTypo();
          }
        }
      }}
      onKeyUp={(e) => {
        if (e.code === "CapsLock") {
          const caps = e.getModifierState("CapsLock");
          if (caps) {
            return;
          }
        }
        removeKey(e.code);
      }}
      tabIndex="0"
      {...props}
      onFocus={() => {
        setFocus(true);
        document.title = "Typing...";
      }}
      onBlur={() => {
        document.title = "Best App";
        setFocus(false);
        setIndex([0, 0]);
        startSession();
      }}
    >
      <div
        className={`relative transition-[filter] tracking-wider md:text-4xl xm:text-3xl text-2xl md:px-[5%] leading-normal  outline-none ${
          !focused && "blur-[2px]"
        }`}
      >
        <div>
          {letters.map((e, i) => {
            return (
              <div className="inline-block" key={i}>
                {e.map((e, j) => {
                  //Tailwind made me do this...
                  const color = () => {
                    if (e.state === "correct") {
                      return "text-correct dark:text-correct-dark inline-block ";
                    } else if (e.state === "incorrect") {
                      return "text-incorrect dark:text-incorrect-dark inline-block";
                    } else {
                      return "text-paragraph dark:text-paragraph-dark inline-block";
                    }
                  };

                  return (
                    <div className={color()} key={j}>
                      {e.key}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* <input
          type="text"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck="false"
          className="left-0 top-0 right-0 bottom-0 m-0 p-0 border-none outline-none absolute mx-auto w-[90%] opacity-0"
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          list="autocompleteOff"
        /> */}
      </div>
    </div>
  );
}
