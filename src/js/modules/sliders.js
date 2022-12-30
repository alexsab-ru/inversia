import Swiper, { Navigation, FreeMode, Mousewheel, Autoplay } from 'swiper';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

const bannerSlider = new Swiper('.banner-slider', {
	modules: [Navigation, Scrollbar, Mousewheel, Autoplay],
	speed: 800,
	autoplay: {
		delay: 4000,
	},
	// mousewheel: {
	// 	invert: false,
	// },
	navigation: {
		nextEl: '.banner-button-next',
		prevEl: '.banner-button-prev',
	},
	scrollbar: {
		el: '.banner-scrollbar',
		draggable: true,
	},
});