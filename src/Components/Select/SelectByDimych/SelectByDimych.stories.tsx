import React, {useState} from "react";
import {SelectByDimytch} from "./SelectByDimych";
import {action} from "@storybook/addon-actions";

export default {
    title: "SelectByDimytch",
    component: SelectByDimytch
}

let items = [
    {title: 'dfa', value: '1', city: 'минск'},
    {title: 'werwe', value: '2', city: 'минск'},
    {title: 'sdf', value: '3', city: 'минск'},
    {title: 'xcvxcv', value: '4', city: 'минск'},
    {title: '56456', value: '5', city: 'минск'},
    {title: 'asd', value: '6', city: 'минск'},
    {title: 'cxzxc', value: '7', city: 'минск'},

]
export const WithValue = () => {

    const [value, setValue] = useState('2')

    const changeValue = (newValue: string) => {

        setValue(newValue)
    }

    return <>
        <SelectByDimytch onChange={changeValue} value={value}
                         item={items}/> {/*// ОБЯЗАТЕЛЬНЫ ПРОБЕЛЫ  = () =>*/}

    </>
}


export const WithoutValue = () => {


    const [value, setValue] = useState(null)

    const changeValue = (newValue: any) => {

        setValue(newValue)
    }
    return <>
        <SelectByDimytch value={value} onChange={changeValue} item={items}/> {/*// ОБЯЗАТЕЛЬНЫ ПРОБЕЛЫ  = () =>*/}
    </>
}