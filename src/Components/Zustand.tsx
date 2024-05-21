import React from "react";
import { useCounter } from "../Util/Zustand";

export default function ZustandPage() {

    const { count, increase } = useCounter();

    const onClick = () => {
        increase();
    }
    return (
        <React.Fragment>
            <button onClick={onClick}>button</button>
            <div>{count}</div>
        </React.Fragment>
    )
}