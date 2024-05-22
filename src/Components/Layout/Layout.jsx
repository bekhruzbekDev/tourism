import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Layout = () => {
  const [isActive,setIsActive]= useState(false)
  return (
    <div>
      <Header  setIsActive={setIsActive}/>
      {isActive &&<Modal setIsActive={setIsActive}/>}
      {<Outlet/>}
    </div>
  );
};

export default Layout;
