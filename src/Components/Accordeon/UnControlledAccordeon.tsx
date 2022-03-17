import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type UnControlledAccordeonPropsType = {
    titleValue: string

}


function UnControlledAccordeon(props: UnControlledAccordeonPropsType) {
    console.log("Accordeon is Rendering")


    //let [collapsed, setCollapsed] = useState(false)

    let [collapsed, dispatch] = useReducer(reducer, {collapsed: false})

    let onClickHandler = () => {

        dispatch({type: TOGGLE_COLLAPSED})
        console.log(collapsed)
    }

    return <div>
        <AccordeonTitle title={props.titleValue} onClick={onClickHandler}/>
        {!collapsed.collapsed && <AccordeonBody/>}
    </div>
}

/*
    let [collapsed, setCollapsed] = useState(true)

    let onClickSetCollapsedFalse =()=>{
        setCollapsed(false)
    }
    let onClickSetCollapsedTrue =()=>{
        setCollapsed(true)
    }
*/

type AccordeonTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log("AccordeonTitle is Rendering")
    return (<h3 onClick={props.onClick}> {props.title} </h3>)

}

function AccordeonBody() {
    console.log("AccordeonBody is Rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

export default UnControlledAccordeon