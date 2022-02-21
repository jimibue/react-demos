import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import MarkdownPreview from '@uiw/react-markdown-preview';
const source = `
## MarkdownPreview

> todo: add Markdown.
`;

const DemoContainer = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ border: "1px solid black", margin: "20px", padding: "20px", flex:1, }}>
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
            <CopyBlock
              text={props.code ? props.code: '//No Code Given'}
              language="javascript"
              showLineNumbers={true}
              //   startingLineNumber={props.startingLineNumber}
              wrapLines
              theme={dracula}
            />
          </div>
          <hr />
          <div>
          <MarkdownPreview source={props.markdown|| source} />

          </div>
        </>
      )}
    </div>
  );
};

export default DemoContainer;
