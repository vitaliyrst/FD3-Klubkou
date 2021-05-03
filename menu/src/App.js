import React from "react";
import "./App.css";
import Catalog from "./components/Catalog/Catalog";
import data from "./data.json";

function App() {
    return (
        <div className='main_content'>
            <Catalog items={data}/>
        </div>
    );
}

export default App;
