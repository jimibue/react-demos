import { useState } from "react";
const useVisualize = (array, initReduceState) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [accumValue, setAccumValue] = useState(initReduceState);
  const [reduceIndex, setReduceIndex] = useState(null);
  //   const [reduceString, setReduceString] = useState("Before Map");
  const visualize = (accumFromReduce, item, index) => {

    let clonedAccumFromReduce =
      typeof accumFromReduce === "object"
        ? Array.isArray(accumFromReduce)
          ? [...accumFromReduce]
          : { ...accumFromReduce }
        : accumFromReduce;
    // setInReduce(true);
    setTimeout(() => {
      setCurrentItem(item);
      setAccumValue(clonedAccumFromReduce);
      setReduceIndex(index);
      if (index === array.length - 1) {
        // setInReduce(false);
        setTimeout(() => {
          setReduceIndex(array.length);
        }, 500);
      }
    }, index * 500);
  };
  // End visualize code
  return { visualize, currentItem, accumValue, setAccumValue, reduceIndex };
};

export default useVisualize;
// visualize(charAccum, char, index);
