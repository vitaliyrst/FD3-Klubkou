let Items = React.createClass(
    {
        displayName: 'Items',

        propTypes: {
            shopName: React.PropTypes.string.isRequired,
            books: React.PropTypes.arrayOf(
                React.PropTypes.shape({
                    url: React.PropTypes.string.isRequired,
                    title: React.PropTypes.string.isRequired,
                    author: React.PropTypes.string.isRequired,
                    year: React.PropTypes.number,
                    price: React.PropTypes.number.isRequired,
                    quantity: React.PropTypes.number.isRequired,
                    code: React.PropTypes.number.isRequired,
                })
            )
        },

        render: function () {
            let booksTable = this.props.books.map((book) =>
                React.DOM.tr({key: book.code, className: 'Book'},
                    React.DOM.td({className: 'Title'}, book.title),
                    React.DOM.td({className: 'Info'}, `${book.author}, ${book.year}`),
                    React.DOM.td({className: 'Image', style: {backgroundImage: `url("${book.url}")`}}),
                    React.DOM.td({className: 'Stock'}, `Цена: ${book.price}, осталось: ${book.quantity}`),
                )
            );

            return React.DOM.div(
                {className: 'Shop'}, React.DOM.h2({className: 'ShopName'}, this.props.shopName),
                React.DOM.table(
                    {className: 'BooksTable'}, React.DOM.tbody(null, booksTable)
                )
            )
        },
    }
);