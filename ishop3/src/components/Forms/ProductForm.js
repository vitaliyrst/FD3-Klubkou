import React from 'react';
import PropTypes from 'prop-types';
import './ProductForm.css';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.item.title || '',
            author: this.props.item.author || '',
            year: this.props.item.year || '',
            url: this.props.item.url || '',
            price: this.props.item.price || '',
            quantity: this.props.item.quantity || '',
            description: this.props.item.description || '',
            validationMessage: {},
            validFields: {
                title: !this.props.inProcess,
                author: !this.props.inProcess,
                year: !this.props.inProcess,
                url: !this.props.inProcess,
                price: !this.props.inProcess,
                quantity: !this.props.inProcess,
                description: !this.props.inProcess
            },
            disabled: this.props.disabled,
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.item.title !== this.props.item.title) {
            this.setState({
                id: this.props.id,
                title: this.props.item.title,
                author: this.props.item.author,
                year: this.props.item.year,
                url: this.props.item.url,
                price: this.props.item.price,
                quantity: this.props.item.quantity,
                description: this.props.item.description,
            })
        }
    }

    handleUserInput(eo) {
        this.props.onChanges();
        const name = eo.target.name;
        const value = eo.target.value;
        const validationMessage = this.state.validationMessage;
        const validFields = Object.assign({}, this.state.validFields);

        switch (name) {
            case 'title':
                if (value.length <= 6) {
                    validationMessage.title = 'длина должна быть больше 6 символов';
                    validFields[name] = false;
                } else {
                    validationMessage.title = '';
                    validFields[name] = true;
                }
                break;
            case 'author' :
                if (value.length <= 6) {
                    validationMessage.author = 'длина должна быть больше 6 символов';
                    validFields[name] = false;
                } else if (value[0] !== value[0].toUpperCase()) {
                    validationMessage.author = 'первая буква должна быть заглавной';
                    validFields[name] = false;
                } else {
                    validationMessage.author = '';
                    validFields[name] = true;
                }
                break;
            case 'year':
                if (!/\b[0-9]{4}\b/.test(value)) {
                    validationMessage.year = 'год должен состоять из 4 цифр';
                    validFields[name] = false;
                } else {
                    validationMessage.year = '';
                    validFields[name] = true;
                }
                break;
            case 'url' :
                if (!/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?$/.test(value)) {
                    validationMessage.url = 'неверный url (прим. https://test01.jpg)';
                    validFields[name] = false;
                } else {
                    validationMessage.url = '';
                    validFields[name] = true;
                }
                break;
            case 'price' :
                if (!/^[0-9]+\.[0-9]{2}$/.test(value)) {
                    validationMessage.price = 'необходимо указать копейки';
                    validFields[name] = false;
                } else {
                    validationMessage.price = '';
                    validFields[name] = true;
                }
                break;
            case 'quantity' :
                if (!/^\d+$/.test(value)) {
                    validationMessage.quantity = 'количество должно цифрой';
                    validFields[name] = false;
                } else {
                    validationMessage.quantity = '';
                    validFields[name] = true;
                }
                break;
            case 'description':
                if (value.length <= 20) {
                    validationMessage.description = 'длина должна быть более 20 символов';
                    validFields[name] = false;
                } else {
                    validationMessage.description = '';
                    validFields[name] = true;
                }
        }

        this.setState(() => ({
            [name]: value,
            validationMessage: validationMessage,
            validFields: {...validFields},
            disabled: Object.keys(validFields).some(item => validFields[item] === false)
        }));
        console.log(this.state.validFields)
    }

    handleSave() {
        const data = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            year: Number(this.state.year),
            url: this.state.url,
            price: Number(this.state.price),
            quantity: Number(this.state.quantity),
            description: this.state.description
        };

        this.props.onSave(data);
    }

    render() {
        return (
            <div className='product_form_container'>
                <form className='product_form'>
                    <div className='product_form_group'>
                        <label htmlFor='title'>Title:</label>
                        <input
                            name='title'
                            type='text'
                            value={this.state.title}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_form_error'>{this.state.validationMessage.title}</span>
                    </div>
                    <div className='product_form_group'>
                        <label htmlFor='author'>Author:</label>
                        <input
                            name='author'
                            type='text'
                            value={this.state.author}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_form_error'>{this.state.validationMessage.author}</span>
                    </div>
                    <div className='product_form_group'>
                        <label htmlFor='year'>Year:</label>
                        <input
                            name='year'
                            type='text'
                            value={this.state.year}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_form_error'>{this.state.validationMessage.year}</span>
                    </div>
                    <div className='product_form_group'>
                        <label htmlFor='url'>Url:</label>
                        <input
                            name='url'
                            type='text'
                            value={this.state.url}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_form_error'>{this.state.validationMessage.url}</span>
                    </div>
                    <div className='product_form_group'>
                        <label htmlFor='price'>Price:</label>
                        <input
                            name='price'
                            type='text'
                            value={this.state.price}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_form_error'>{this.state.validationMessage.price}</span>
                    </div>
                    <div className='product_form_group'>
                        <label htmlFor='quantity'>Quantity:</label>
                        <input
                            name='quantity'
                            type='text'
                            value={this.state.quantity}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_form_error'>{this.state.validationMessage.quantity}</span>
                    </div>
                    <div className='product_form_group'>
                        <label htmlFor='description'>Description:</label>
                        <textarea
                            name='description'
                            rows='6'
                            value={this.state.description}
                            onChange={this.handleUserInput}
                        />
                        <span className='product_form_error'>{this.state.validationMessage.description}</span>
                    </div>
                    <div className='product_form_button'>
                        <button
                            type='button'
                            onClick={this.handleSave}
                            disabled={this.state.disabled}
                        >Save
                        </button>
                        <button type='button' onClick={this.props.onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

ProductForm.propTypes = {
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    inProcess: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onChanges: PropTypes.func.isRequired
};

export default ProductForm;