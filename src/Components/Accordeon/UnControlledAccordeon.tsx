import React, {useState} from "react";

type UnControlledAccordeon = {
    title?: string
    collapsed?: boolean
}

function UnControlledAccordeon(props: UnControlledAccordeon) {
    console.log("Accordeon is Rendering")

    let [collapsed, setCollapsed] = useState(true)

    let onClickSetCollapsedFalse =()=>{
        setCollapsed(false)
    }
    let onClickSetCollapsedTrue =()=>{
        setCollapsed(true)
    }



    return <div>
        <div>{collapsed ? <button onClick={onClickSetCollapsedFalse}>Скрыть</button> :  <button onClick={onClickSetCollapsedTrue}>показать</button>}<AccordeonTitle title={props.title}/></div>
        {collapsed && <div><AccordeonBody/></div>}
    </div>
}


function AccordeonTitle(props: any) {
    console.log("AccordeonTitle is Rendering")
    return <h3>{props.title}</h3>

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