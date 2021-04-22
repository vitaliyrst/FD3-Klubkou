import React from 'react';
import PropTypes from 'prop-types';
import './ProductTable.css';
import Product from "./Product/Product";

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.props.onAdd();
    }

    handleRemove(id, title) {
        if (confirm(`Вы хотите удалить ${title.toUpperCase()}?`)) {
            let filtered = this.state.items.filter(item => item.id !== id);
            this.setState({items: filtered});
        }
    }

    getProducts() {
        return this.props.items.map(item =>
            <Product
                key={item.id}
                id={item.id}
                title={item.title}
                author={item.author}
                year={item.year}
                url={item.url}
                price={item.price}
                quantity={item.quantity}
                onClickSelect={this.props.onSelected}
                onClickEdit={this.props.onEdit}
                onClickRemove={this.handleRemove}
                selected={this.props.selected === item.id}
            />
        );
    }

    getButtonAddProduct() {
        if (this.props.form === null) {
            return (
                <button
                    className='shop_table_button_add'
                    type='button'
                    onClick={this.handleAdd}
                    action={'add'}
                >
                    Add new product
                </button>
            );
        }
        return null;
    }

    render() {
        let items = this.getProducts();
        let button = this.getButtonAddProduct();

        return (
            <div className='main_shop_table_container'>
                <table className='shop_table'>
                    <caption className='shop_table_caption'>
                        {this.props.title}
                    </caption>
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Url</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th colSpan='2'>Control</th>
                    </tr>
                    {items}
                    </tbody>
                </table>
                {button}
            </div>
        );
    }
}

ProductTable.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

export default ProductTable;