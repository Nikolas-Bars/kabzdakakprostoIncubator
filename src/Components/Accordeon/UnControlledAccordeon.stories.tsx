import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import Accordeon from "./Accordeon";
import UnControlledAccordeon from "./UnControlledAccordeon";


let items = [
    {title: 'dfa', value: 1},
    {title: 'werwe', value: 2},
    {title: 'sdf', value: 3},
    {title: 'xcvxcv', value: 4},
    {title: '56456', value: 5},

]



export default {
    title: "UnControlledAccordeonStory",
    component: UnControlledAccordeon
}


export const UncontrolledMode = () => <UnControlledAccordeon titleValue={'User'}/>
