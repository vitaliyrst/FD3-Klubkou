import React, {useState, useEffect} from "react";
import "./Products.css";
import Product from "./Product/Product";
import Card from "./Card/Card";
import Form from "./Form/Form";

function Products() {
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState(null);
    const [card, setCard] = useState(null);
    const [form, setForm] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        const url = 'https://fe.it-academy.by/AjaxStringStorage2.php';
        const name = 'KLUBKOU_TEST_REACT';
        const headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        const params = new URLSearchParams();
        params.append('f', 'READ');
        params.append('n', name);

        const options = {
            method: 'POST',
            headers: headers,
            body: params
        }

        fetch(url, options)
            .then(response => response.json())
            .then((result) => {
                setProducts((JSON.parse(result.result)));
            })
            .catch(error => console.log(error));
    }, []);

    function handleChanges() {
        setIsEdit(true);
    }

    function handleSelected(id) {
        setSelected(id);
        setCard(id);
        setForm(null);
    }

    function handleSave(data) {
        let items;

        if (form === 'edit') {
            items = products.map(item => (item.id === data.id) ? data : item);
        } else {
            items = products;
            items.push(data);
        }

        setProducts(items);
        setForm(null);
        setSelected(data.id);
        setCard(data.id);
        setIsEdit(false);
    }

    function handleCancel() {
        setForm(null);
        setSelected(null);
        setIsEdit(false);
    }

    function handleSetForm(id) {
        if (id !== null) {
            setForm('edit')
            setSelected(id);

        } else {
            setForm('add');
            setIsEdit(true);
        }
        setCard(null);
    }

    function handleRemove(id) {
        const filtered = products.filter(item => item.id !== id);
        console.log(filtered)
        setProducts(filtered);
        setSelected(null);
        setCard(null)
    }

    return (
        <div className='main_products_container'>
            <div className='products_table_container'>
                <table className='products_table'>
                    <caption className='products_table_caption'>Products</caption>
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
                    {products.map(item =>
                        <Product
                            key={item.id}
                            item={item}
                            selected={selected === item.id}
                            onSelected={handleSelected}
                            onSetForm={handleSetForm}
                            onRemove={handleRemove}
                            disabled={isEdit}
                        />)}
                    </tbody>
                </table>
                <button
                    className='products_add_button'
                    disabled={form === 'edit' || isEdit}
                    onClick={() => {
                        handleSetForm(null)
                    }}>Add New Product
                </button>
            </div>
            <div className='products_aside'>
                {card !== null && <Card item={products.find(item => item.id === card)}/>}
                {form !== null && <Form
                    item={products.find(item => item.id === selected) || ''}
                    disabled={isEdit}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    onChanges={handleChanges}
                />}
            </div>
        </div>
    );
}

export default Products;