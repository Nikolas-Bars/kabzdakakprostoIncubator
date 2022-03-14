import React from "react";
import {stringify} from "querystring";

type ItemType = {
    title: string
    value: any
}

type AccordeonPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordeon(props: AccordeonPropsType) {
    console.log("Accordeon is Rendering")

    return <div>
        <div><AccordeonTitle onChange={props.onChange} title={props.title}/></div>
        {!props.collapsed && <div><AccordeonBody onClick={props.onClick} items={props.items}/></div>}
    </div>
}


type AccordeonTitlePropsType = {
    onChange: () => void
    title: string

}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>

}

type AccordeonBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordeonBody(props: AccordeonBodyPropsType) {
    console.log("AccordeonBody is Rendering")
    return <ul>
        {props.items.map((el, index) => <li key={index} onClick={()=>{props.onClick(el.value)}}>{el.title}</li>)}
    </ul>

}

export default Accordeon