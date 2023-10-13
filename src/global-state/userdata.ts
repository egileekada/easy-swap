import { create } from 'zustand'

type State = {
    user: object
}

type Action = {
    setUserData: (user: State['user']) => void
}

// Create your store, which includes both state and (optionally) actions
const useUserStore = create<State & Action>((set) => ({
    user: {}, 
    setUserData: (user) => set(() => ({ user: user })), 
}))

export default useUserStore