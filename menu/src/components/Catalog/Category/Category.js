import React, {useState} from "react";
import "./Category.css";

function Category(props) {
    const [active, setActive] = useState(false);
    console.log(props)
    const nodesCategory = props.children.filter(item => item.type === 'CATEGORY');
    const nodesItem = props.children.filter(item => item.type === 'ITEM');

    const handleClicked = () => {
        if (nodesItem.length > 0 && active) {
            props.onSetItems(nodesItem);
        } else {
            setActive(!active);
            props.onSetItems((!active) ? nodesItem : []);
        }
    }

    const getChildren = () => (
        <ul>
            {
                nodesCategory.map((item, index) => (
                    <Category
                        key={`${props.code}${index + 1}`}
                        name={item.name}
                        children={item.children}
                        onSetItems={props.onSetItems}
                    />
                ))}
        </ul>
    );

    return (
        <>
            <li
                className={props.children.length === 0 ? 'catalog_category' :
                    active ? 'catalog_category down' : 'catalog_category right'}
                onClick={handleClicked}
            >
                {props.name}
            </li>
            {active && nodesCategory.length > 0 && getChildren()}
        </>
    );
}

export default Category;