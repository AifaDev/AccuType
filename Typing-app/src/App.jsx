import "./App.css";
import Brief from "./components/Brief";
import Keyboard from "./components/Keyboard";
import Menu from "./components/Menu";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="mx-auto w-[67vw]">
        <Brief className="h-28 flex flex-col justify-start"/>
        <Paragraph />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
