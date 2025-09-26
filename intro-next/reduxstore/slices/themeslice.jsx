import { createSlice } from "@reduxjs/toolkit";

const check = typeof window !== "undefined" ? localStorage.getItem("theme") : null

const initialState = {
    mode: check || "light"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,

    reducers: {
        toggle: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
            localStorage.setItem("theme", state.mode)
        }
    }
})

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer