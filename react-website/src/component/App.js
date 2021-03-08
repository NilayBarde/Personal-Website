import React from "react";
import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="hide-medium hide-large">
            <div className="topnav" id="topnav">
                <a href="#home" className="active">Nilay Barde</a>
                <div id="myLinks">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="mailto: nilaybarde@gmail.com">Contact</a>
                    <a href="cv.html">Resume</a>
                </div>
            </div>
        </div>
        )
    }
}