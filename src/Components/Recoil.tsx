import { RecoilRoot, useRecoilState } from "recoil"
import { numberState } from "../Util/Recoil";
import React from "react";

export function Recoil() {
    const [state, setState] = useRecoilState(numberState);
    const onClick = () => {
        setState(state + 1);
    }
    return (
        <React.Fragment>
            <button onClick={onClick} >button</button>
            <div>{state}</div>
        </React.Fragment>
    )
}

export function RecoilPage() {
    return (
        <RecoilRoot>
            <Recoil />
        </RecoilRoot>
    )
}
