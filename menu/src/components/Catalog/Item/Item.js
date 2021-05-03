import React from "react";
import "./Item.css";

function Item(props) {
    return (
        props.items.map((item, index) => (
            <li key={index}>{item.name}</li>
        ))
    );
}

export default Item;