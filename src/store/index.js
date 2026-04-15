import {noteSlice} from "./notes/notesSlice.js";
import {configureStore,combineReducers} from "@reduxjs/toolkit";
import storageImport from "redux-persist/lib/storage";
import {persistStore,persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";


// L'import peut etre dans le sous objet default =>
const storage = storageImport.default ?? storageImport;

// Config obligatoire cf. doc
const persistconfig = {
   key:"root",
   version:1,
   storage,//type de storage cf. import
   whitelist:['NOTE'],
   //blacklist:[''] //--> peut remplacer la whitlist mais moins controllé => soit rien (=tout est persisté) soit whitlist
}
// ReducerCombiné
const rootReducers = combineReducers({
   NOTE : noteSlice.reducer,
});

// Reducers combinés => persistés
const persistedReducers = persistReducer(persistconfig,rootReducers);


const store = configureStore({
   reducer: persistedReducers,
   middleware: getDefaultMiddleware => {
       const middleware = getDefaultMiddleware({
           serializableCheck: {
               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
           }
       })
       return middleware;
   }

});

const persistor = persistStore(store);

export { persistor, store};
