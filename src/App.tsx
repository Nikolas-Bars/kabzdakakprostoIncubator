import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordeon from "./Components/Accordeon/Accordeon";
import Rating from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UnControlledAccordeon from "./Components/Accordeon/UnControlledAccordeon";

function App() {

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

           {/* <Accordeon title={"Menu"} collapsed={false}/>
            <Accordeon title={"Users"} collapsed={false}/>*/}
        <UnControlledAccordeon title={"Menu"}/>
            <UnControlledAccordeon title={"Users"}/>
            <Rating value={1}/>
            <Rating value={3}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle is rendering")
    return <h1>{props.title}</h1>
}

export default App;
