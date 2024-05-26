import { configureStore } from '@reduxjs/toolkit';
import authSlice from './ecommerce/auth-slice';
import cartSlice from './ecommerce/cart-slice';
import favoriteSlice from './ecommerce/favorite-slice';

const store = configureStore({
    reducer: { auth: authSlice.reducer, cart: cartSlice.reducer, favorite: favoriteSlice.reducer }
});

export default store;