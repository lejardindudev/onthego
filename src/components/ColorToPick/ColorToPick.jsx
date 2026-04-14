//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./ColorToPick.css";
import checkImage from "../../assets/img/check-circle-solid.svg";

//## COMPONENTS  ###########

export default function ColorToPick({
  parentClass,
  colorName,
  type,
  isActive,
  onClick,
}) {
  const activeClass = isActive ? "active" : "";
  const dynamicClass = classManager([
    parentClass,
    "ColorToPick",
    colorName,
    type,
    activeClass,
  ]);
  return (
    <>
      <div onClick={onClick} id={colorName} className={dynamicClass}>
        {isActive && <img className="ColorToPick-image" src={checkImage} />}
      </div>
    </>
  );
}
