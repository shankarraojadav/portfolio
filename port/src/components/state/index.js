import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
}

export const ThemeSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : "light";
        }
    }
});

export const { setMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;