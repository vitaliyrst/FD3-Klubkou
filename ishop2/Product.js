let Product = React.createClass({
    displayName: 'Product',

    propTypes: {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        year: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        quantity: React.PropTypes.number.isRequired,
        remove: React.PropTypes.func,
        clicked: React.PropTypes.func,
        isClicked: React.PropTypes.bool,
    },

    clicked: function () {
        this.props.clicked(this.props.id);
    },

    remove: function () {
        this.props.remove(this.props.id, this.props.title);
    },

    render: function () {
        let bgBook = this.props.isClicked ? {backgroundColor: 'orange'} : null;

        return React.DOM.tr({
                className: 'product_row',
                style: bgBook,
                onClick: this.clicked,
            },
            React.DOM.td(null, this.props.title),
            React.DOM.td(null, this.props.author),
            React.DOM.td(null, this.props.year),
            React.DOM.td(null, React.DOM.a({href: this.props.url},
                React.DOM.span({className: 'product_image', style: {backgroundImage: `url("${this.props.url}"`}}))),
            React.DOM.td(null, this.props.price),
            React.DOM.td(null, this.props.quantity),
            React.DOM.td(null, React.DOM.button(
                {className: 'product_remove', type: 'button', value: this.props.id, onClick: this.remove}, 'Remove')),
        )
    }
});