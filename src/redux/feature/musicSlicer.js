import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

export const musicSlicer = createSlice({
    name : 'musicSlicer',
    initialState,
    reducers : {
            playMusic : (state,action)=>{
                state
            }
    }
})

export const {playMusic} =musicSlicer.actions
export default musicSlicer.reducer