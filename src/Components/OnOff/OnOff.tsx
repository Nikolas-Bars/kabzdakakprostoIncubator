import React, {useState} from "react";

export type onOffPtopsType ={
    on?: boolean
    setOn: (on: boolean)=>void
}




const OnOff =(props: onOffPtopsType)=>{



    const OnClickSetOn =()=>{
        props.setOn(true)
    }
    const OnClickSetOff =()=>{
        props.setOn(false)
    }

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'white',
        display: 'inline-block'


    }

    const offStyle = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        backgroundColor: props.on ? 'white' : 'red',
        display: 'inline-block'

    }

    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '7px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={OnClickSetOn}>On</div>
            <div style={offStyle} onClick={OnClickSetOff}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}

export default OnOff