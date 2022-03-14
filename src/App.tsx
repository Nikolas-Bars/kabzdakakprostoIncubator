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

/*function App() {

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
}*/


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



            {/*<UnControlledRating />*/}

            {/* <Accordeon title={'Menu'} collapsed={false} onChange={()=>{}}/>*/}


            {/*<OnOff on={switchOn} onChange={setSwitchOn} />*/}

            {/* <Rating value={3} />*/}
        </div>
    )


}

export default App;
