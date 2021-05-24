import React from 'react';

const withRainbowFrame = (colors) => (Component) => (props) => (
    colors.reduce((acc, item) => (
        <div style={{border: `8px solid ${item}`, padding: '10px'}}>
            {acc}
        </div>
    ), <Component {...props} />)
);

export default withRainbowFrame;