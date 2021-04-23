import React from 'react';
import PropTypes from 'prop-types';
import './Shop.css';
import ProductTable from "./Table/ProductTable";
import ProductCard from "./Card/ProductCard";
import ProductForm from "./Forms/ProductForm";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items.concat(),
            form: null,
            selected: null,
            itemInfo: null,
            inProcess: false
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSetForm = this.handleSetForm.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.getNextId = this.getNextId.bind(this);
    }

    handleSelect(id) {
        this.setState(() => ({form: null, selected: id, itemInfo: id}));
    }

    handleSetForm(id, action) {
        this.setState(() => ({form: action, selected: id, itemInfo: null, inProcess: (action !== 'edit')}));
    }

    handleSave(data) {
        let items;

        if (this.state.form === 'edit') {
            items = this.state.items.map((item) => {
                return (item.id === data.id) ? data : item;
            });
        } else {
            items = this.state.items;
            items.push(data);
            this.setState({items: items});
        }

        this.setState({items: items, form: null, selected: data.id, itemInfo: data.id, inProcess: false});
    }

    handleCancel() {
        this.setState({form: null, itemInfo: this.state.selected, inProcess: false});
    }

    handleRemove(id) {
        const filtered = this.state.items.filter(item => item.id !== id);
        this.setState({items: filtered, selected: null, itemInfo: null});
    }

    getForm() {
        if (this.state.form) {
            return (
                <ProductForm
                    item={this.state.items[this.state.selected] || ''}
                    id={this.state.selected || this.getNextId()}
                    disabled={(this.state.form === 'add')}
                    inProcess={this.state.inProcess}
                    onSave={this.handleSave}
                    onCancel={this.handleCancel}
                    onChanges={this.handleChanges}
                />
            );
        }
        return null;
    }

    getNextId() {
        return (this.state.form === 'add') ? this.state.items.length : this.state.selected;
    }

    getProductCard() {
        if (this.state.itemInfo !== null) {
            return (
                <ProductCard
                    item={this.state.items[this.state.selected]}
                    selected={this.state.itemInfo}
                />
            );
        }
        return null;
    }

    handleChanges() {
        this.setState({inProcess: true});
    }

    render() {
        const form = this.getForm();
        const productCard = this.getProductCard();

        return (
            <div className='main_shop_container'>
                <ProductTable
                    title={this.props.title}
                    items={this.state.items}
                    selected={this.state.selected}
                    inProcess={this.state.inProcess}
                    form={this.state.form}
                    onRemove={this.handleRemove}
                    onSelected={this.handleSelect}
                    onSetForm={this.handleSetForm}
                />
                {productCard}
                {form}
            </div>
        );
    }
}

Shop.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

export default Shop;