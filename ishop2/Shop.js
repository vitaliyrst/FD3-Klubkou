let Shop = React.createClass({
    displayName: 'Shop',

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        books: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                title: React.PropTypes.string.isRequired,
                author: React.PropTypes.string.isRequired,
                year: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                quantity: React.PropTypes.number.isRequired,
            })
        ),
    },

    getInitialState: function () {
        return {
            books: this.props.books,
            isClicked: 0,
        }
    },

    clickedItem: function (id) {
        this.setState({isClicked: id}, null);
    },

    removeItem: function (id, title) {
        if (confirm(`Вы хотите удалить ${title.toUpperCase()}?`)) {
            let filtered = this.state.books.filter(book => book.code !== id);
            this.setState({books: filtered}, null);
        }
    },

    render() {
        let books = this.state.books.map(book =>
            React.createElement(Product, {
                key: book.code,
                id: book.code,
                author: book.author,
                year: book.year,
                title: book.title,
                url: book.url,
                price: book.price,
                quantity: book.quantity,
                remove: this.removeItem,
                clicked: this.clickedItem,
                isClicked: book.code === this.state.isClicked,
            })
        );

        return React.DOM.div({className: 'shop'},
            React.DOM.table({className: 'shop_table'},
                React.DOM.caption({className: 'shop_name'}, this.props.shopName),
                React.DOM.tbody(null,
                    React.DOM.tr({className: 'shop_column_name'},
                        React.DOM.th(null, 'Title'),
                        React.DOM.th(null, 'Author'),
                        React.DOM.th(null, 'Year'),
                        React.DOM.th(null, 'Url'),
                        React.DOM.th(null, 'Price'),
                        React.DOM.th(null, 'Quantity'),
                        React.DOM.th(null, 'Control'),
                    ),
                    books
                )
            )
        )
    }
});