import Swiper, { Navigation, FreeMode, Scrollbar, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const bannersSlider = new Swiper('.banners-slider', {
	modules: [Navigation, Autoplay, FreeMode, Pagination],
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

const catSlider = new Swiper('.categories-mobile-slider', {
	modules: [FreeMode, Scrollbar],
	freeMode: true,
	scrollbar: {
		el: '.categories-mobile-scrollbar',
		draggable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 7,
			spaceBetween: 20,
		},
		587: {
			slidesPerView: 9,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 12,
			spaceBetween: 20
		}
	}
})