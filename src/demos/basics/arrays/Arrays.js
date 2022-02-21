import Map from "../Map"
import Filter from "./Filter"
import ReduceBasic from "./ReduceBasic"
import ReduceCharCount from "./ReduceCharCount"

const Arrays = (props)=>{
    return (
        <div style={{flex:1}}>
            <p>Arrays</p>
            <Map />
            <Filter />
            <ReduceBasic />
            <ReduceCharCount />
        </div>
    )
}

export default Arrays