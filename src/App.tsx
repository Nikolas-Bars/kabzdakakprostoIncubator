import React from 'react';

const App = () => {
    return (
        <div>

        </div>
    );
};

export default App;



/*
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordeon from "./Components/Accordeon/Accordeon";
import Rating from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UnControlledAccordeon from "./Components/Accordeon/UnControlledAccordeon";
import UncontrolledOnOff from "./Components/OnOff/UncontrolledOnOff";


let items = [
    {title: 'dfa', value: 1},
    {title: 'werwe', value: 2},
    {title: 'sdf', value: 3},
    {title: 'xcvxcv', value: 4},
    {title: '56456', value: 5},

]

/!*function App() {

    let [buttonLight, setButtonLight] = useState<'light' | 'dark'>('light')



    const lightFunction =(value: any)=>{

        if(value === 'dark'){
            setButtonLight('dark')
            console.log(buttonLight)
        }else {
            setButtonLight('light')
            console.log(buttonLight)
        }
    }


    return (
        <div>
            <OnOff />
            <PageTitle title={'This is APP Component'}/>
            <PageTitle title={'My friends'}/>

           {/!* <Accordeon title={"Menu"} collapsed={false}/>
            <Accordeon title={"Users"} collapsed={false}/>*!/}
        <UnControlledAccordeon title={"Menu"}/>
            <UnControlledAccordeon title={"Users"}/>
            <Rating value={1}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle is rendering")
    return <h1>{props.title}</h1>
}*!/


export type RaitingValuesType = 1|2|3|4|5|6|7|8|9|10

function App(){

let [raitingValue, setRaitingValue] = useState<RaitingValuesType>(4)
let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(false)
let [switchOn, setSwitchOn] = useState<boolean>(false)



    return(
        <div>

            <Rating value={raitingValue} onClick={setRaitingValue}/>

            <Accordeon onClick={(id)=>{alert(`user with id ${id} should be happy`)}} items={items} title={'Menu'} collapsed={accordeonCollapsed} onChange={()=>{setAccordeonCollapsed(!accordeonCollapsed)}} />

            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}

            <UnControlledAccordeon  titleValue={'jopa'}/>



            {/!*<UnControlledRating />*!/}

            {/!* <Accordeon title={'Menu'} collapsed={false} onChange={()=>{}}/>*!/}


            {/!*<OnOff on={switchOn} onChange={setSwitchOn} />*!/}

            {/!* <Rating value={3} />*!/}
        </div>
    )


}

export default App;


/*
import React, {useCallback, useState} from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
    const [temp, setTemp] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const resetTemp = useCallback( () => setTemp(0),[])
    const increaseSeconds = () => setSeconds(seconds + 100)

    return (
        <>
            <TempDisplay temp={temp} reset={resetTemp}/>
            <div>
                <p><b>Секунды:</b> {seconds} с</p>
                <button onClick={increaseSeconds}>
                    Увеличить время на 100 секунд
                </button>
            </div>
        </>
    )
}

const TempDisplay = React.memo((props: any) => {
    console.log('Render TempDisplay')
    return (
        <div>
            <p><b>Температура</b>: {props.temp} &#176;</p>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
})

ReactDOM.render(<App/>, document.getElementById('root'))*/

//При увеличении времени (при клике на button) компонент TempDisplay
//тоже перерисовывается. Эта перерисовка является избыточной.
//Найдите в чем причина лишних перерисовок.
//Исправленную версию строки напишите в качестве ответа.

//Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)  ////  const resetTemp = useCallback( () => setTemp(0),[]) - верно!!!!!


