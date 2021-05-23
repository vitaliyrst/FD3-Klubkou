import React from 'react';
import './App.css';
import data from './data.json';
import Company from "./components/Company/Company";

function App() {
    return (
        <Company clients={data} name='Velcom'/>
    );
}

export default App;
