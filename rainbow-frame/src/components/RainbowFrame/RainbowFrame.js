import React from 'react';

export default (props) => {
    const divs = props.colors.reduce((acc, item) => (
        <div style={{border: `8px solid ${item}`, padding: '10px'}}>
            {acc}
        </div>
    ), props.children);

    return <div>{divs}</div>;
}