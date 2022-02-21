import HighlightedArray from "../components/HighlightedArray";
import useVisualize from "../hooks/useVisualize";
import DemoContainer from "../demos/DemoContainer";
import { useState } from "react/cjs/react.development";
const Visualizer = ({ array, accumStart, nextAccumCB, header,code }) => {
    const [codeState, setCodeState] = useState('')
  let startArr = array;
  const accumStartState = accumStart;
  const { visualize, currentItem, accumValue, setAccumValue, reduceIndex } =
    useVisualize(startArr, accumStartState);
  const getCharCount = () => {
    const finalCharAccum = startArr.reduce((accum, item, index) => {
      //   let nextAccum = accum + num
      //  const nextAccum = [...accum,  `<p>${num*2}</p>`];
      const nextAccum = nextAccumCB(accum, item, index);
      let codeArr = code.split('--')
      codeArr[0] = `current value: ${accum}, current item${item}`
      setCodeState(codeArr.join('\n'))
      visualize(nextAccum, item, index);
      return nextAccum;
    }, accumStartState); // {} set the starting value sumAccum
    setAccumValue(finalCharAccum);
  };

  return (
    <DemoContainer header={header} code={code}>
      {/* <p> startArr:{JSON.stringify(startArr)}</p> */}

      {/* <p>currentItem: {currentItem}</p> */}
      <HighlightedArray highlightIndex={reduceIndex} array={startArr} />
      <h1>
        {" "}
        {reduceIndex === startArr.length
          ? "Final Return Value"
          : "Building Return, current state"}{" "}
        {JSON.stringify(accumValue)}
      </h1>
      <button onClick={getCharCount}>click</button>
    </DemoContainer>
  );
};

export default Visualizer;
