class SliderView {
    _slides = document.querySelectorAll('.slide');
    _btnPrev = document.querySelector('.btn--prev');
    _btnNext = document.querySelector('.btn--next');
    _currentSlide = 0;
    _slideDisplay = 5;
    _maxSlide = this._slides.length;

    constructor() {
        this._goToSlide(0);
        this._btnPrev.addEventListener('click', this._prevSlide.bind(this));
        this._btnNext.addEventListener('click', this._nextSlide.bind(this));
    }

    _goToSlide(slide) {
        this._slides.forEach((s, i) => (s.style.transform = `translateX(-${100 * slide}%)`));
    }

    _nextSlide() {
        if (this._currentSlide === this._maxSlide - this._slideDisplay) {
            this._currentSlide = 0;
        } else {
            this._currentSlide++;
        }
        this._goToSlide(this._currentSlide);
    }

    _prevSlide() {
        console.log(this._currentSlide);
        if (this._currentSlide === 0) {
            this._currentSlide = this._maxSlide - this._slideDisplay;
        } else {
            this._currentSlide--;
        }
        this._goToSlide(this._currentSlide);
    }
}

export default SliderView;
