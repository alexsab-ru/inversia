import Swiper, { Navigation, Grid, Scrollbar, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const bannersSlider = new Swiper('.banners-slider', {
	modules: [Navigation, Autoplay, Pagination],
	speed: 800,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.banners-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.banners-button-next',
		prevEl: '.banners-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 10,
		},
		587: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	}
});

const hitsSlider = new Swiper('.hits-slider', {
	modules: [Scrollbar, Grid],
	breakpoints: {
		320: {
			slidesPerView: 2.2,
			spaceBetween: 20,
			centeredSlides: true,
			initialSlide: 1,
			grid: {
				rows: 1,
				fill: 'row'
			},
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 0,
			// centeredSlides: false,
			// initialSlide: 0,
			allowTouchMove: false,
			grid: {
				rows: 2,
				fill: 'row'
			},
		},
	}
})

const scrollbar = document.querySelector('.custom-scrollbar');
scrollbar.addEventListener('scroll', function(e) {
	if(this.scrollHeight < this.scrollTop + this.clientHeight + 10){
		this.closest('.categories-mobile-list').classList.add('end');
	}else{
		this.closest('.categories-mobile-list').classList.remove('end');
	}
})