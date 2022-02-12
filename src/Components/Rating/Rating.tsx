import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    console.log("Rating is rendering")

    let [raiting, setRaiting] = useState(0)

    const buttonRaiting1 =()=>{
        setRaiting(1)
    }

    const buttonRaiting2 =()=>{
        setRaiting(2)
    }
    const buttonRaiting3 =()=>{
        setRaiting(3)
    }
    const buttonRaiting4 =()=>{
        setRaiting(4)
    }
    const buttonRaiting5 =()=>{
        setRaiting(5)
    }



 return (
     <div>
         <button onClick={buttonRaiting1}>1</button>
         <button onClick={buttonRaiting2}>2</button>
         <button onClick={buttonRaiting3}>3</button>
         <button onClick={buttonRaiting4}>4</button>
         <button onClick={buttonRaiting5}>5</button>


         <Star selected={raiting > 0}/>
         <Star selected={raiting > 1}/>
         <Star selected={raiting > 2}/>
         <Star selected={raiting > 3}/>
         <Star selected={raiting > 4}/>
     </div>
 )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star is rendering")
    if(props.selected){
       return <span><b>Star </b></span>
    }else{
       return <span>Star </span>
    }
}

export default Rating