/*import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
    const [temp, setTemp] = useState(100)
    const [seconds, setSeconds] = useState(0)

    const resetTemp = useCallback(() => setTemp(0), [])

    const incSec = useCallback(() => setSeconds(seconds + 1), [seconds])

    return <>
        <TempDisplay temp={temp} resetTemp={resetTemp}/>
        <SecDisplay seconds={seconds} incSec={incSec}/>
    </>
}
const TempDisplay = React.memo((props: any) => {
    console.log('Render TempDisplay')
    return (
        <div style={{marginBottom: '10px'}} onClick={props.reset}>
            <p>
                <b>Температура: </b>{props.temp} &#176;
            </p>
            <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
        </div>
    )
})

const SecDisplay = React.memo((props: any) => {
    console.log('Render SecDisplay')
    return (
        <div>
            <p><b>Секунды:</b> {props.seconds} c </p>
            <button style={{marginRight: '20px'}}
                    onClick={props.incSec}>
                Увеличить время на 1 секунду
            </button>
        </div>
    )
})

ReactDOM.render(<App/>, document.getElementById('root'))*/

// Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// Найдите в чем причина.
// Исправленную версию строки напишите в качестве ответа

// Пример ответа: const incSec = () => setSeconds(seconds + 1) /// const incSec = useCallback(() => setSeconds(seconds + 1), [seconds]) - верно!!!!!







////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



/*import React, {useCallback, useState} from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
    const [temp, setTemp] = useState(10)
    const [seconds, setSeconds] = useState(100)

    const increaseSeconds = () => setSeconds(seconds + 100)
    const increaseTemp = useCallback(()=>setTemp(temp+1), [temp])

    return <>
        <TempDisplay temp={temp} increaseTemp={increaseTemp}/>

        <div>
            <b>Секунды :</b> {seconds} с
            <button style={{marginLeft: '15px'}}
                    onClick={increaseSeconds}>
                Увеличить на 10 секунд
            </button>
        </div>
    </>
}
const TempDisplay = React.memo((props: any) => {
    console.log('Render TempDisplay')
    return (
        <div style={{marginBottom: '15px'}}
             onClick={props.reset}>
            <b>Температура:</b> {props.temp} &#176;
            <button style={{marginLeft: '15px'}}
                    onClick={props.increaseTemp}>
                Увеличить температуру на 1 градус
            </button>
        </div>
    )
})

ReactDOM.render(<App/>, document.getElementById('root'));*/

// Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
// 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
// 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"

// Пример ответа: useEffect(() => setCounter(count + 1), [count]) //////////////////////////// const increaseTemp = useCallback(()=>setTemp(temp+1), [temp]) - НЕВЕРНО!!! Нужно наверное просто написать так useCallback(()=>setTemp(temp+1), [temp])


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/*

import React, {useCallback, useMemo, useState} from 'react'
import ReactDOM from 'react-dom'

type ButtonType = {
    id: number
    title: string
    forAdminOnly: boolean
}
const buttons: ButtonType[] = [
    {id: 1, title: 'delete', forAdminOnly: true},
    {id: 2, title: 'update', forAdminOnly: true},
    {id: 3, title: 'create', forAdminOnly: false},
]

export const App = ({isAdmin}: { isAdmin: boolean }) => {

    const [seconds, setSeconds] = useState(0)

    const increaseSeconds = () => setSeconds(seconds + 10)

    const correctButtons = useMemo(() => {
        return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
    }, [buttons])

    return <>
        <ButtonsPanel buttons={correctButtons}/>
        <div>
            <p>
                <b>Секунды: {seconds}</b>
            </p>
            <button onClick={increaseSeconds}>
                Увеличить на 10 секунд
            </button>
        </div>
    </>
}

const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
    console.log('Render ButtonsPanel')
    return (
        <div style={{marginBottom: '15px'}}>
            <div style={{marginBottom: '15px'}}>
                <b>Панель с кнопками</b>
            </div>
            <div>
                {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
            </div>
        </div>
    )
})

ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))*/

// Что нужно написать вместо XXX и YYY,
// чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// при нажатии на кнопку "Увеличить на 10 секунд" ?

// Ответ дайте через пробел: 111 222   useCallback buttons - НЕВЕРНО //наверное правильно useMemo buttons