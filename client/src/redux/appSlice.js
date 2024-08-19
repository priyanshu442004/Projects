import {createSlice} from '@reduxjs/toolkit'

const appSlice=createSlice({
    name:"app",
    initialState:{
        open:false,
        user:null,
        emails:[],
        selectedMail:null,
        searchMail:""
    },
    reducers:{
        setOpen:(state,action)=>{
            state.open=action.payload
        },
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setEmails:(state,action)=>{
            state.emails=action.payload
        },
        setSelectedMail:(state,action)=>{
            state.selectedMail=action.payload
        },
        setSearchMail:(state,action)=>{
            state.searchMail=action.payload
        }
    }
})

export const {setOpen, setUser, setEmails, setSelectedMail, setSearchMail}=appSlice.actions;
export default appSlice.reducer