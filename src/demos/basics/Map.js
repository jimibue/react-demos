import {useState} from 'react'
import DemoContainer from '../DemoContainer'


const Map = (props)=>{
    const originalData = [1,2,3,4,5]
    const [dataState, setDataState] = useState(originalData)
    const mapData = ()=>{
        setDataState(dataState.map(d => d * 2))  
    }
    return (
        <DemoContainer header='Map Example' code={MapCode}>
            <button onClick={mapData}>map</button>
            <hr />
            <p>originalData</p>
            {JSON.stringify(originalData)}
            <hr />
            <p>dataState</p>
            {JSON.stringify(dataState)}
        </DemoContainer>
    )
}
export default Map

export const MapCode=`//
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