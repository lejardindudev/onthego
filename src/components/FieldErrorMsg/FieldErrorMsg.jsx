//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./FieldErrorMsg.css";

//## COMPONENTS  ###########

export default function FieldErrorMsg({ parentClass, content }) {
  const dynamicClass = classManager(["FieldErrorMsg"]);
  return (
    <>
      <div className={dynamicClass}>{content}</div>
    </>
  );
}
