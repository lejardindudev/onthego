//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';
import {useSelector} from "react-redux";

//## UTILS  ###########

// ## ASSETS - RESSOURCES #############
import './App.css'


//## COMPONENTS  ###########
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/";
import Dashboard from "./components/Dashboard";
import SingleNotePage from "./components/SingleNotePage";
import EditNotePage from "./components/EditNotePage";


function App() {
  // const [count, setCount] = useState(0)
  const notes = useSelector((store) => store.NOTE.notes)
  const singleNote = notes [3];

  return (
    <>
    <header className="Header">
      <Logo />
      <Search />
    </header>
    <Dashboard notes = {notes}/>
    {/* <SingleNotePage note = {singleNote}/> */}
    {/* <EditNotePage note = {singleNote}/> */}
   
      
    </>
  )
}

export default App
