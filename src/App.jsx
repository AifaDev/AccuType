import Brief from "./components/Brief";
import Keyboard from "./components/Keyboard";
import Menu from "./components/Menu";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App h-screen w-screen">
      <div className="inline h-12 ">
        <Menu className="transform scale-[-1] h-12" />
      </div>
      <div className="mx-auto w-2/3 flex flex-col justify-evenly h-[calc(100vh-3rem)]">
        <Brief className="h-28 flex flex-col justify-start" />
        <Paragraph />
        <Keyboard className="w-[920.2px] h-[321.12px] bg-black self-center flex justify-center items-center" />
      </div>
    </div>
  );
}

export default App;
