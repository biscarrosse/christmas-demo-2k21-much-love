// Redux:
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
// Slices:
import mainReducer from './slices/main'
// Libs:
import { logger } from 'redux-logger'

const store = configureStore({
    reducer: {
        main: mainReducer,
    },
    devTools: true,
    middleware: [logger],
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
