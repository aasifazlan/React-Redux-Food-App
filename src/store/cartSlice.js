import {createSlice} from '@reduxjs/toolkit'

initialState=[]

const critSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter((item)=>item.info.id!== action.payload)
        }
    }

})

export const {add, remove}=critSlice.actions;

export default critSlice.reducer;