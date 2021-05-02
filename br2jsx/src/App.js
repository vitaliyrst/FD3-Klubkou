import React from "react";
import "./App.css";
import Br from "./components/Br/Br";

function App() {
    const text = 'первый<br>второй<br/>третий<br />последний';

    return (
        <div>
            <Br text={text}/>
        </div>
    );
}

export default App;
