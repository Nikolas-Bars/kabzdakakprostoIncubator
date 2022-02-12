import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    console.log("Rating is rendering")

    let [raiting, setRaiting] = useState(0)

    const buttonRaiting1 = () => {
        setRaiting(1)
    }

    const buttonRaiting2 = () => {
        setRaiting(2)
    }
    const buttonRaiting3 = () => {
        setRaiting(3)
    }
    const buttonRaiting4 = () => {
        setRaiting(4)
    }
    const buttonRaiting5 = () => {
        setRaiting(5)
    }


    return (
        <div>
            <button onClick={buttonRaiting1}>1</button>
            <button onClick={buttonRaiting2}>2</button>
            <button onClick={buttonRaiting3}>3</button>
            <button onClick={buttonRaiting4}>4</button>
            <button onClick={buttonRaiting5}>5</button>


            <Star raiting={raiting} button={buttonRaiting1} selected={raiting > 0}/>
            <Star raiting={raiting} button={buttonRaiting2} selected={raiting > 1}/>
            <Star raiting={raiting} button={buttonRaiting3} selected={raiting > 2}/>
            <Star raiting={raiting} button={buttonRaiting4} selected={raiting > 3}/>
            <Star raiting={raiting} button={buttonRaiting5} selected={raiting > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    button: () => void
    raiting: number
}


function Star(props: StarPropsType) {

    let divStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid gray',
        padding: '5px',
        margin: '5px',
        alignContent: 'center',
        borderRadius: '15px',
        backgroundColor: 'gold'
    }

    let divStyle1 = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        border: '1px solid gray',
        padding: '5px',
        margin: '5px',
        alignContent: 'center',
        borderRadius: '15px',
        backgroundColor: 'gray'
    }

    console.log("Star is rendering")
    if (props.selected) {
        return <div style={divStyle} onClick={props.button}><span ><b>Star </b></span></div>
    } else {
        return <div style={divStyle1} onClick={props.button}><span>Star </span></div>
    }
}

export default Rating