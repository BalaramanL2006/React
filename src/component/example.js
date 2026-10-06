import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "./Greeting";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName]=useState("");
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    setSubmittedName(name);
  };
  
  const handleClear =()=>{
    setName("");
    setSubmittedName("");
  };

  return (
    <div className="m-5 card">
      <div className="card-body">
        <form>
        <label htmlFor="inputUserName" className="p-2">
          Username
        </label>

        <input
          type="text"
          className="form-control"
          id="inputUserName"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button
          className="btn btn-primary mt-3 me-2"
           onClick={handleSubmit}
        >
          Submit
        </button>
        
        <button
          className="btn btn-secondary mt-3"
          onClick={handleClear}
        >
          Clear
        </button>
        </form>

      {submittedName && <Greeting name={submittedName} />}
      </div>
    </div>
  );
}

export default App;