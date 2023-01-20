import { useRef } from "react";
import { useEffect } from "react";
import { useKeys } from "../State";
import Option from "./Option";

const Reset = () => {
  const { reset } = useKeys();

  return (
    <div className="w-full py-6 px-8 ">
      <div
        onClick={() => {
          reset();
          window.location.reload();
        }}
        className="h-10 rounded-xl justify-center flex items-center cursor-pointer bg-bar-light dark:bg-bar-dark text-[white] "
      >
        Reset
      </div>
    </div>
  );
};
export default function Config() {
  const {
    toggleConfig,
    setIndex,
    startSession,
    setFocus,
    paragraphRef,
  } = useKeys();
  const ref = useRef();
  

  return (
    <>
      <div className="fixed backdrop-blur-[8px] w-screen h-screen z-50 animate-[appear_100ms_ease-in-out] transition-colors duration-300">
        <div
          tabIndex={0}
          ref={ref}
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.key === "Escape") {
              toggleConfig(false);
              paragraphRef.current.focus();
              setIndex([0, 0]);
              setFocus(true);
              startSession();
            }
          }}
          className="overflow-auto outline-none absolute p-8 inset-0 m-auto bg-[#fafafa] border border-[#eaeaea] dark:border-none dark:bg-[#38414F] rounded-xl z-50 
          md:w-2/4 md:h-3/4 sm:w-3/4 sm:h-4/5 xm:w-11/12 xm:h-3/4 h-full short:h-full"
        >
          <svg
            onClick={() => toggleConfig(false)}
            className="absolute right-6 top-5 cursor-pointer"
            xmlns="https://www.w3.org/2000/svg"
            width="41"
            height="41"
            fill="none"
          >
            <path
              fill="#9B9B9B"
              d="M33.392 30.67a1.921 1.921 0 0 1-1.36 3.281c-.51 0-1-.2-1.362-.558L20.5 23.223l-10.17 10.17a1.938 1.938 0 0 1-2.723 0 1.923 1.923 0 0 1 0-2.723l10.17-10.17-10.17-10.17a1.925 1.925 0 0 1 2.723-2.723l10.17 10.17 10.17-10.17a1.925 1.925 0 1 1 2.722 2.723L23.222 20.5l10.17 10.17Z"
            />
          </svg>
          <div className="border-b border-b-brief_border dark:border-b-brief_border-dark  p-2 pl-4 md:text-3xl xm:text-2xl text-1xl dark:text-[white] w-[98%]">
            Configurations
          </div>
          <div className="flex flex-col xm:pt-6 h-[87%] justify-between">
            <div>
              <Option name={"Theme"} selections={["Light", "Dark", "System"]} />
              <Option
                name={"Paragraph Length"}
                selections={["Long", "Medium", "Short"]}
              />
              <Option name={"Paragraph Type"} selections={["Quote", "Words"]} />
              <Option name={"Goal"} selections={["1500", "3000", "5000"]} />
              <Option name={"Keyboard"} selections={["Show", "Hide"]} />
            </div>

            <Reset />
          </div>
        </div>
      </div>
    </>
  );
}
