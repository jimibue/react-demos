import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const DemoContainer = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ border: "1px solid black", margin: "20px", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>{props.header}</h1>
        <div>
          <button onClick={() => setShow(true)}>show</button>
          <button onClick={() => setShow(false)}>hide</button>
        </div>
      </div>
      {show && (
        <>
          <div style={{ background: "#f1f1f1", padding: "20px" }}>
            {props.children}
          </div>
          <hr />
          <div>
            <i>src/app.js</i>
            <CopyBlock
              text={props.code ? props.code: '//No Code Given'}
              language="javascript"
              showLineNumbers={true}
              //   startingLineNumber={props.startingLineNumber}
              wrapLines
              theme={dracula}
            />

<i>src/app.js</i>
            <CopyBlock
              text={props.code ? props.code: '//No Code Given'}
              language="javascript"
              showLineNumbers={true}
              //   startingLineNumber={props.startingLineNumber}
              wrapLines
              theme={dracula}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DemoContainer;
