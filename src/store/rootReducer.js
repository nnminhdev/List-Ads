import { combineReducers } from "@reduxjs/toolkit";
import { sliceFilterReducer } from "./Filter/FilterReducer";

const rootReducer = combineReducers({
	filterSlice: sliceFilterReducer,
});

export default rootReducer;
