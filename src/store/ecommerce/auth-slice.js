import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        users: [],
        anyUserLoggedIn: false,
        userRegistering: {
            hasError: false,
            msg: ''
        },
        userSigningIn: {
            hasError: false,
            msg: ''
        },
        userLoggingOut: {
            hasError: false,
            msg: ''
        }
    },
    reducers: {
        registerUser(state, action){
            if(state.anyUserLoggedIn){
                state.userRegistering.hasError = true;
                state.userRegistering.msg = 'There is a user already logged in. Please first log out and then register.';
            }
            else{
                const user = action.payload;
                const existingUser = state.users.find(currentUser => currentUser.username === user.username);

                if(existingUser){
                    state.userRegistering.hasError = true;
                    state.userRegistering.msg = 'This username is already registered. Please type in another username, or sign in instead with this username';
                }
                else{
                    state.userRegistering.hasError = false;
                    state.userRegistering.msg = '';
                    state.users.push({
                        username: user.username,
                        password: user.password
                    });
                }   
            }
        },
        signInUser(state, action){
            if(state.anyUserLoggedIn){
                state.userSigningIn.hasError = true;
                state.userSigningIn.msg = 'There is a user already logged in. Please first log out and then sign in with another username.';
            }
            else{
                const user = action.payload;
                const existingUser = state.users.find(currentUser => currentUser.username === user.username);

                if(!existingUser){
                    state.userSigningIn.hasError = true;
                    state.userSigningIn.msg = 'This username is not registered. Please register first and then sign in.';
                }
                else{
                    if(existingUser.username === user.username && existingUser.password === user.password){
                        state.anyUserLoggedIn = true;
                        state.userSigningIn.hasError = false;
                        state.userSigningIn.msg = '';
                    }
                    else{
                        state.userSigningIn.hasError = true;
                        state.userSigningIn.msg = 'Wrong credentials. Please check the password.';
                    }
                }
            }
        },
        logOutUser(state){
            state.anyUserLoggedIn = false;
            state.userLoggingOut.hasError = false;
            state.userLoggingOut.msg = '';
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;