import React from "react";

type AccordeonPropsType = {
    title: string
    collapsed: boolean
}

function Accordeon(props: AccordeonPropsType) {
    console.log("Accordeon is Rendering")

    return <div>
        <div><AccordeonTitle title={props.title}/></div>
        {!props.collapsed && <div><AccordeonBody/></div>}
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

export default Accordeon