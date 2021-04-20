import React from 'react';
import PropTypes from 'prop-types';
import './Shop.css';
import Product from "../Product/Product";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {books: this.props.books, isClicked: 0};
        this.handleClickedItem = this.handleClickedItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleClickedItem(id) {
        this.setState({isClicked: id});
    }

    handleRemoveItem(id, title) {
        if (confirm(`Вы хотите удалить ${title.toUpperCase()}?`)) {
            let filtered = this.state.books.filter(book => book.code !== id);
            this.setState({books: filtered});
        }
    }

    render() {
        let books = this.state.books.map(book =>
            <Product
                key={book.code}
                id={book.code}
                title={book.title}
                author={book.author}
                year={book.year}
                url={book.url}
                price={book.price}
                quantity={book.quantity}
                remove={this.handleRemoveItem}
                clicked={this.handleClickedItem}
                isClicked={book.code === this.state.isClicked}
            />
            );

        return <div className='shop'>
            <table className='shop_table'>
                <caption className='shop_name'>
                    {this.props.shopName}
                </caption>
                <tbody>
                <tr className='shop_column_name'>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Url</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Control</th>
                </tr>
                {books}
                </tbody>
            </table>
        </div>
    }
}

Shop.propTypes = {
    shopName: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ),
}

export default Shop;