import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        users: [],
        anyUserLoggedIn: false,
        errorMsg: ''
    },
    reducers: {
        registerUser(state, action){
            if(state.anyUserLoggedIn){
                state.errorMsg = 'There is a user already logged in. Please first log out and then register.';
            }
            else{
                const user = action.payload;
                const existingUser = state.users.find(currentUser => currentUser.username === user.username);

                if(existingUser){
                    state.errorMsg = 'This username is already registered. Please type in another username, or sign in instead with this username';
                }
                else{
                    state.errorMsg = '';
                    state.users.push({
                        username: user.username,
                        password: user.password
                    });
                }   
            }
        },
        signInUser(state, action){
            if(state.anyUserLoggedIn){
                state.errorMsg = 'There is a user already logged in. Please first log out and then sign in with another username.';
            }
            else{
                const user = action.payload;
                const existingUser = state.users.find(currentUser => currentUser.username === user.username);

                if(!existingUser){
                    state.errorMsg = 'This username is not registered. Please register first and then sign in.';
                }
                else{
                    if(existingUser.username === user.username && existingUser.password === user.password){
                        state.anyUserLoggedIn = true;
                        state.errorMsg = '';
                    }
                    else{
                        state.errorMsg = 'Wrong credentials. Please check the password.';
                    }
                }
            }
        },
        logOutUser(state){
            state.anyUserLoggedIn = false;
            state.errorMsg = '';
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;