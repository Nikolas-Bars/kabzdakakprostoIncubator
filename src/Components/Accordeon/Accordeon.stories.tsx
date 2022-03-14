import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordeon from "./Accordeon";


let items = [
    {title: 'dfa', value: 1},
    {title: 'werwe', value: 2},
    {title: 'sdf', value: 3},
    {title: 'xcvxcv', value: 4},
    {title: '56456', value: 5},

]



export default {
    title: "Accordeon",
    component: Accordeon
}

const callbackItemClick = action("clickItem")
const callback = action("click")

export const MenuCollapsedMode = () => <Accordeon items={items} collapsed={true} title={'menu'} onClick={callbackItemClick} onChange={callback}/>
export const UsersUnCollapsedMode = () => <Accordeon items={items} collapsed={false} onClick={callbackItemClick} title={'users'} onChange={callback}/>


export const ModeChanging = () => {

    const [value, setValue] = useState(true)

    const onChange = () =>{
debugger
        setValue(!value)
    }

    return  <Accordeon items={items} collapsed={value} title={'menu'} onChange={onChange}
    onClick={(id)=>{alert(`user with id ${id} should be happy`)}}
    />


}