import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
    return (
        <Router>
            <Menu/>
            <div className='main_content'>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
