import {configureStore} from "@reduxjs/toolkit";
import {noteSlice} from "./notes/notesSlice.js";

const store = configureStore({
   reducer: {
       // Add your reducers here
       NOTE : noteSlice.reducer,
   },
});


export default store;
