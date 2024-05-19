import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        orderTotal: 0
    },
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.orderTotal += newItem.price;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    url: newItem.url,
                    product: newItem.product,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price 
                });
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            if(existingItem){
                state.orderTotal -= existingItem.price;
                if(existingItem.quantity === 1){
                    state.items = state.items.filter(item => item.id !== id);
                }
                else{
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                }  
            }  
        },
        sendItemToTrash(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            state.orderTotal -= existingItem.totalPrice;
            state.items = state.items.filter(item => item.id !== id);
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;