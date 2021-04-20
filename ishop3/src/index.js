import React from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';
import Shop from './components/Shop/Shop';

ReactDOM.render(
    <Shop shopName='iShop' books={books}/>,
    document.querySelector('.container')
);