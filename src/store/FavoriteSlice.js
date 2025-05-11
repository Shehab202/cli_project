import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const initialState = {
  favorites: [],
};
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const item = action.payload;
      const isExist = state.favorites.some(e => e.id === item.id);
      if (!isExist) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      const item = action.payload;
      state.favorites = state.favorites.filter(el => el.id !== item.id);
    },removeAllFavorite:(state,action)=>{
      state.favorites=[]
    }
  },
});
export default favoriteSlice.reducer;
export const {addToFavorite, removeFromFavorite,removeAllFavorite} = favoriteSlice.actions;
