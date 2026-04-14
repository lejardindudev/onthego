import axios from "axios";
// import {apiNoteBaseUrl} from "../config/config"

const BASE_URL = import.meta.env.VITE_API_NOTES_BASE_URL;
export default class NoteApi{
    static async fetchAll(){
        return (await axios.get(`${BASE_URL}`)).data;
    }
    static async create(note){
        return (await axios.post(`${BASE_URL}`,note)).data;

    }
    static async fetchById(noteId){
        return (await axios.get(`${BASE_URL}/${noteId}`)).data;
    }
    static async deleteById(noteId){
        return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
        
    }
    static async update(note){
        return (await axios.patch(`${BASE_URL}/${note.id}`,note)).data;
    }
}