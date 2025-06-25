import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	isadmin : false
}

export const userslice = createSlice({
    name: 'user',
    initialState,
    reducers: {
		changetoadmin : (state , action) => {
			state.isadmin = true;
		}
    }
})

export const {changetoadmin} = userslice.actions

export default userslice.reducer