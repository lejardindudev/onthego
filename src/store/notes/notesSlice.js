import {createSlice} from "@reduxjs/toolkit";

export const noteSlice = createSlice({
   name: "note",
   initialState: {
        lastCountId:5,
        noteList: [
             {
                id: "0",
                title: "Livre à mémoriser",
                description: "Clean Code - Robert C. Martin. Notions clés : nommage, fonctions courtes, lisibilité. Revenir sur les chapitres liés aux fonctions pures, éviter les effets de bord et bien structurer les responsabilités. À relire progressivement avec prise de notes détaillée.",
                date: "01/04/26 - 09:30",
                isPinned: true,
                color: "color4"
            },
            {
                id: "1",
                title: "Citation",
                description: "“Programs must be written for people to read, and only incidentally for machines to execute.”",
                date: "01/04/26 - 10:15",
                isPinned: false,
                color: ""
            },
            {
                id: "2",
                title: "Films à partager",
                description: "Inception, Interstellar, The Social Network. Captain fantastic, Jurassic Park, Attrape moi si tu peux, X-men origins, Brice de Nice, Docteur Folamour. Ajouter également quelques films plus récents à la liste et penser à noter pourquoi ils sont intéressants à partager.",
                date: "02/04/26 - 21:00",
                isPinned: false,
                color: "color5"
            },
            {
                id: "3",
                title: "Liste courses",
                description: "Epicerie:\n\n- sel\n- poivre\n- huile d'olive\n\nLégumes : \n- Courgettes\n- tomates",
                date: "14/04/2026",
                isPinned: false,
                colorm: ""
            }
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
