import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlices";
import detailReducer from "./slices/detailSlice";

export default configureStore({
  reducer: { flight: flightReducer, detail: detailReducer },
});
