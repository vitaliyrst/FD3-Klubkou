import React, {useState, useEffect} from "react";
import "./Products.css";
import books from "./books.json";

function Products(props) {
    const [products, setProducts] = useState(books)

    products.map(item => {
        console.log(item)
    })

    useEffect(() => {
        document.title = `Вы нажали ${products} раз`;
    });

    return (
        <div>Products</div>
    );
}

export default Products;