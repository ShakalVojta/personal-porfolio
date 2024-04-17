import { Link } from "react-router-dom";
import "/resources/scss/portfolio-page/Navigation.scss";
import { useState } from "react";

function Navigation() {
    const [status, setStatus] = useState("");

    const toggleMenu = () => {
        setStatus(status === "open" ? "closed" : "open");
    };

    return (
        <header className="header">
            <div className="header-name">
                <a href="#welcome-page" className="header-link">Vojtěch Týnavský</a>
            </div>

            <nav className="burger-menu">
                <div
                    className="burger_menu--container"
                    role="button"
                    onClick={toggleMenu}
                >
                    <i className={status}></i>
                    <i className={status}></i>
                    <i className={status}></i>
                </div>
                {status === "open" && (
                    <div className="burger-menu-view">
                        <ul className="burger-menu-links">

                            <li><a href="#welcome-page" onClick={toggleMenu}>Home</a></li>

                            <li>
                                <a href="#about-me" onClick={toggleMenu}>
                                    About me
                                </a>
                            </li>
                            <li>
                                <a href="#projects" onClick={toggleMenu}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact-me" onClick={toggleMenu}>
                                    Contact me
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            <nav className="full_screen">
                <ul className="full_screen-links">
                <li><a href="#welcome-page">Home</a></li>
                    <li>
                        <a href="#about-me">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Navigation;
