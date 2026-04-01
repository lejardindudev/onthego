//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../helpers/classManager"

// ## ASSETS - RESSOURCES #############
import './Button.css';

//## COMPONENTS  ###########


export default function Button({label,clickHandler,parentClass}) {
  const dynamicClass = classManager([parentClass,"Cta"])
  return (
    <>
      <button className={dynamicClass} onClick={clickHandler}>{label}</button>
    </>
  );

}