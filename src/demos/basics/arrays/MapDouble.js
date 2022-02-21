
import HighlightedArray from "../../../components/HighlightedArray";
import useVisualize from "../../../hooks/useVisualize";
import DemoContainer from "../../DemoContainer";
const MapDouble = () => {
  let startArr = [1, 2, 3, 4];
  const accumStartState = {}
  const { visualize, currentItem, accumValue, setAccumValue, reduceIndex } =
    useVisualize(startArr, accumStartState);
  const getCharCount = () => {
    const finalCharAccum = startArr.reduce((accum, num, index) => {
    //   let nextAccum = accum + num
    //  const nextAccum = [...accum,  `<p>${num*2}</p>`];
      const nextAccum = {...accum,  [`num-${index}`]:num};
      visualize(nextAccum, num, index);
      return nextAccum;
    }, accumStartState); // {} set the starting value sumAccum
    setAccumValue(finalCharAccum);
  };

  return (
    <DemoContainer header="XXX">
      <p> startArr:{JSON.stringify(startArr)}</p>

      <p>currentItem: {currentItem}</p>
      <HighlightedArray highlightIndex={reduceIndex} array={startArr} />
      <p>accumValue {JSON.stringify(accumValue)}</p>
      <button onClick={getCharCount}>click</button>
    </DemoContainer>
  );
};

export default MapDouble;
