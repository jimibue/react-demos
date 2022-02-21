import { useState } from "react";
const useVisualize = (array) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [accumValue, setAccumValue] = useState(null);
  const [i, setReduceIndex] = useState(null);
//   const [reduceString, setReduceString] = useState("Before Map");
  const visualize = (accumFromReduce, item, index) => {
    let clonedAccumFromReduce =
      typeof accumFromReduce === "object"
        ? Array.isArray([])
          ? [...accumFromReduce]
          : { ...accumFromReduce }
        : accumFromReduce;
    setInReduce(true);
    setTimeout(() => {
      setCurrentItem(item);
      setAccumValue(clonedAccumFromReduce);
      setReduceIndex(index);
      if (index === array.length - 1) {
        // setInReduce(false);
        setReduceIndex(array.length);
      }
    }, index * 1000);
  };
  // End visualize code
  return { visualize, currentItem, accumValue, setAccumValue, i };
};

export default useVisualize
// visualize(charAccum, char, index);
