import overlayView from './overlayView';
class ModalView {
    _parentElement = document.querySelector('.cart-popup');
    _overlay = new overlayView();
    _btnOpenCart = document.querySelector('.header__cart');
    _btnCloseCart = document.querySelector('.close-cart-popup');

    constructor() {
        this._overlay._overlayElement.addEventListener('click', this._closeModal.bind(this));
        this._btnOpenCart.addEventListener('click', this._openModal.bind(this));
        this._btnCloseCart.addEventListener('click', this._closeModal.bind(this));
    }

    _openModal() {
        this._parentElement.classList.remove('hidden');
        this._overlay.show();
        document.addEventListener('keydown', this._handleKeyDown.bind(this));
    }

    _closeModal() {
        this._parentElement.classList.add('hidden');
        this._overlay.hide();
        document.removeEventListener('keydown', this._handleKeyDown.bind(this));
    }

    _handleKeyDown(e) {
        if (e.key === 'Escape' && !this._parentElement.classList.contains('hidden')) {
            this._closeModal();
        }
    }
}

export default ModalView;
