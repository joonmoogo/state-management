import React from "react";
import { GlobalStateProvider, useGlobalState } from "../Util/Context"

export function Context() {
    const [state, setState] = useGlobalState();

    const onClick = () => {
        setState(state + 1)
    }
    return (
        <React.Fragment>
            <button onClick={onClick}>button</button>
            <div>{state}</div>
        </React.Fragment>
    )
}

export function ContextPage() {
    return (
        <div>
            <GlobalStateProvider>
                <Context />
            </GlobalStateProvider>
        </div>
    )
}