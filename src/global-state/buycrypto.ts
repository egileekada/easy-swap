import { create } from 'zustand'

type State = {
    crypto: object
}

type Action = {
    updateCrypto: (crypto: State['crypto']) => void
}

// Create your store, which includes both state and (optionally) actions
const useCryptoStore = create<State & Action>((set) => ({
    crypto: {}, 
    updateCrypto: (crypto) => set(() => ({ crypto: crypto })), 
}))

export default useCryptoStore