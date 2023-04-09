import ProductModal from './models/productModal';
import modalView from './views/modalView';
import overlayView from './views/overlayView';
import searchView from './views/searchView';
import SliderView from './views/sliderView';
const modal = new modalView();
// const model = new ProductModal();

class App {
    _menuElement = document.querySelector('.header__menu');
    _menuList = document.querySelector('.header__menu-list');
    _overlay = new overlayView();

    constructor() {
        if (document.querySelector('.slides')) {
            const slider = new SliderView();
        }
        this._app();
        searchView.addHandlerSearch();
        this._menuElement.addEventListener('mouseover', this._onOverlay.bind(this));
        this._menuList.addEventListener('mouseover', this._onOverlay.bind(this));
        this._menuElement.addEventListener('mouseout', this._offOverlay.bind(this));
    }

    _onOverlay() {
        this._overlay.show();
        this._overlay._overlayElement.style.top = '80';
    }

    _offOverlay() {
        this._overlay.hide();
        this._overlay._overlayElement.style.top = '0';
    }

    _app() {
        if (document.querySelector('.btn')) {
            const btnMinus = document.querySelector('.btn--minus');
            const btnPlus = document.querySelector('.btn--plus');
            const quantity = document.querySelector('.quantity-select');
            const cartPopup = document.querySelector('.cart-popup');
            const cartContent = cartPopup.querySelector('.cart-popup-content');
            const overlay = document.querySelector('.overlay');

            btnMinus.addEventListener('click', () => {
                if (quantity.value > 1) {
                    quantity.value--;
                }
            });

            btnPlus.addEventListener('click', () => {
                quantity.value++;
            });
        }
    }
}

const app = new App();
