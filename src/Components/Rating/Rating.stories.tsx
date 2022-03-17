import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Rating from "./Rating";
import {RaitingValuesType} from "../../App";






export default {
    title: "Raiting Story",
    component: Rating
}

const callbackItemClick = action("clickItem")
const callback = action("click")

export const Raiting1 = () => <Rating value={1} onClick={()=>{action('click')}} />
export const Raiting2 = () => <Rating value={2} onClick={()=>{action('click')}} />
export const Raiting3 = () => <Rating value={3} onClick={()=>{action('click')}} />
export const Raiting4 = () => <Rating value={4} onClick={()=>{action('click')}} />
export const Raiting5 = () => <Rating value={5} onClick={()=>{action('click')}} />

export const RaitingChanging = () => {
    const [value, setValue] = useState<RaitingValuesType>(4)

    const onClickHandler = (value: RaitingValuesType) =>{
        setValue(value)
    }

    return <>
        <Rating value={value} onClick={onClickHandler}/>
    </>
}