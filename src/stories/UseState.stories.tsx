import React, {useMemo, useState} from 'react'

export default {
    title: 'useStateDemo'
}

 function generateData(): number{
     console.log('123')
     return 1000
 }

export const Example1 = () => {

    console.log('Example1')

    //const initValue = useMemo(generateData, [])

    const [count, setCount] = useState<number>(generateData)

    const changer =(state: number)=>{
        return state * 2
    }

    return (
        <>
            <button onClick={()=>{setCount(changer)}}>COUNT: {count}</button>
        </>
    )
}