import Swiper, { Navigation, FreeMode, Mousewheel, Autoplay } from 'swiper';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

const bannersSlider = new Swiper('.banners-slider', {
	modules: [Navigation, Autoplay],
	speed: 800,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	navigation: {
		nextEl: '.banners-button-next',
		prevEl: '.banners-button-prev',
	},
});