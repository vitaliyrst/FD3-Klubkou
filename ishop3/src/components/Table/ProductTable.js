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
        this.props.onSetForm(null, 'add');
    }

    handleRemove(id, title) {
        if (confirm(`Вы хотите удалить ${title.toUpperCase()}?`)) {
            this.props.onRemove(id);
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
                onSetForm={this.props.onSetForm}
                selected={this.props.selected === item.id}
                onClickRemove={this.handleRemove}
                inProcess={this.props.inProcess}
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
    inProcess: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onSelected: PropTypes.func.isRequired,
};

export default ProductTable;