import React from 'react';
import PropTypes from 'prop-types';
import './Shop.css';
import ProductTable from "./Table/ProductTable";
import ProductCard from "./Card/ProductCard";
import ProductForm from "./Forms/ProductForm";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: null, form: null, itemInfo: null, books: this.props.books};
        this.handleSelect = this.handleSelect.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSelect(id) {
        this.setState(() => ({selected: id, itemInfo: id, form: null}));
    }

    handleAdd() {
        this.setState(() => ({form: 'add', itemInfo: null, selected: null}));
    }

    handleEdit(id) {
        this.setState(() => ({form: 'edit', itemInfo: null, selected: id}));
    }

    handleSave(data, addBook) {
        if (!addBook) {
            let books = this.state.books.map((book) => {
                return book.id === data.id ? data : book;
            });

            this.setState({books: books});
        } else {
            let books = this.state.books;
            books.push(data);
            this.setState({books: books});
        }
    }

    handleCancel() {
        this.setState({form: null});
    }

    getForm() {
        if (this.state.form === 'add') {
            let id = this.state.books.length;
            return (
                <ProductForm
                    item={''}
                    id={id}
                    onSave={this.handleSave}
                    onCancel={this.handleCancel}
                />
            );
        } else if (this.state.form === 'edit') {
            return (
                <ProductForm
                    item={this.state.books[this.state.selected]}
                    onSave={this.handleSave}
                    onCancel={this.handleCancel}
                />
            );
        }
        return null;
    }

    getProductCard() {
        if (this.state.selected !== null && this.state.form === null) {
            return (
                <ProductCard
                    item={this.state.books[this.state.selected]}
                    selected={this.state.itemInfo}
                />
            );
        }
        return null;
    }

    render() {
        const form = this.getForm();
        const productCard = this.getProductCard();

        return (
            <div className='main_shop_container'>
                <ProductTable
                    title={this.props.title}
                    items={this.state.books}
                    selected={this.state.selected}
                    form={this.state.form}
                    onSelected={this.handleSelect}
                    onEdit={this.handleEdit}
                    onAdd={this.handleAdd}
                />
                {productCard}
                {form}
            </div>
        );
    }
}

Shop.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
}

export default Shop;