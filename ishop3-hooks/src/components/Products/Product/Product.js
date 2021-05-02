import React from "react";
import "./Product.css";

function Product(props) {

    function handleClickItem() {
        props.onSelected(props.item.id)
    }

    function handleClickEdit(eo) {
        eo.stopPropagation()
        props.onSetForm(props.item.id);

    }

    function handleClickRemove(eo) {
        eo.stopPropagation();
        confirm(`Вы действительно хотите удалить ${props.item.title}?`) ? props.onRemove(props.item.id) : null;
    }

    return (
        <tr onClick={handleClickItem} style={{backgroundColor: props.selected && '#3480b1'}}>
            <td>{props.item.title}</td>
            <td>{props.item.author}</td>
            <td>{props.item.year}</td>
            <td>
                <a href={props.item.url}>
                    <span className='product_image' style={{backgroundImage: `url("${props.item.url}")`}}/>
                </a>
            </td>
            <td>{props.item.price}</td>
            <td>{props.item.quantity}</td>
            <td>
                <button
                    className='product_edit'
                    type='button'
                    disabled={props.disabled}
                    onClick={handleClickEdit}
                >Edit
                </button>
            </td>
            <td>
                <button
                    className='product_remove'
                    type='button'
                    disabled={props.disabled}
                    onClick={handleClickRemove}
                >Remove
                </button>
            </td>
        </tr>
    );
}

export default Product;