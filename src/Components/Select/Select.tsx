import React, {ChangeEvent, useState} from "react";
import {RaitingValuesType} from "../../App";
import {FormControl, InputLabel, MenuItem, SelectChangeEvent} from "@mui/material";
import Select from '@mui/material/Select';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: RaitingValuesType
    handleChange: (event: SelectChangeEvent<string>)=> void
    item: ItemType[]
    age: string
}

function SelectInputComp(props: SelectPropsType) {


    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.age}
                    label="Age"
                    onChange={props.handleChange}
                >
                    {props.item.map((el, index)=> {
                        return <MenuItem key={index} value={el.value}>{el.title}</MenuItem>
                    })}

                </Select>
            </FormControl>
        </div>
    )

}

export default SelectInputComp