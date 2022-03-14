import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'UncontrolledInput',
} as ComponentMeta<any>;

export const Uncontrolled: ComponentStory<any> = () => <input/>

export const TrackValueOfUncontrolled: ComponentStory<any> = () => {

    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let NewValue = e.currentTarget.value
        setValue(NewValue)
    }

    return <>
        <input value={value} onChange={onChange}/>{value}
    </>
}

export const GetValueOfUncontrolled: ComponentStory<any> = () => { ///////////// третий вариант, но ссылок лучше избегать

    const [value, setValue] = useState<any>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return <>
        <input ref={inputRef}/>
        <button onClick={save}> sa ve</button>
        - actual value: {value}
    </>
}


export const ControlledInput = () =>{

   let [parrentValue, setParrenValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setParrenValue(e.currentTarget.value)
    }

    return <input value={parrentValue} onChange={onChange}/>
}



export const ControlledCheckbox = () =>{

    let [parrentValue, setParrenValue] = useState(true)

    const onChange = () =>{
        setParrenValue(!parrentValue)
    }

 return <input type={'checkbox'} checked={parrentValue} onChange={onChange}/>
}



export const ControlledSelect = () =>{


    let [parrentValue, setParrenValue] = useState<string | undefined>("2")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) =>{
      setParrenValue(e.currentTarget.value)
        console.log(parrentValue)
    }

    return <select value={parrentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}











/*
export const GetValueOfUncontrolled: ComponentStory<any> = () => { ///////////////////// второй вариант

    const [value, setValue] = useState <any> ('')

    let text = ''

    return <>
        <input id={'inputID'}/>
        <button onClick={(e)=>{
            let el = document.getElementById('inputID') as HTMLInputElement
            setValue(el.value)
        }
        }>save</button> -actual value: {value}
    </> }
*/


/*
    export const GetValueOfUncontrolled: ComponentStory<any> = () => {       //////////////// первый вариант

        const [value, setValue] = useState <any> ('')

        let text = ''

        const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
            let newValue = e.currentTarget.value
            text = newValue
        }

    return <>
        <input onChange={onChangeValue}/> <button onClick={()=>{setValue(text)}}>save</button> -actual value: {value}
    </>
}
*/


export const Controlled: ComponentStory<any> = () => <input value={'value'}/>


