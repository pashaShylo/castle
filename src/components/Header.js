import React, { useMemo, useState } from "react";
import {Link, NavLink} from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import logo from "../img/logo.png"

function toggleBurger() {
    document.querySelector(".header__burger").classList.toggle("active")
    document.querySelector(".header__menu").classList.toggle("active")
    document.body.classList.toggle("lock")
}
function closeBurger(){
    if(document.querySelector(".header__burger").classList.contains("active")){
        document.body.classList.remove("lock")
        document.querySelector(".header__burger").classList.remove("active")
        document.querySelector(".header__menu").classList.remove("active")
    }
}

const isActiveNav = ({ isActive }) => {
    return isActive ? "active" : "default";
};


function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
    });

    return (            
        <div className="header">
            <div className="header__container _container">
                <Link to="/" className="header__logo__link" onClick={closeBurger}><img src={logo} className="header__logo"/></Link>
                <div className="header__burger" onClick={toggleBurger}>
                    <span></span>
                </div>
                <div className="header__menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <NavLink to="/" className={isActiveNav} onClick={closeBurger}>
                                Новини
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/gallery" className={isActiveNav} onClick={closeBurger}>
                                Галерея
                            </NavLink>
                        </li>
                        <li className="menu__item" onClick={closeBurger}><a href="#"><FacebookOutlinedIcon sx={windowWidth <= 700 ? {color: 'white'} :{color: 'black'}}/></a></li>

                        <li className="menu__item" onClick={closeBurger}><a href="#"><InstagramIcon sx={windowWidth <= 700 ? {color: 'white'} :{color: 'black'}}/></a></li>
                    </ul>     
                </div>
            </div>
        </div>
    )
}

export default Header;