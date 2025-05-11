import {configureStore} from '@reduxjs/toolkit';
import favoriteSlice from './FavoriteSlice';
import themeSlice from './themeSlice';
const store = configureStore({
  reducer: {
    favoriteSlice,
    themeSlice,
  },
});
export default store;
