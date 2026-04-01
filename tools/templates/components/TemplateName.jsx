//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
 import classManager from "../../helpers/classManager"

// ## ASSETS - RESSOURCES #############
import './TemplateName.css';

//## COMPONENTS  ###########


export default function TemplateName() {
 const dynamicClass = classManager([parentClass,"TemplateName"])
  return (
    <>
      <div className={dynamicClass}>
        TemplateName component
      </div>
    </>
  );

}