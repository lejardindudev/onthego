//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########

// ## ASSETS - RESSOURCES #############
import './Search.css';
import magnifying from "../../assets/img/magnifying.svg";

//## COMPONENTS  ###########


export default function Search() {

  return (
    <>
      <form className="Search">
        <label htmlFor="search" className="Search-label">
          <img
            src={magnifying}
            alt="magnificent search icon"
            className="Search-label-icon"
          />
        </label>
        <input className="Search-input" type="text" id="search" name="search" placeholder="Search for notes ..." />
      </form>
    </>
  );

}