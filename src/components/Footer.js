import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {NavLink} from "react-router-dom";

const isActiveNav = ({ isActive }) => {
    return isActive ? "footer__active" : "footer__default";
};

function Footer() {

    return (
        <div className="footer">
            <div className="footer__menu _container">
                <ul className="footer__list">
                    <li className="footer__list__item">
                        <NavLink to="/" className={isActiveNav}>
                            Новини
                        </NavLink>
                    </li>
                    <li className="footer__list__item">
                        <NavLink to="/gallery" className={isActiveNav}>
                            Галерея
                        </NavLink>
                    </li>
                    <li className="footer__list__item"> 
                        <a href="#" ><FacebookOutlinedIcon sx={{color: '#F5FBFE'}}/></a>
                    </li> 
                    <li className="footer__list__item">
                        <a href="#"><InstagramIcon sx={{color: '#F5FBFE'}}/></a>
                    </li>
                </ul>
                <div className="footer__description">2023 Всі права захищено</div>
            </div> 
        </div>
    )
}

export default Footer;