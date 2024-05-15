import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { userIsLoggedIn: false},
    reducers: {
        toggle(state){
            state.userIsLoggedIn = !state.userIsLoggedIn;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;