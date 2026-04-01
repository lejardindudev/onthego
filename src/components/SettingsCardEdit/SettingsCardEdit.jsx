//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../helpers/classManager"

// ## ASSETS - RESSOURCES #############
import './SettingsCardEdit.css';

//## COMPONENTS  ###########


export default function SettingsCardEdit({parentClass}) {
const dynamicClass = classManager([parentClass,"SettingsCardEdit"])
  return (
    <>
      <div className={dynamicClass}>
        bibi
      </div>
    </>
  );

}