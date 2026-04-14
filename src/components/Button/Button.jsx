//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./Button.css";

//## COMPONENTS  ###########

export default function Button({
  label,
  clickHandler,
  parentClass,
  isActive = true,
}) {
  // Gestion des classes
  const activeClass = isActive ? "" : "inactive";
  const dynamicClass = classManager([parentClass, "Cta", activeClass]);
  // console.log("from button : ", isActive);
  return (
    <>
      <button
        disabled={!isActive}
        className={dynamicClass}
        onClick={clickHandler}
      >
        {label}
      </button>
    </>
  );
}
