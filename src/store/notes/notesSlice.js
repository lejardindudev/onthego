import {createSlice} from "@reduxjs/toolkit";

export const noteSlice = createSlice({
   name: "note",
   initialState: {
        noteList: [

        ]
   },
   reducers:{
    sayHello:(currentSlice,action) => {
        console.log("hello");
    },
    setNoteList:(currentSlice,action) =>{
        currentSlice.noteList = action.payload;
        // console.log("slice", action.payload)
    },
    addNote:(currentSlice,action) => {
        currentSlice.noteList.push(action.payload);
    },
    updateNote:(currentSlice,action) => {
        const index = currentSlice.noteList.findIndex(noteSlice => noteSlice.id === action.payload.id);
        currentSlice.noteList[index] = action.payload;
    },
    deleteNoteStore:(currentSlice,action) => {
        console.log(action.payload);
        console.log("store updated : ");
        const index = currentSlice.noteList.findIndex(note => {
            return note.id === action.payload;
        })
        // console.log("index : ",index)
        currentSlice.noteList.splice(index,1);
    }
   }
});

const {sayHello,setNoteList,addNote,updateNote,deleteNoteStore} = noteSlice.actions;

// export const noteReducer = noteSlice.reducer;
export {
    sayHello,
    setNoteList,
    addNote,
    updateNote,
    deleteNoteStore

}
