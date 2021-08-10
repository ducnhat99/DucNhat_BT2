import { configureStore } from '@reduxjs/toolkit'
import listTaskSlice from '../listTask/listTaskSlice'
export default configureStore({
    reducer: {
        listTask: listTaskSlice
    }
})