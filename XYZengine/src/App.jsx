import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Data from "./components/Data/Data";
import FileUpload from "./components/FIleUpload/FileUpload";

function App() {
  const [info, setInfo] = useState({
    projectName: "",
    projectDescription: "",
    clientName: "",
    contractor: "",
    X_max: 0,
    X_min: 0,
    Y_max: 0,
    Y_min: 0,
    Z_max: 0,
    Z_min: 0,
    mod: false,
  });

  return (
    <div className="App">
      <div className="inputs">
        <Form
          info={info}
          setInfo={setInfo}
        />
        <FileUpload
          info={info}
          setInfo={setInfo}
        />
      </div>
      <Data info={info} />
    </div>
  );
}

export default App;
