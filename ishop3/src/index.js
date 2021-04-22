import React from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';
import Shop from './components/Shop';

ReactDOM.render(
    <Shop title='iShop' books={books}/>,
    document.querySelector("#root")
);