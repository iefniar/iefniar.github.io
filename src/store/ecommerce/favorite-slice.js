import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favItems: []
    },
    reducers: {
        addOrRemoveItemFromFavorites(state, action){
            const id = action.payload;
            const existingItem = state.favItems.find(item => item.id === id);

            if(!existingItem){
                state.favItems.push({
                    id
                });
            }
            else{
                state.favItems = state.favItems.filter(item => item.id !== id);
            }
        },
        emptyFavorites(state){
            state.favItems = [];
        }
    }
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;