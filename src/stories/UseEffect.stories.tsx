import React, {useEffect, useState} from 'react'


export default {
    title: 'useEffectDemo'
}

export const SimpleExample = () => {
    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)



/*    useEffect(()=>{
        console.log('every render')
        document.title = count.toString()
    }) // every render*/

/*    useEffect(()=>{
        console.log('only first render')

    }, [])*/


    useEffect(()=>{
        console.log('only count changing')
        document.title = count.toString()
    }, [count])


    return (
        <div>
            Hello, {count}
            <button onClick={()=>{setCount(count + 1 )}}>+++</button>
            <button onClick={()=>{setFake(fake + 1 )}}>Fake</button>
        </div>
    )


}

export const SetTimeOutExample = () => {
    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)





    useEffect(()=>{

        setTimeout(()=>{
            console.log('changed title')
            document.title = count.toString()
        }, 3000)

    }, [count])


    return (
        <div>
            SetTimeOutExample, {count}
            <button onClick={()=>{setCount(count + 1 )}}>+++</button>
            <button onClick={()=>{setFake(fake + 1 )}}>Fake</button>
        </div>
    )


}

export const SetIntervalExample = () => {
    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(false)





    useEffect(()=>{

        setInterval(()=>{
            console.log('setInterval')
            setCount((state)=> state + 1)
        }, 1000)

    },[])


    return (
        <div>
            COUNT: {count}
            <button onClick={()=>{setFake(!fake)}}>Fake</button>
        </div>
    )


}