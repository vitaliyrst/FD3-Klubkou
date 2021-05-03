import React, {useState} from "react";
import "./Catalog.css";
import Category from "./Category/Category";
import Item from "./Item/Item";

function Catalog(props) {
    /*const [activeCategory, setActiveCategory] = useState(null);*/

    const categoryRender = (name, onSetActiveCategory) => (
        <li className='catalog_category' onClick={onSetActiveCategory}>{name}</li>
    );

    const itemRender = (id, name) => <li className='item' key={id} >{name}</li>


    /*const handleSetActiveCategory = (id) => setActiveCategory(id);*/

    return (
        <div className='main_catalog_container'>
            <div className='catalog_container'>
                <ul>
                    <Category
                        key={'0'}
                        code={'0'}
                        name={props.items.name}
                        children={props.items.children}
                      /*  activeCategory={activeCategory}
                        onSetActiveCategory={handleSetActiveCategory}*/
                        categoryRender={categoryRender}
                        itemRender={itemRender}
                    />
                </ul>
            </div>
            <div className='items_container'>
            </div>
        </div>
    );
}

export default Catalog