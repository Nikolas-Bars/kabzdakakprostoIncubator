import React from "react";
import {DigitalPropsType, get2number} from "./Clock";

export const DigitalViewClock: React.FC<DigitalPropsType> = ({date}) => {
    return (
        <>
            <span>{get2number(date.getHours())}</span>
            :
            <span>{get2number(date.getMinutes())}</span>
            :
            <span>{get2number(date.getSeconds())}</span>
        </>
    )
}