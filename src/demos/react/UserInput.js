import { useState } from "react";
import DemoContainer from "../DemoContainer";

const UserInput = (props) => {
  const [name, setName] = useState("");

  const handleSubmitClicked = (e)=>{
      e.preventDefault()
      alert('name here from form: ' + name)
  }
  return (
    <DemoContainer header="Getting User Input" code={code}>
      <div>
        <form onSubmit={handleSubmitClicked} >
          <p>input</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </div>
    </DemoContainer>
  );
};

export default UserInput;

const code =`// demos/basics/react/UserInput.js

import { useState } from "react";
import DemoContainer from "../DemoContainer";

const UserInput = (props) => {
  const [name, setName] = useState("");

  const handleSubmitClicked = (e)=>{
      e.preventDefault()
      alert('name here from form: ' + name)
  }
  return (
    <DemoContainer header="Getting User Input">
      <div>
        <form onSubmit={handleSubmitClicked}>
          <p>input</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </div>
    </DemoContainer>
  );
};

export default UserInput;

`
