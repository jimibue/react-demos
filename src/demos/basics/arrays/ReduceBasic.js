import {useState} from 'react'
import DemoContainer from '../../DemoContainer'
const ReduceBasic = ()=>{
    const [sum, setSum] = useState(0)
    let arr = [1,2,3,4,5]
    const getSum =()=>{
        const finalSumValue = arr.reduce((sumAccum, num,i)=>{
            // this return becomes 'sumAccum' in the next function call
            // console.log('num:', num)
            // console.log('sumAccum:', sumAccum)
            setTimeout(()=>{
             console.log('num:', num)
             console.log('sumAccum:', sumAccum)
             console.log('adding sumAccum + num = ', num+sumAccum)
            },i * 1000)
            return sumAccum + num
        },0)// 0 set the starting value sumAccum
        // setSum(finalSumValue)
        setSum(finalSumValue) //cheating
    }
    return (
        <DemoContainer header='Reduce: Add up sum' code={ReduceBasicCode}>
            <p>Sum {sum}</p>
            <button onClick={getSum}>get sum of {JSON.stringify(arr)}</button>
        </DemoContainer>
    )
}

export default ReduceBasic

const ReduceBasicCode = `//
import {useState} from 'react'
import DemoContainer from '../../DemoContainer'
const ReduceBasic = ()=>{
    const [sum, setSum] = useState(0)
    let arr = [1,2,3,4,5]
    const getSum =()=>{
        const finalSumValue = arr.reduce((sumAccum, num)=>{
            // this return becomes 'sumAccum' in the next function call
            // console.log('num:', num)
            // console.log('sumAccum:', sumAccum)
            return sumAccum + num
        },0)// 0 set the starting value sumAccum
        setSum(finalSumValue)
    }
    return (
        <DemoContainer title='Reduce: Add up sum'>
            <p>Sum {sum}</p>
            <button onClick={setSum}>get sum of {JSON.stringify(arr)}</button>
        </DemoContainer>
    )
}

export default ReduceBasic`