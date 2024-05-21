import { FC, ReactNode, createContext, useState, Dispatch, SetStateAction, useContext } from "react";

type ContextType = [number, Dispatch<SetStateAction<number>>];

const Context = createContext<ContextType | undefined>(undefined)

export const GlobalStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<number>(0);

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('no context');
    }
    return context;
}