import { create } from 'zustand'

type State = {
    tnx: object
}

type Action = {
    setTnxData: (tnx: State['tnx']) => void
}

// Create your store, which includes both state and (optionally) actions
const useTnxStore = create<State & Action>((set) => ({
    tnx: {}, 
    setTnxData: (tnx) => set(() => ({ tnx: tnx })), 
}))

export default useTnxStore