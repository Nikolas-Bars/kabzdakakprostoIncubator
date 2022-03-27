import React, {useCallback, useMemo, useState} from "react";
import {SelectByDimytch} from "./SelectByDimych";
import {action} from "@storybook/addon-actions";

export default {
    title: "SelectWithMemo",
    component: SelectByDimytch
}



const SelectByDimytchMemo = React.memo(SelectByDimytch)

export const CityOfBelarus = () => {

    let [items, setItems] = useState([
        {title: 'Минск', city: 'Беларусь', value: '1'},
        {title: 'Ковров', city: 'Россия', value: '2'},
        {title: 'Владимир', city: 'Россия', value: '3'},
        {title: 'Казань', city: 'Россия', value: '4'},
        {title: 'Магнитогорск', city: 'Россия', value: '5'},
        {title: 'Челябинск', city: 'Россия', value: '6'},
        {title: 'Могилев', city: 'Беларусь', value: '7'},

    ])

    const [value, setValue] = useState('2')
    const [count, setCount] = useState(0)

    const changeValue = useCallback((newValue:string) => {
        setValue(newValue)
    }, [value])


    let itemsForRender = useMemo(()=>{
       return  items.filter(el => el.city === 'Беларусь')
    },[items])



    return <>
        <button onClick={()=>{setCount(count + 1)}} >{count}</button>
        <SelectByDimytchMemo onChange={changeValue} value={value} item={itemsForRender} />

    </>
}

export const CityWithMletter = () => {
    let [items, setItems] = useState([
        {title: 'Минск', city: 'Беларусь', value: '1'},
        {title: 'Ковров', city: 'Россия', value: '2'},
        {title: 'Владимир', city: 'Россия', value: '3'},
        {title: 'Казань', city: 'Россия', value: '4'},
        {title: 'Магнитогорск', city: 'Россия', value: '5'},
        {title: 'Челябинск', city: 'Россия', value: '6'},
        {title: 'Могилев', city: 'Беларусь', value: '7'},

    ])


    const [value, setValue] = useState('2')
    const [count, setCount] = useState(0)

    const changeValue = useCallback((newValue:string) => {
        setValue(newValue)
    }, [value])

    const AddMoscow = () => {
        setItems([...items, {title: 'Москва', city: 'Россия', value: '8'}])
        console.log(items)
    }

    let itemsForRender = useMemo(()=>{
        return  items.filter(el => el.title.toLowerCase().indexOf('м') > -1)
    },[items])





    return <>
        <button onClick={()=>{setCount(count + 1)}} >{count}</button>
        <button onClick={AddMoscow}>ADD MOSCOW</button>
        <SelectByDimytchMemo onChange={changeValue} value={value} item={itemsForRender} />

    </>
}

export const PopulationMoreTenMillion = () => {

    let [items, setItems] = useState([
        {title: 'Минск', city: 'Беларусь', value: '1', population: 11000000},
        {title: 'Ковров', city: 'Россия', value: '2', population: 10000},
        {title: 'Владимир', city: 'Россия', value: '3', population: 10000},
        {title: 'Казань', city: 'Россия', value: '4', population: 11000000},
        {title: 'Магнитогорск', city: 'Россия', value: '5', population: 10000},
        {title: 'Челябинск', city: 'Россия', value: '6', population: 10000},
        {title: 'Могилев', city: 'Беларусь', value: '7', population: 10000},

    ])


    const [value, setValue] = useState('2')
    const [count, setCount] = useState(0)

    const changeValue = useCallback((newValue:string) => {
        setValue(newValue)
    }, [value])

    const AddMoscow = () => {
        setItems([...items, {title: 'Москва', city: 'Россия', value: '8', population: 11000000}])
        console.log(items)
    }

    let itemsForRender = useMemo(()=>{
        return  items.filter(el => el.population > 10000000)
    },[items])





    return <>
        <button onClick={()=>{setCount(count + 1)}} >{count}</button>
        <button onClick={AddMoscow}>ADD MOSCOW</button>
        <SelectByDimytchMemo onChange={changeValue} value={value} item={itemsForRender} />

    </>
}


{/*// ОБЯЗАТЕЛЬНЫ ПРОБЕЛЫ  = () =>*/}


