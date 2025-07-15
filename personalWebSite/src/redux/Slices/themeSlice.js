import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const themaSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    handleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { handleMode } = themaSlice.actions;
export default themaSlice.reducer;
