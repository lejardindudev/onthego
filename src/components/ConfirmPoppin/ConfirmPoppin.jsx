//## HOOKS ##########
// import { useState } from 'react';
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./ConfirmPoppin.css";

//## COMPONENTS  ###########

export default function ConfirmPoppin({
  parentClass,
  isVisible,
  title,
  confirmLabel,
  cancelLabel,
  confirmationHandler,
  cancellationHandler,
}) {
  const visibleClass = isVisible ? "visible" : "";
  const dynamicClass = classManager([
    parentClass,
    "ConfirmPopin",
    "Popin",
    visibleClass,
  ]);
  return (
    <>
      <div className={dynamicClass}>
        <div className="Popin-content">
          <h3 className="Popin-content-title">{title}</h3>
          <div className="Popin-content-actions">
            <button
              onClick={cancellationHandler}
              className="Popin-content-button Cta secondary"
            >
              {cancelLabel}
            </button>
            <button
              onClick={confirmationHandler}
              className="Popin-content-button Cta"
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
