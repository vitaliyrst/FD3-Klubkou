import React from 'react';
import './ProductForm.css';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.item.title || '',
            author: this.props.item.author || '',
            year: this.props.item.year || '',
            url: this.props.item.url || '',
            price: this.props.item.price || '',
            quantity: this.props.item.quantity || '',
            description: this.props.item.description || '',
            action: this.props.action,
            id: this.props.id
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    checkField(eo) {
        let value = eo.target.value;
        let field = eo.target.name;
        let checker = null;
        switch (field) {
            case 'title' :
                if (value.length < 6) {
                    checker = false;
                    this.setState({})
                }
                break;
            case 'author':
                break;
            case 'year':
                break;
            case 'url':
                break;
            case 'price':
                break;
            case 'quantity':
                break;
            case 'description':
                break;
        }
    }

    handleUserInput(eo) {
        const name = eo.target.name;
        const value = eo.target.value;
        this.setState({[name]: value})
    }

    handleSave() {
        const data = {
            title: this.state.title,
            author: this.state.author,
            year: this.state.year,
            url: this.state.url,
            price: this.state.price,
            quantity: this.state.quantity,
            description: this.state.description
        };
        this.state.action === 'add' ? data.id = this.state.id : this.props.item.id;
        this.props.onSave(data);
    }

    render() {
        return (
            <div className='product_edit_form'>
                <form className='edit_form'>
                    <div className='product_edit_info'>
                        <label htmlFor='title'>Title:</label>
                        <input
                            name='title'
                            type='text'
                            value={this.state.title}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_edit_error'></span>
                    </div>
                    <div className='product_edit_info'>
                        <label htmlFor='author'>Author:</label>
                        <input
                            name='author'
                            type='text'
                            value={this.state.author}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_edit_error'></span>
                    </div>
                    <div className='product_edit_info'>
                        <label htmlFor='year'>Year:</label>
                        <input
                            name='year'
                            type='text'
                            value={this.state.year}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_edit_error'></span>
                    </div>
                    <div className='product_edit_info'>
                        <label htmlFor='url'>Url:</label>
                        <input
                            name='url'
                            type='text'
                            value={this.state.url}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_edit_error'></span>
                    </div>
                    <div className='product_edit_info'>
                        <label htmlFor='price'>Price:</label>
                        <input
                            name='price'
                            type='text'
                            value={this.state.price}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_edit_error'></span>
                    </div>
                    <div className='product_edit_info'>
                        <label htmlFor='quantity'>Quantity:</label>
                        <input
                            name='quantity'
                            type='text'
                            value={this.state.quantity}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_edit_error'></span>
                    </div>
                    <div className='product_edit_info'>
                        <label htmlFor='description'>Description:</label>
                        <textarea
                            name='description'
                            rows='6'
                            value={this.state.description}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_edit_error'></span>
                    </div>
                    <div className='product_edit_button'>
                        <button type='button' onClick={this.handleSave}>Save</button>
                        <button type='button' onClick={this.props.onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProductForm;