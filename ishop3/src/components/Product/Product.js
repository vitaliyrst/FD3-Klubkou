import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleClicked = this.handleClicked.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleClicked() {
        this.props.clicked(this.props.id);
    }

    handleRemove() {
        this.props.remove(this.props.id, this.props.title);
    }

    render() {
        let bgBook = this.props.isClicked ? {backgroundColor: 'orange'} : null;

        return <tr className='product_row' style={bgBook} onClick={this.handleClicked}>
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
                <button className='product_remove' type='button' value={this.props.id} onClick={this.handleRemove}>
                    Remove
                </button>
            </td>
        </tr>
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
    remove: PropTypes.func,
    clicked: PropTypes.func,
    isClicked: PropTypes.bool,
}

export default Product;