import React from "react";
import { Provider } from "react-redux";
import { increment } from "../Util/ReduxCounterSlice";
import { useAppSelector, useAppDispatch } from '../Util/ReduxHook'
import { store } from "../Util/ReduxStore";

export default function Redux() {

    const count: number = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(increment());
    }
    return (
        <React.Fragment>
            <button onClick={onClick}>button</button>
            <div>{count}</div>
        </React.Fragment>
    )
}

export function ReduxPage() {
    return (
        <Provider store={store}>
            <Redux />
        </Provider>
    )
}