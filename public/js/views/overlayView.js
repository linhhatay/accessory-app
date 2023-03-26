class OverlayView {
    _overlayElement;

    constructor() {
        this._overlayElement = document.createElement('div');
        this._overlayElement.classList.add('overlay');
    }

    show() {
        document.body.appendChild(this._overlayElement);
    }

    hide() {
        document.body.removeChild(this._overlayElement);
    }
}

export default OverlayView;
