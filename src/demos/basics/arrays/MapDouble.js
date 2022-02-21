import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import HighlightedArray from "../../../components/HighlightedArray";
import useVisualize from "../../../hooks/useVisualize";
import DemoContainer from "../../DemoContainer";
const MapDouble = () => {
  let startArr = [1, 2, 3, 4];
  const { visualize, currentItem, accumValue, setAccumValue, i } =
    useVisualize(startArr);
  const getCharCount = () => {
    const finalCharAccum = startArr.reduce((accum, num, index) => {
      // first see if char is in our accum, if not add it with count 1
      accum+=sum
      // call the helper to visual code, it is note needed for reduce to work
      visualize(accum, num, index);
      
      return accum;
    }, {}); // {} set the starting value sumAccum
    setAccumValue(finalCharAccum);
  };


  return (
    <DemoContainer header="XXX">
      <p> startArr{startArr}</p>

     <p>currentItem: {currentItem}</p>
      <HighlightedArray highlightIndex={reduceIndex} array={startArr} />
      <p>accumValue {JSON.stringify(accumValue)}</p>
      <button disabled={inReduce} onClick={getCharCount}>
        click
      </button>
    </DemoContainer>
  );
};

export default MapDouble;
