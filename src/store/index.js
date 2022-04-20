import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./gifSlice";

export default configureStore({
  reducer: {
    gifData: gifReducer
  }
});
