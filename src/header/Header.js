import React from "react";
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <ul>
                    <li><a className="active" href="#about">About me</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>

        )
    }
}
export default Header;