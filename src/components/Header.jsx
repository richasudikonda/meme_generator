import React from "react";

export default function Header(){
    return(
        <header className="header">
            <img alt="troll image" src="./src/images/troll_png.png" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}