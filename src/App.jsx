import Brief from "./components/Brief";
import Caret from "./components/Caret";
import Keyboard from "./components/Keyboard";
import Menu from "./components/Menu";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="font-roboto App h-screen w-screen inset-0 select-none bg-background dark:bg-background-dark transition-colors duration-300">
      <Caret />
      <div className="absolute md:top-[3%] md:left-[7%] sm:top-[4%] sm:left-[3.5%] xm:top-[1%] xm:left-[1.5%]">
        <Menu className="transform md:scale-[-1.2] xm:scale-[-1] scale-[-0.8] fill-menu_button dark:fill-menu_button-dark" />
      </div>
      <div className="mx-auto md:w-2/3 sm:w-3/4 w-11/12 flex flex-col sm:justify-evenly short:py-[6%] sm:py-0 xm:py-[8%] py-[25%] short:justify-between  h-full">
        <Brief className="h-28 flex flex-col justify-start" />
        <Paragraph className="sm:block sm:h-auto flex flex-col justify-center short:flex short:justify-center short:h-full h-full outline-none" />
        <Keyboard className="md:w-[920px] sm:w-[800px] sm:flex short:hidden hidden aspect-[2.86559541604] bg-keyboard dark:bg-keyboard-dark self-center justify-center items-center p-2 rounded-md" />
      </div>
    </div>
  );
}

export default App;
