import { Link } from "react-router-dom";
import "./header.css";
import Icon from "../../../public/assets/icons/logo.svg";
import { useState } from "react";
import Menu from "../../../public/assets/icons/menu.svg"

import PropTypes  from "prop-types"
const navList = [
  { id: 1, link: "/home", text: "Home", textNum: "00" },
  { id: 2, link: "/destination", text: "DESTINATION", textNum: "01" },
  { id: 3, link: "/crew", text: "CREW", textNum: "02" },
  { id: 4, link: "/technology", text: "TECHNOLOGY", textNum: "03" },
];
const Header = ({setIsActive}) => {
  let navId =+localStorage.getItem("navId")
    const [navIsActive,navGetIsActive] =useState(navId>1?navId:1)
    localStorage.setItem("navId",navIsActive)
    console.log(navId);
  return (
    <header className="header">
      <Icon />
      <nav>
        <ul className="nav-list">
          <span></span>
        {navList.map(item=>{
            const {id,text,link,textNum}=item
            return (
                <li key={id} onClick={()=>navGetIsActive(id)} className={navIsActive==id?"list-active":""}>
                    <Link to={link}><b>{textNum}</b> {text}</Link>
                </li>
            )
        })}
        </ul>
      </nav>
      <div className="menu" onClick={()=>setIsActive(true)}>
      <Menu/>

      </div>
    </header>
  );
};

export default Header;
Header.propTypes={
  setIsActive:PropTypes.func
}