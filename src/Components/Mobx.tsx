import { observer } from "mobx-react";
import React from "react";
import { Counter } from "../Util/Mobx";

const counter = new Counter();

export const Mobx = observer(({ counter }: any) => {
    const onClick = () => {
        counter.increase();
    }
    return (
        <React.Fragment>
            <button onClick={onClick}>button</button>
            <div>{counter.count}</div>
        </React.Fragment>
    )
})

export function MobxPage() {
    return (
        <Mobx counter={counter} />
    )
}
