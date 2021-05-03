import React, {useState} from "react";
import "./Catalog.css";
import Category from "./Category/Category";
import Item from "./Item/Item";

function Catalog(props) {
    const [items, setItems] = useState([]);

    const handleSetItems = (items) => setItems(items);

    return (
        <div className='main_catalog_container'>
            <div className='catalog_container'>
                <ul>
                    <Category
                        key={'0'}
                        name={props.items.name}
                        children={props.items.children}
                        onSetItems={handleSetItems}
                    />
                </ul>
            </div>
            <div className='items_container'>
                <ul>
                    {items.length > 0 && <Item items={items}/>}
                </ul>
            </div>
        </div>
    );
}

export default Catalog