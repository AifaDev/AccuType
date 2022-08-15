import { useKeys } from "../State";

export default function Paragraph({ ...props }) {
  const { addKey, removeKey, setFocus, focused } = useKeys();
  const words = [
    [
      { key: "H", state: "correct" },
      { key: "e", state: "incorrect" },
      { key: "l", state: "paragraph" },
      { key: "l", state: "paragraph" },
      { key: "o", state: "paragraph" },
    ],
    [
      { key: "\u00A0", state: "paragraph" },
      { key: "W", state: "paragraph" },
      { key: "o", state: "paragraph" },
      { key: "r", state: "paragraph" },
      { key: "l", state: "paragraph" },
      { key: "d", state: "paragraph" },
      { key: "!", state: "paragraph" },
    ],
  ];
  return (
    <div
      onKeyDown={(e) => {
        e.preventDefault();
        if (e.key === "Escape") {
          e.target.blur();
        }
        addKey(e.code);
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
      }}
      onBlur={() => {
        setFocus(false);
      }}
    >
      <div
        className={`relative md:text-4xl xm:text-3xl text-2xl md:px-[5%] leading-normal  outline-none ${
          !focused && "blur-[2px]"
        }`}
      >
        <div>
          {words.map((e, i) => {
            return (
              <div className="inline-block" key={i}>
                {e.map((e, j) => {
                  //Tailwind made me do this...
                  const color = () => {
                    if (e.state === "correct") {
                      return "text-correct dark:text-correct-dark inline-block";
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
