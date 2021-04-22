import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='product_card'>
                <h3 className='product_card_title'>
                    {this.props.item.title}
                </h3>
                <p className='product_card_description'>
                    {this.props.item.description}
                </p>
                <span className='product_card_price'>
                        Price: {this.props.item.price}
                    </span>
            </div>
        );
    }
}

export default ProductCard;