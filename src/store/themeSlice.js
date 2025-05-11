import {createSlice} from '@reduxjs/toolkit';
import {Toggle} from '@ui-kitten/components';

const initialState = {
  mood: 'dark',
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    ToggleMood: (state, action) => {
      state.mood = state.mood === 'dark' ? 'light' : 'dark';
    },
  },
});
export const { ToggleMood} = themeSlice.actions;
export default themeSlice.reducer;
