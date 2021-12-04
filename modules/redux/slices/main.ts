import { createSlice /*, PayloadAction */ } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface InitState {
    isSomehting: boolean
}
export const mainSlice = createSlice({
    name: 'main',
    initialState: <InitState>{
        isSomehting: false,
    },
    reducers: {
        storeToggleSomething: (state) => {
            state.isSomehting = !state.isSomehting
        },
    },
})

const mainSelector = (state: RootState) => state.main

// Action creators are generated for each case reducer function
export const { storeToggleSomething } = mainSlice.actions

// Export selectors:
export { mainSelector }

export default mainSlice.reducer
