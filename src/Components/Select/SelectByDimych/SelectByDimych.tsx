

import s from './SelectByDimych.module.css'
import {useState, KeyboardEvent, useEffect} from "react";

export type Itemtype = {
    title: string
    value: any
}


export type SelectByDimytchPropsType ={
    value?: any
    onChange: (newValue: any)=> void
    item: Itemtype[]
}

export function SelectByDimytch(props: SelectByDimytchPropsType) {


    const [active, setActive] = useState(true)
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value)








    const selectItem = props.item.find(el => el.value === props.value)
    const hoveredItem = props.item.find(el => el.value === hoveredElementValue)


    const toggleItems =()=>{
        setActive(!active)
    }

    useEffect(()=>{sethoveredElementValue(props.value)}, [props.value])

    const onItemClicked = (value:string) => {
        props.onChange(value)
        setActive(!active)
    }

    const onKeyUp =(e: KeyboardEvent<HTMLDivElement>)=>{
      if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
        for(let i = 0; i<props.item.length; i++){
            if(props.item[i].value === hoveredElementValue){

         const pretendentElement = e.key === 'ArrowDown' ? props.item[i+1] : props.item[i-1]
                if(pretendentElement){
                    props.onChange(pretendentElement.value)
                    return
                }
            }
        }


        if(!selectItem) {
            props.onChange(props.item[0].value)
        }


    }

      if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
      }
    }





    return (
        <div>

            <select>
                <option value=''>Minsk</option>
                <option value=''>Moscow</option>
                <option value=''>Kiev</option>
            </select>


            <div className={s.select}  onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>

                {active &&
                <div className={s.items}>
                    {props.item.map(el => <div

                        onMouseEnter={()=>{sethoveredElementValue(el.value)}}
                        className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                        onClick={()=>{onItemClicked(el.value)}} key={el.value}>{el.title}</div>)}
                </div>
                }

            </div>
        </div>
    )
}