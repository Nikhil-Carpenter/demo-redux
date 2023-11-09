import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"students",
    initialState:{
        value:['chintu','pinku','miku','chiku'],
    },
    //Actions
    reducers:{
        addUserName:(state,action)=>{
            var nm = action.payload;
            state.value = [...state.value,nm]
        },
        removeUserName:(state,action)=>{
            var nm = action.payload;
            state.value = state.value.filter((name)=>name!==nm)
        }
    }
});

export const { addUserName,removeUserName } = slice.actions;

export default slice.reducer