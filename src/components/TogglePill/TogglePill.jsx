//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./TogglePill.css";

//## COMPONENTS  ###########

export default function TogglePill({ parentClass, label, onChange, isPinned }) {
  const dynamicClass = classManager([parentClass, "TogglePill"]);
  return (
    <>
      <label className={dynamicClass}>
        {label && <span className="TogglePill-text">{label}</span>}
        <input
          className="TogglePill-input"
          name="isPinned"
          type="checkbox"
          onChange={onChange}
          defaultChecked={isPinned}
          // onChange={onChange}
        />
        <span className="TogglePill-ui" aria-hidden="true">
          <span className="TogglePill-thumb"></span>
        </span>
      </label>
    </>
  );
}
