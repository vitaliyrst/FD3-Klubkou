import React from "react";
import "./Card.css";

function Card(props) {
    const {title, author, price, description} = props.item;

    return (
        <div className='product_card_container'>
            <h2 className='product_card_title'>{title}</h2>
            <p>{author}</p>
            <p>{description}</p>
            <span className='product_card_price'>Цена: {price}</span>
        </div>
    );
}

export default Card;