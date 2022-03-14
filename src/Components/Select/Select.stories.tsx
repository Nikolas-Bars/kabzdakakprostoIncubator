import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import SelectInputComp from "./Select";
import {SelectChangeEvent} from "@mui/material";


let items = [
    {title: 'dfa', value: 1},
    {title: 'werwe', value: 2},
    {title: 'sdf', value: 3},
    {title: 'xcvxcv', value: 4},
    {title: '56456', value: 5},
    {title: 'asd', value: 5},
    {title: 'cxzxc', value: 5},

]



export default {
    title: "Select",
    component: SelectInputComp
}

const callback = action("click")

export const SelectControlledComp = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setAge(event.target.value);
    };

    return <SelectInputComp age={age}  handleChange={handleChange} item={items} />

}



