import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../../@types/reduxTypes";

const initialState: FilterState = "";

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setFilter: (filter, action: PayloadAction<string>) => (filter = action.payload),
	},
});

export default filterSlice.reducer;

export const { setFilter } = filterSlice.actions;
