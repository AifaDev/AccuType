import Brief from "./components/Brief";
import Caret from "./components/Caret";
import Keyboard from "./components/Keyboard";
// import Menu from "./components/Menu";
import Paragraph from "./components/Paragraph";
import Config from "./components/Config";
import { useKeys } from "./State";
import { useLayoutEffect } from "react";

function App() {
  const { openedConfig, theme, keyboard, progress } = useKeys();

  useLayoutEffect(() => {
    if (
      Date.now() - localStorage.getItem("progressedAt") > 86400000 ||
      !localStorage.getItem("progressedAt")
    ) {
      localStorage.setItem("progressedAt", Date.now());
      localStorage.setItem("progress", 0);
    }
  }, [progress]);
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
        {openedConfig && <Config />}
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
          {
            <Paragraph
              className={`sm:block sm:h-auto flex flex-col justify-center short:flex short:justify-center short:h-full h-full outline-none ${
                keyboard === "Show" ? "" : "pt-[5%]"
              }`}
            />
          }
          <Keyboard
            className={`md:w-[920px] sm:w-[800px] sm:flex short:hidden hidden aspect-[2.86559541604] bg-keyboard dark:bg-keyboard-dark self-center justify-center items-center p-2 rounded-md ${
              keyboard === "Show" ? "" : "!hidden"
            }`}
          />
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <a
            href="https://www.linkedin.com/in/abdullah-hakeem/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="dark:fill-[#14181d] fill-[#cccccc] hover:fill-bar-light dark:hover:fill-bar-dark transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
            >
              <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z" />
            </svg>{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
