import { create } from "zustand"

type counterType = {
    count: number,
    increase: () => void
}

export const useCounter = create<counterType>()((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 }))
}))