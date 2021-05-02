import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    getDiv(index) {
        return (
            <div
                key={index}
                style={{
                    border: `solid 4px ${this.props.colors[index]}`,
                    padding: '10px',
                    width: `${400 - index * 30}px`
                }}
            >
                {this.props.colors.length - 1 > index ? this.getDiv(index + 1) : this.props.children}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.getDiv(0)}
            </div>
        )
    }
}

export default RainbowFrame;