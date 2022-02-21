import {useState} from 'react'
import DemoContainer from '../../DemoContainer'


const Filter = (props)=>{
    const originalData = [1,2,3,4,5]
    const [dataState, setDataState] = useState(originalData)
    const filterData = ()=>{
        setDataState(dataState.filter(d => d > 2))  
    }
    return (
        <DemoContainer header='Filter Example' code={FilterCode} markdown={filterMarkdown}>
            <button onClick={filterData}>filter</button>
            <hr />
            <p>originalData</p>
            {JSON.stringify(originalData)}
            <hr />
            <p>dataState</p>
            {JSON.stringify(dataState)}
        </DemoContainer>
    )
}
export default Filter

export const FilterCode=`//
import {useState} from 'react'
const Map = (props)=>{
    const originalData = [1,2,3,4,5]
    const [dataState, setDataState] = useState(originalData)
    const mapData = ()=>{
        setDataState(dataState.map(d => d+ '!'))  
    }
    return (
        <div>
            <button onClick={mapData}>map</button>
            <hr />
            <p>originalData</p>
            {JSON.stringify(originalData)}
            <hr />
            <p>dataState</p>
            {JSON.stringify(dataState)}
        </div>
    )
}
export default Map`



const filterMarkdown = `
## Filter Readme

> todo: all about filter

filter takes a function that returns a boolean if that boolean returns true keep it

yo
`;