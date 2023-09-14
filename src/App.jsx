import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Body from "./components/Body";

export default function App(){
    return(
        <div>
            {/* <Body user={null} /> */}
            <Header />
            <Meme />
        </div>
    )
}