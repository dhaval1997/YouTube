import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu:state=>{
      state.isMenuOpen = false;
    }
  },
});

export const { toggleMenu, closeMenu } = generalSlice.actions;
export default generalSlice.reducer;
