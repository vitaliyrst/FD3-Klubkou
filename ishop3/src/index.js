import React from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';
import Shop from './components/Shop';

ReactDOM.render(
    <Shop title='iShop' items={books}/>,
    document.querySelector("#root")
);