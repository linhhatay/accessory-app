import modalView from './views/modalView';

const modal = new modalView();

class App {
    _menuElement = document.querySelector('.header__menu');
    _menuList = document.querySelector('.header__menu-list');
    _overlay = document.querySelector('.overlay');

    constructor() {
        this._menuElement.addEventListener('mouseover', this._onOverlay.bind(this));
        this._menuList.addEventListener('mouseover', this._onOverlay.bind(this));
        this._menuElement.addEventListener('mouseout', this._offOverlay.bind(this));
    }

    _onOverlay() {
        this._overlay.classList.remove('hidden');
        this._overlay.style.top = '70';
    }

    _offOverlay() {
        this._overlay.classList.add('hidden');
        this._overlay.style.top = '0';
    }
}

const app = new App();
