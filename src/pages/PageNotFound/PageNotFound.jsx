//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./PageNotFound.css";

//## COMPONENTS  ###########

export default function PageNotFound({ parentClass }) {
  const dynamicClass = classManager([parentClass, "PageNotFound"]);
  return (
    <>
      <div className={dynamicClass}>PageNotFound component</div>
    </>
  );
}
