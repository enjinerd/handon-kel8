import { createSlice } from "@reduxjs/toolkit";

const gifSlice = createSlice({
  name: "gifData",
  initialState: {
    gifData: []
  },
  reducers: {
    addGif: (state, action) => {
      const data = action.payload.gif_data;
      let filt = Object.fromEntries(
        Object.entries(data).filter(([key]) => key === "title")
      );
      console.log(filt);
      state.gifData = [...action.payload.gif_data];
    }
  }
});

export const { addGif } = gifSlice.actions;
export default gifSlice.reducer;
