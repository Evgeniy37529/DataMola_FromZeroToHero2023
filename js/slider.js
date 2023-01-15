const bodyWidth = document.querySelector('body').clientWidth;

export class Slider {
    constructor(sliderList ,slides, quantitySlides) {
        this.sliderList = sliderList;
        this.sliderItems = slides;
        this.quantitySlides = quantitySlides;
        this.indexSlide = 0;
        this.maxIndexSlide = this.sliderItems.length;
        this.jumpSlide = this.indexSlide === this.maxIndexSlide - 1 ? 1 : this.quantitySlides;
        if (bodyWidth < 500) {
            this.jumpSlide = 3
        }

        console.log(this.maxIndexSlide)
    }
    
    showSlide(index) {
        this.sliderItems.forEach(slide => {
            this.sliderList.style.transform = `translateX(${-(slide.offsetWidth + 20) * index}px)`;
            slide.style.flexBasis = `${90 / this.quantitySlides}%`;
        })
    }

    setSlide(numberSlide) {

        if (numberSlide > this.maxIndexSlide - this.jumpSlide) {
            this.indexSlide = 0;
        } else if (numberSlide < 0) {
            this.indexSlide = this.maxIndexSlide - this.jumpSlide;
        } else {
            this.indexSlide = numberSlide;
        }
    }

    nextSlide() {
        this.setSlide(this.indexSlide + 1);
        this.showSlide(this.indexSlide);
    }

    prevSlide() {
        this.setSlide(this.indexSlide - 1);
        this.showSlide(this.indexSlide)
    }
}
