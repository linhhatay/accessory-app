class SliderView {
    _slides = document.querySelector('.featured-products');
    _slide = document.querySelectorAll('.product-box');
    _parentElement = document.querySelector('.featured-products');
    _btnPrev = document.querySelector('.btn--prev');
    _btnNext = document.querySelector('.btn--next');
    _slideMargin = parseInt(getComputedStyle(this._slide[0]).marginRight);
    _slideTotalWidth = this._slide[0].clientWidth + this._slideMargin;
    _visibleSlidesWidth = 1 * this._slideTotalWidth - this._slideMargin;
    _currentSlide = 0;
    _maxSlide = this._slides.length;

    constructor() {
        // this._goToSlide();
        // this._slides.forEach((s, i) => (s.style.transform = `translateX(${0 * (i - slide)}%)`));
        this._btnPrev.addEventListener('click', this._prevSlide.bind(this));
        this._btnNext.addEventListener('click', this._nextSlide.bind(this));
        this._slides.style.transform = `translateX(-${this._slideTotalWidth * this._currentSlide}px)`;
    }

    _goToSlide(slide) {
        // this._slides.forEach((s, i) => (s.style.transform = `translateX(-${slide * this._slides[0].clientWidth}px)`));
        // this._slides.style.transform = `translateX(-${this._slideTotalWidth * this._currentSlide}px)`;
    }

    // Next slide
    _nextSlide() {
        console.log(this);
        this._currentSlide++;
        if (this._currentSlide >= this._maxSlide) {
            this._currentSlide = 0;
        }

        if (this._currentSlide === this._maxSlide - 3) {
            this._currentSlide = -1;
        }

        // this._goToSlide(this._currentSlide);
        this._slides.style.transform = `translateX(-${this._visibleSlidesWidth * this._currentSlide}px)`;
    }

    _prevSlide() {
        // if (this._currentSlide === 0) {
        //     this._currentSlide = this._maxSlide - 1;
        // } else {
        //     this._currentSlide--;
        // }
        // this._goToSlide(this._currentSlide);
    }
}

export default SliderView;
