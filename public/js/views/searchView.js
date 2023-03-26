class SearchView {
    _parentElement = document.querySelector('.header__search-form');
    _inputElement = document.querySelector('.search__field');
    _tooltip = document.querySelector('.tooltip');

    constructor() {
        this._inputElement.addEventListener('focus', () => {
            const rect = this._parentElement.getBoundingClientRect();
            this._tooltip.style.display = 'block';
            this._tooltip.style.top = rect.top + rect.height;
            this._tooltip.style.left = rect.left;
            this._tooltip.style.width = this._inputElement.offsetWidth;
        });

        this._inputElement.addEventListener('blur', () => {
            this._tooltip.style.display = 'none';
        });
    }

    getQuery() {
        const query = this._inputElement.value;
        this._clearInput();
        return query;
    }

    _clearInput() {
        this._parentElement.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handler) {
        // this._parentElement.addEventListener('submit', function (e) {
        //     e.preventDefault();
        //     handler();
        // });
    }
}

export default new SearchView();
