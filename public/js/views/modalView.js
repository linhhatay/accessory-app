import View from './View';

class ModalView {
    _parentElement = document.querySelector('.cart-popup');
    _overlay = document.querySelector('.overlay');
    _btnOpenCart = document.querySelector('.header__cart');
    _btnCloseCart = document.querySelector('.close-cart-popup');

    constructor() {
        this._btnOpenCart.addEventListener('click', this._openModal.bind(this));
        this._overlay.addEventListener('click', this._closeModal.bind(this));
        this._btnCloseCart.addEventListener('click', this._closeModal.bind(this));
        document.addEventListener('keydown', this._closeModal.bind(this));
    }

    _openModal() {
        this._parentElement.classList.remove('hidden');
        this._overlay.classList.remove('hidden');
    }

    _closeModal(e) {
        this._parentElement.classList.add('hidden');
        this._overlay.classList.add('hidden');

        if (e.key === 'Escape' && !this._parentElement.classList.contains('hidden')) {
            this._closeModal();
        }
    }
}

export default ModalView;
