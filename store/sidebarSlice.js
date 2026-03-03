import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    expanded: false,
    mobileOpen: false,
  },
  reducers: {
    setExpanded(state, action) {
      state.expanded = action.payload;
    },
    setMobileOpen(state, action) {
      state.mobileOpen = action.payload;
    },
  },
});

export const { setExpanded, setMobileOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
