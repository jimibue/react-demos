import {useState} from 'react'
import DemoContainer from '../../DemoContainer'


const Demo1 = (props)=>{
    const originalData = [10,20,30,4,5]
    const click1 = ()=>{
       let y = sample()
       alert(originalData[y])
    }

    const sample = ()=>{
        const randomIndex = Math.floor(Math.random() * originalData.length)
        return originalData[randomIndex]
    }

    return (
        <DemoContainer header='Filter Example' code={Demo1Code} markdown={filterMarkdown}>
            {/* No Value */}
            <button onClick={click1}>click1</button>
        </DemoContainer>
    )
}
export default Demo1

export const Demo1Code=`import DemoContainer from '../../DemoContainer'


const Demo1 = (props)=>{
    const originalData = [1,2,3,4,5]
    const click1 = ()=>{
       let y = sample()
       alert(originalData[y])
    }

    const sample = ()=>{
        const randomIndex = Math.floor(Math.random() * originalData.length)
        return originalData[randomIndex]
    }

    return (
        <DemoContainer header='Filter Example' code={Demo1Code} markdown={filterMarkdown}>
            {/* No Value */}
            <button onClick={click1}>click1</button>
        </DemoContainer>
    )
}
export default Demo1`



