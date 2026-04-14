//## HOOKS ##########
import { useState } from "react";
// import { useEffect } from 'react';

//## UTILS  ###########
import classManager from "../../utils/classManager";

// ## ASSETS - RESSOURCES #############
import "./SettingsCardEdit.css";
import pinImg from "../../assets/img/ico-unpin.png";

//## COMPONENTS  ###########
import TogglePill from "../TogglePill";
import ColorToPick from "../ColorToPick";

export default function SettingsCardEdit({
  parentClass,
  onPinnedClick,
  onColorsClick,
  onButtonClick,
  note,
  activeColor,
  isVisible,
}) {
  const isVisibleClass = isVisible ? "open" : "";
  const dynamicClass = classManager([
    parentClass,
    "SettingsCardEdit",
    isVisibleClass,
  ]);

  //Entrée --> note.color => nom de color = "" ou color1, color2, ... color5

  //State
  // const [activeColor, setActiveColor] = useState(note.color);
  // console.log("cureentColor", activeColor);

  const colors = [
    { name: "", type: "square" },
    // { name: "color1", type: "square", isActive: true },
    { name: "color1", type: "square" },
    { name: "color2", type: "square" },
    { name: "color3", type: "square" },
    { name: "color4", type: "square" },
    { name: "color5", type: "square" },
  ];

  colors.forEach((color) => {
    if (color.name === activeColor) {
      color.isActive = true;
    }
  });

  // console.log("OBJ colors", colors);
  // console.log(activeColor);
  return (
    <>
      <aside className={dynamicClass}>
        <form className="SettingsCardEdit-settings">
          <section className="SettingsCardEdit-settings-pinned Pinned WidgetCardEdit-content">
            <img className="Pinned-img" src={pinImg} alt="Pin this note" />
            <p className="Pinned-title">Pin Note</p>
            <TogglePill onChange={onPinnedClick} isPinned={note.isPinned} />
          </section>
          <section className="SettingsCardEdit-settings-colors Colors WidgetCardEdit">
            <p className="Colors-title WidgetCardEdit-title">
              Note's background
            </p>
            <div className="Colors-colorPicker WidgetCardEdit-content">
              {colors.map((color, i) => {
                return (
                  <ColorToPick
                    // onChange={onChange}
                    onClick={onColorsClick}
                    key={color.name + "-" + i}
                    parentClass="Colors-colorPicker-color"
                    colorName={color.name}
                    type={color.type}
                    isActive={color.isActive}
                  />
                );
              })}
            </div>
          </section>
        </form>
      </aside>
    </>
  );
}
