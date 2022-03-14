import React, {useState} from "react";

type PropsType ={
    onChange: (value: boolean)=> void
}




const UncontrolledOnOff =(props: PropsType)=>{

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block'


    }

    const offStyle = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red',
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
        backgroundColor: on ? 'green' : 'red',
    }

    const OnClicked =()=>{
        setOn(true)
    }
    const OffClicked =()=>{
        setOn(false)
    }





    return (
        <div>
            <div style={onStyle} onClick={OnClicked}>On</div>
            <div style={offStyle} onClick={OffClicked}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}

export default UncontrolledOnOff