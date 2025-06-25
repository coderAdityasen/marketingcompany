import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/reducers';


export const store = configureStore({
    reducer: userReducer
})