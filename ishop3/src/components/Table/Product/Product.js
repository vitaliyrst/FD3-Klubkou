import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSelect() {
        this.props.onClickSelect(this.props.id);
    }

    handleEdit(eo) {
        eo.stopPropagation();
        this.props.onClickEdit(this.props.id);
    }

    handleRemove() {
        this.props.onClickRemove(this.props.id, this.props.title);
    }


    render() {
        return (
            <tr
                style={this.props.selected ? {backgroundColor: '#5f9ea0'} : null}
                onClick={this.handleSelect}
            >
                <td>{this.props.title}</td>
                <td>{this.props.author}</td>
                <td>{this.props.year}</td>
                <td>
                    <a href={this.props.url}>
                        <span className='product_image' style={{backgroundImage: `url("${this.props.url}")`}}/>
                    </a>
                </td>
                <td>{this.props.price}</td>
                <td>{this.props.quantity}</td>
                <td>
                    <button className='product_edit' type='button' value={this.props.id} onClick={this.handleEdit}>
                        Edit
                    </button>
                </td>
                <td>
                    <button className='product_remove' type='button' value={this.props.id} onClick={this.handleRemove}>
                        Remove
                    </button>
                </td>
            </tr>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onClickSelect: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
    selected: PropTypes.bool,
}

export default Product;