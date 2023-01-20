import Brief from "./components/Brief";
import Caret from "./components/Caret";
import Keyboard from "./components/Keyboard";
// import Menu from "./components/Menu";
import Paragraph from "./components/Paragraph";
import Config from "./components/Config";
import { useKeys } from "./State";
import { useLayoutEffect } from "react";

function App() {
  const {  theme, keyboard } = useKeys();

  useLayoutEffect(() => {
    if (
      localStorage.theme === "Dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
    
      <div className="outline-none font-roboto App h-screen w-screen inset-0 select-none bg-background dark:bg-background-dark transition-colors duration-300">
        {/* {openedConfig && <Config />} */}
        <Caret />
        <div className="absolute md:top-[3%] md:left-[7%] sm:top-[4%] sm:left-[3.5%] xm:top-[1%] xm:left-[1.5%]">
          {/* <Menu className="transform md:scale-[-1.2] xm:scale-[-1] scale-[-0.8] fill-menu_button dark:fill-menu_button-dark" /> */}
        </div>
        <div
          className={`mx-auto md:w-2/3 sm:w-3/4 w-11/12 flex flex-col  short:py-[6%] sm:py-0 xm:py-[8%] py-[25%]  h-full ${
            keyboard === "Show"
              ? "sm:justify-evenly short:justify-between"
              : "!py-[8%] "
          }}`}
        >
          <Brief className="h-28 flex flex-col justify-start" />
          {<Paragraph
            className={`sm:block sm:h-auto flex flex-col justify-center short:flex short:justify-center short:h-full h-full outline-none ${
              keyboard === "Show" ? "" : "pt-[5%]"
            }`}
          />}
          <Keyboard
            className={`md:w-[920px] sm:w-[800px] sm:flex short:hidden hidden aspect-[2.86559541604] bg-keyboard dark:bg-keyboard-dark self-center justify-center items-center p-2 rounded-md ${
              keyboard === "Show" ? "" : "!hidden"
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default App;
