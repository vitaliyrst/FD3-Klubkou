import React from "react";

export default (props) => {
    const textArray = props.text.split(/<br\s?\/?>/g);

    return (
        <div className='br2jsx'>
            {textArray.map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                    {textArray.length - 1 === index ? null : <br/>}
                </React.Fragment>
            ))}
        </div>
    );
}