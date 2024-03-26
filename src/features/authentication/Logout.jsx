import { BiLogOut } from "react-icons/bi";
import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const { logout, isLogingOut } = useLogout();

  return (
    <ButtonIcon disabled={isLogingOut} onClick={logout}>
      {!isLogingOut ? <BiLogOut /> : <SpinnerMini />}
    </ButtonIcon>
  );
}
