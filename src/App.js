import { createContext, useMemo, useReducer, useRef, useState } from "react";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { Button, Modal } from "antd";
export const themeContext = createContext();
const reducerFn = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
function App() {
  const [theme, setTheme] = useState("light");
  const [activeModal, setActiveModal] = useState(null);
  const fileInputRef = useRef(null);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [state, dispatch] = useReducer(reducerFn, { count: 1 });
  const [count, setCount] = useState(0);
  const showTeachersModal = () => {
    setActiveModal("OPEN_TEACHERS_MODAL");
  };

  const showSingleModal = () => {
    setActiveModal("OPEN_SINGLE_MODAL");
  };

  // const incrementedCount = useMemo(() => {
  //   return count + 1;
  // }, [count]);
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      console.log("File selected: ", file.name);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <themeContext.Provider value={theme}>
      <div className="p-2">
        <div className="font-bold">Hooks</div>
        {/* wrap in one component call this function inside the to update the state
        context globally
        */}
        <button
          onClick={toggleTheme}
          className="border border-black px-2 rounded-md"
        >
          toggle
        </button>
        <div className="p-2 font-bold">Mode : {theme}</div>
        <Home />
        <About />
        <Contact />
        <div className="border-b p-2 m-2">File Upload</div>
        <div className="flex gap-4 items-center ">
          <input type="file" ref={fileInputRef} className="border" />
          <button
            onClick={handleFileUpload}
            className="border border-black p-2"
          >
            Upload File
          </button>
        </div>
      </div>
      {/* <div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(incrementedCount)}>Increment</button>
      </div> */}
      {/* 
      //reducer in a commom function to an modal 

    
      */}
      <div className=" flex gap-4 p-4 items-center">
        <div
          onClick={decrement}
          className="cursor-pointer font-bold border p-2"
        >
          -
        </div>
        <div>Count : {state.count}</div>
        <div
          onClick={increment}
          className="cursor-pointer font-bold border p-2"
        >
          +
        </div>
      </div>
      <h1>Single state using useState hook</h1>
      <div className="flex gap-2">
        <div>
          <Button type="primary" onClick={showTeachersModal}>
            Teachers upload Modal
          </Button>
          <Modal
            title="Teachers Upload Modal"
            open={activeModal === "OPEN_TEACHERS_MODAL"}
            onCancel={() => setActiveModal(null)}
          >
            <p>Teachers upload</p>
          </Modal>
        </div>
        <div>
          <Button type="primary" onClick={showSingleModal}>
            Single upload Modal
          </Button>
          <Modal
            title="Single Upload Modal"
            open={activeModal === "OPEN_SINGLE_MODAL"}
            onCancel={() => setActiveModal(null)}
          >
            <p>Single upload</p>
          </Modal>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
