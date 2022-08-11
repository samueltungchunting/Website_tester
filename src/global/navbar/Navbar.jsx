/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import './Navbar.css'
import i18n from '../../i18n'

export default function Navbar({color}) {

    const { t } = useTranslation(["navbar"])
    // const [lang, setLang] = useState()

    function clickChangeLanguage() { 
        if(i18n.language === "en") {
            i18n.changeLanguage("cn")
        } else {
            i18n.changeLanguage("en")
        }
    }

    // function clickChangeLanguage(lang) {
    //     i18n.changeLanguage(lang)
    // }

    const isTransparent = color === 'transparent'? true : false;

    const [navBg, setNavBg] = useState(isTransparent);
    window.addEventListener('scroll', changeNavBg);

    function changeNavBg() {
        if(window.scrollY > 320) 
            setNavBg(false);
        else
            setNavBg(isTransparent);
    }

    const [showNavlist, setShowNavlist] = useState(false);
    function switchShowNavlist() {
        setShowNavlist(prev => !prev);
    }

    return(
        <nav className={navBg? 'navbar': 'navbar active'}>
            
            <div className={showNavlist? 'navbar-left navbar-left-navlist': 'navbar-left'}>

                <ul className="navbar-left-ul">
                    <li>
                        <Link to="/home">Home</Link>
                        {/* <ul>
                            <li>Hi</li>
                            <li>Hi</li>
                            <li>Hi</li>
                        </ul> */}
                    </li>
                    <li>
                        <Link to="/page1">Page1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Page2</Link>
                    </li>
                    <li>
                        <Link to="/tab">Tab-test</Link>
                    </li>
                </ul>
            </div>

            <div className={showNavlist? 'navbar-right navbar-right-navlist': 'navbar-right'}>
                <ul>
                    <li>
                        <p 
                            className="nav-languages"
                            onClick={() => clickChangeLanguage()}
                        >
                            繁／EN
                        </p>
                    </li>
                </ul>
            </div>
            <a href="#" className="nav-responsive" onClick={switchShowNavlist}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </a>
        </nav>
    )
}