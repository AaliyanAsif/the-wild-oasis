import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import React from "react";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToogle() {
  const { isDarkMode, toogleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toogleDarkMode}>
      {isDarkMode ? <BiSun /> : <BiMoon />}
    </ButtonIcon>
  );
}
