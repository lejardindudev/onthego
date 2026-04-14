//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./TemplateName.css";

//## COMPONENTS  ###########

export default function TemplateName({ parentClass }) {
  const dynamicClass = classManager([parentClass, "TemplateName"]);
  return (
    <>
      <div className={dynamicClass}>TemplateName component</div>
    </>
  );
}
