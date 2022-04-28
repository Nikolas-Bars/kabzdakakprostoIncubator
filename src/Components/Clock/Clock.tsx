import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClock";
import {DigitalViewClock} from "./DigitalClock";

type PropsType = {
    mode: 'digital' | 'analog'
}

export const get2number =(number: number)=> number < 10 ? '0' + number : number

const Clock: React.FC<PropsType> = (props) => {

    const [date, setNewDate] = useState(new Date())

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setNewDate(new Date())
        }, 1000)
            return ()=>{
            clearInterval(intervalID)
        }
    },[])

    console.log('tick')



    let view;

    if(props.mode === "digital"){
        view = <DigitalViewClock date={date}/>
    }else{
        view = <AnalogClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};

export default Clock


export type DigitalPropsType = {
    date: Date
}



