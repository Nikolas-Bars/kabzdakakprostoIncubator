import React from "react";
import { action } from "@storybook/addon-actions";
import UncontrolledOnOff from "./UncontrolledOnOff";


export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff
}

const callback = action('on or off')

export const OnMode  = () => <UncontrolledOnOff onChange={callback} />
export const OffMode = () => <UncontrolledOnOff onChange={callback} />
export const BugMode = () => <div>Unsync when change defaultValue</div>
