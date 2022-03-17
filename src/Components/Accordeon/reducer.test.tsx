import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";


test('collapsed should be true', ()=>{


    let state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
    expect(newState).not.toBe(state)

})

test('collapsed should be false', ()=>{


    let state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
    expect(newState).not.toBe(state)

})

test('expect error', ()=>{


    let state: StateType = {
        collapsed: true
    }

    expect(()=>{
        reducer(state, {type: "FAKE ACTION"})
    }).toThrowError() // ожидаем ошибку


})