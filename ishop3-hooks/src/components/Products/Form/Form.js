import React, {useState, useEffect} from "react";
import "./Form.css";

function Form(props) {
    const [item, setItem] = useState({
        id: props.item.id || '',
        title: props.item.title || '',
        author: props.item.author || '',
        year: props.item.year || '',
        url: props.item.url || '',
        price: props.item.price || '',
        quantity: props.item.quantity || '',
        description: props.item.description || ''
    });

    const [validationFields, setValidationFields] = useState({
        title: !props.disabled,
        author: !props.disabled,
        year: !props.disabled,
        url: !props.disabled,
        price: !props.disabled,
        quantity: !props.disabled,
        description: !props.disabled
    });
    const [validationMessages, setValidationMessages] = useState({});
    const [disabled, setDisabled] = useState(props.disabled);

    useEffect(() => {
        setItem({...item, ...props.item});
    }, [props.item]);

    function handleUserInput(eo) {
        props.onChanges();
        const name = eo.target.name;
        const value = eo.target.value;

        const messages = {...validationMessages};
        const fields = {...validationFields};

        switch (name) {
            case 'title':
                if (value.length <= 6) {
                    messages.title = 'длина должна быть больше 6 символов';
                    fields[name] = false;
                } else {
                    messages.title = '';
                    fields[name] = true;
                }
                break;
            case 'author' :
                if (value.length <= 6) {
                    messages.author = 'длина должна быть больше 6 символов';
                    fields[name] = false;
                } else if (value[0] !== value[0].toUpperCase()) {
                    messages.author = 'первая буква должна быть заглавной';
                    fields[name] = false;
                } else {
                    messages.author = '';
                    fields[name] = true;
                }
                break;
            case 'year':
                if (!/\b[0-9]{4}\b/.test(value)) {
                    messages.year = 'год должен состоять из 4 цифр';
                    fields[name] = false;
                } else {
                    messages.year = '';
                    fields[name] = true;
                }
                break;
            case 'url' :
                if (!/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?$/.test(value)) {
                    messages.url = 'неверный url (прим. https://test01.jpg)';
                    fields[name] = false;
                } else {
                    messages.url = '';
                    fields[name] = true;
                }
                break;
            case 'price' :
                if (!/^[0-9]+\.[0-9]{2}$/.test(value)) {
                    messages.price = 'необходимо указать копейки';
                    fields[name] = false;
                } else {
                    messages.price = '';
                    fields[name] = true;
                }
                break;
            case 'quantity' :
                if (!/^\d+$/.test(value)) {
                    messages.quantity = 'количество должно цифрой';
                    fields[name] = false;
                } else {
                    messages.quantity = '';
                    fields[name] = true;
                }
                break;
            case 'description':
                if (value.length <= 20) {
                    messages.description = 'длина должна быть более 20 символов';
                    fields[name] = false;
                } else {
                    messages.description = '';
                    fields[name] = true;
                }
        }

        setItem({...item, [name]: value});
        setValidationFields(fields);
        setValidationMessages(messages);
        setDisabled(Object.keys(fields).some(item => fields[item] === false));
    }

    function handleSave() {
        const data = {
            id: item.id,
            title: item.title,
            author: item.author,
            year: item.year,
            url: item.url,
            price: item.price,
            quantity: item.quantity,
            description: item.description
        }
        props.onSave(data);
    }

    return (
        <div className='product_form_container'>
            <form className='product_form'>
                <div className='product_form_group'>
                    <label htmlFor='title'>Title:</label>
                    <input
                        name='title'
                        type='text'
                        value={item.title}
                        onChange={handleUserInput}
                    />
                    <span className='product_form_error'>{validationMessages.title}</span>
                </div>
                <div className='product_form_group'>
                    <label htmlFor='author'>Author:</label>
                    <input
                        name='author'
                        type='text'
                        value={item.author}
                        onChange={handleUserInput}
                    />
                    <span className='product_form_error'>{validationMessages.author}</span>
                </div>
                <div className='product_form_group'>
                    <label htmlFor='year'>Year:</label>
                    <input
                        name='year'
                        type='text'
                        value={item.year}
                        onChange={handleUserInput}
                    />
                    <span className='product_form_error'>{validationMessages.year}</span>
                </div>
                <div className='product_form_group'>
                    <label htmlFor='url'>Url:</label>
                    <input
                        name='url'
                        type='text'
                        value={item.url}
                        onChange={handleUserInput}
                    />
                    <span className='product_form_error'>{validationMessages.url}</span>
                </div>
                <div className='product_form_group'>
                    <label htmlFor='price'>Price:</label>
                    <input
                        name='price'
                        type='text'
                        value={item.price}
                        onChange={handleUserInput}
                    />
                    <span className='product_form_error'>{validationMessages.price}</span>
                </div>
                <div className='product_form_group'>
                    <label htmlFor='quantity'>Quantity:</label>
                    <input
                        name='quantity'
                        type='text'
                        value={item.quantity}
                        onChange={handleUserInput}
                    />
                    <span className='product_form_error'>{validationMessages.quantity}</span>
                </div>
                <div className='product_form_group'>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        name='description'
                        rows='6'
                        value={item.description}
                        onChange={handleUserInput}
                    />
                    <span className='product_form_error'>{validationMessages.description}</span>
                </div>
                <div className='product_form_button'>
                    <button
                        type='button'
                        disabled={disabled}
                        onClick={handleSave}
                    >Save
                    </button>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Form;