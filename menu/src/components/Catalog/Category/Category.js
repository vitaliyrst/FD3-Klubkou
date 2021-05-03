import React, {useState} from "react";
import "./Category.css";

function Category(props) {
    const [active, setActive] = useState(false);
    const [nodesCategory, setNodesCategory] = useState(props.children.filter(item => item.type === 'CATEGORY'));
   /* const [nodesItem, setNodesItem] = useState(props.children.filter(item => item.type === 'ITEM'));
*/
    const handleClicked = () => {
        setActive(!active)
        /*props.onSetActiveCategory(props.code);*/
    }
    console.log(props)
    const getChildren = () => (
        <ul>
            {
                nodesCategory.map((item, index) => (
                    <Category
                        key={`${props.code}${index + 1}`}
                        code={`${props.code}${index + 1}`}
                        name={item.name}
                        children={item.children}
                        /*onSetActiveCategory={props.onSetActiveCategory}*/
                        categoryRender={props.categoryRender}
                        itemRender={props.itemRender}
                    />
                ))}
        </ul>
    );

   /* const getItems = () => (
        nodesItem.map((item, index) => props.itemRender(index, item.name, false))
    )*/

    return (
        <>
            {props.categoryRender(props.name, handleClicked)}
            {active && nodesCategory.length > 0 && getChildren()}
           {/* {active && nodesItem.length > 0 && getItems()}*/}
        </>
    );
}

export default Category;