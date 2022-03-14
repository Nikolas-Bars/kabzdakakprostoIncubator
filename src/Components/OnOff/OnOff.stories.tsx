import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import OnOff from "./OnOff";


export default {
    title: "OnOffControlled",
    component: OnOff
}

const callback = action("click")

export const OnModeControlled = () => <OnOff on={true} setOn={callback}/>
export const OffModeControlled = () => <OnOff on={false} setOn={callback}/>


export const ModeChanging = () => {

    let [on, setOn] = useState<boolean>(false)

     return <>
         <OnOff on={on} setOn={setOn}/>
     </>
}

















/*






import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    /!* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    *!/
    title: 'UncontrolledInputwrwefwfewfew',
    //component: input,
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


/!*
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
*!/


/!*
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
*!/


export const Controlled: ComponentStory<any> = () => <input value={'value'}/>


*/
