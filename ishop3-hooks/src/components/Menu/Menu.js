import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <header className='main_header'>
            <nav className='main_navigation'>
                <Link to={'/'}>iShop</Link>
                <ul className='site_navigation'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/products'}>Products</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;