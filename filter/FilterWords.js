let FilterWords = React.createClass({
    displayName: 'FilterWords',

    propTypes: {
        words: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                word: React.PropTypes.string.isRequired,
            })
        ),
    },

    getInitialState: function () {
        return {
            searchedText: '',
            isSorted: false,
            words: this.props.words,
        }
    },

    sortWords: function (eo) {
        let isChecked = eo.target.checked;
        let newWords = this.props.words.concat();

        let sortedWords = (isChecked) ?
            newWords.sort((a, b) => a.word > b.word ? 1 : a.word < b.word ? -1 : 0) :
            this.props.words;

        this.setState({isSorted: isChecked, words: sortedWords});
    },

    searchWords: function (eo) {
        let letter = eo.target.value;

        let searchedWords = (letter) ?
            this.props.words.filter((item) => item.word.includes(letter)) :
            this.props.words;

        this.setState({searchedText: letter, words: searchedWords});
    },

    resetFilter: function (eo) {
        console.log('Reset', eo.target);
        this.setState({searchedText: '', isSorted: false, words: this.props.words}, null);
    },

    render: function () {
        let words = this.state.words.map((item) => {
            return React.DOM.option({key: item.code, className: 'Word', value: item.code}, item.word);
        });

        let menu = React.DOM.div({className: 'Menu'},
            React.DOM.input({
                className: 'Menu Sort', type: 'checkbox', checked: this.state.isSorted, onClick: this.sortWords
            }),
            React.DOM.input({
                className: 'Menu Search', type: 'text', value: this.state.searchedText, onChange: this.searchWords
            }),
            React.DOM.button({className: 'Menu Reset', type: 'button', onClick: this.resetFilter}, 'Сброс'),
        );

        let wordsList = React.DOM.select({className: 'Words', size: 7, width: '500px'}, words);

        return React.DOM.div({className: 'Filter'}, menu, wordsList);
    }
});