import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
}

const homeSlice = createSlice({
  name: "home", 
  initialState, 
  reducers: {
    sdf: () => {}
  }
})

export const { sdf } = homeSlice.actions
export default homeSlice.reducer