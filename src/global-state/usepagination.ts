import { create } from 'zustand'

type State = {
    pagination_data: object
}

type Action = {
    updatePagination: (pagination_data: State['pagination_data']) => void
}

// Create your store, which includes both state and (optionally) actions
const usePaginationStore = create<State & Action>((set) => ({
    pagination_data: {}, 
    updatePagination: (pagination_data) => set(() => ({ pagination_data: pagination_data })), 
}))

export default usePaginationStore