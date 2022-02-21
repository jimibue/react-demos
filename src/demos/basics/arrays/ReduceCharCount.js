import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import HighlightedArray from "../../../components/HighlightedArray";
import DemoContainer from "../../DemoContainer";
const ReduceCharCount = () => {
  const [reduceIndex, setReduceIndex] = useState(null);
  const [charCountObj, setCharCountObj] = useState({});
  const [currentLetter, setCurrentLetter] = useState("");
  const [inReduce, setInReduce] = useState(false);
  const string = "abbcccddsdf";
  const stringArr = string.split("");
  // this code here is to help visualize what is going on in the
  // reduce method.  In a normal case it would not be needed
  const visualize = (charAccum, char, index) => {
    let clonedCharAccumValue = { ...charAccum };
    setInReduce(true);
    setTimeout(() => {
      setCurrentLetter(char);
      setCharCountObj(clonedCharAccumValue);
      setReduceIndex(index);
      if (index === stringArr.length - 1) {
        setInReduce(false);
        setReduceIndex(stringArr.length);
      }
    }, index * 1000);
    // End visualize code
  };
  const getCharCount = () => {
    const finalCharAccum = stringArr.reduce((charAccum, char, index) => {
      // first see if char is in our accum, if not add it with count 1
      if (charAccum[char]) {
        charAccum[char]++;
      } else {
        charAccum[char] = 1;
      }
      // call the helper to visual code, it is note needed for reduce to work
      visualize(charAccum, char, index);

      return charAccum;
    }, {}); // {} set the starting value sumAccum
    setCharCountObj(finalCharAccum);
  };

  const renderString = () => {
    return stringArr.map((s, i) => (
      <span
        style={{
          padding: "20px",
          border: "1px solid",
          fontSize: "18px",
          backgroundColor: i === reduceIndex ? "green" : "#ddd",
        }}
      >
        {s}
      </span>
    ));
  };
  return (
    <DemoContainer header="Reduce: Character Count" code={ReduceBasicCode}>
      <CopyBlock
        text={` 
const finalCharAccum = stringArr.reduce((charAccum, char, index) => {
// first see if char is in our accum, if not add it with count 1
if (charAccum[char]) {
    charAccum[char]++;
} else {
    charAccum[char] = 1;
}
return charAccum;
}, {}); // {} set the starting value sumAccum
setCharCountObj(finalCharAccum);
};
            `}
        language="javascript"
        showLineNumbers={true}
        //   startingLineNumber={props.startingLineNumber}
        wrapLines
        theme={dracula}
      />
      <p>{stringArr}</p>
      <p>{inReduce ? "Running Reduce" : "Not in Reduce"}</p>

      {inReduce && <p>current Letter: {currentLetter}</p>}
      <HighlightedArray highlightIndex={reduceIndex} array={stringArr}/>
      <p>Char Accum {JSON.stringify(charCountObj)}</p>
      <button disabled={inReduce} onClick={getCharCount}>
        {inReduce ? "in Reduce please wait" : "get char count"}
      </button>
    </DemoContainer>
  );
};

export default ReduceCharCount;

const ReduceBasicCode = `import {useState} from 'react'
import DemoContainer from '../../DemoContainer'
const ReduceCharCount = ()=>{
    const [reduceIndex, setReduceIndex] = useState(null)
    const [charCountObj, setCharCountObj] = useState({})
    const [currentLetter, setCurrentLetter] = useState('')
    const [inReduce, setInReduce] = useState(false)
    const string = 'abbcccddsdf'
    const stringArr = string.split('')
    const visualize = (charAccum, char,index)=>{
            // this code here is to help visualize what is going on in the 
            // reduce method. 
            let clonedCharAccumValue = {...charAccum}
            setInReduce(true)
            setTimeout(()=>{
             setCurrentLetter(char)
             setCharCountObj(clonedCharAccumValue)
             setReduceIndex(index)
             if(index === stringArr.length -1){
                setInReduce(false)
                setReduceIndex(stringArr.length)
             }
            },index * 1000)
            // End visualize code
    }
    const getCharCount =()=>{
        const finalCharAccum = stringArr.reduce((charAccum, char,index)=>{

            // first see if char is in our accum, if not add it with count 1
            if(charAccum[char]){
                charAccum[char]++
            } else{
                charAccum[char] = 1
            }
            // this is a helper to visual code, it is note needed for reduce to work
            visualize(charAccum, char,index)

            return charAccum
        },{})// {} set the starting value sumAccum
        setCharCountObj(finalCharAccum)
    }

    const renderString =()=>{
       return stringArr.map((s,i)=>  <span style={{padding:'20px', border:'1px solid', fontSize:'18px',backgroundColor: i === reduceIndex ? 'green':'#ddd'}}>{s}</span>)
    }
    return (
        <DemoContainer header='Reduce: Character Count' code={ReduceBasicCode}>
            <p>{stringArr}</p>
            <p>{inReduce ? 'Running Reduce': 'Not in Reduce'}</p>
            
            {inReduce && <p>current Letter: {currentLetter}</p>}
            <div style={{margin:'30px'}}>{renderString()}</div>
            <p>Char Accum {JSON.stringify(charCountObj)}</p>
            <button disabled={inReduce} onClick={getCharCount}>{inReduce ?'in Reduce please wait':'get char count'}</button>
        </DemoContainer>
    )
}

export default ReduceCharCount`;
