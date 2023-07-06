import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';

const bannersSlider = new Swiper('.banners-slider', {
	modules: [Pagination, Navigation],
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
	},
	on: {
		init: function (swiper) {
			swiper.el.querySelector('.banners-button-next').classList.remove('!hidden');
			swiper.el.querySelector('.banners-button-prev').classList.remove('!hidden');
		},
	},
});

const newsSlider = new Swiper('.news-slider', {
	modules: [Grid],
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20,
			allowTouchMove: true,
			grid: {
				rows: 1,
				fill: 'row'
			},
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
			allowTouchMove: false,
			grid: {
				rows: 4,
				fill: 'row'
			},
		},
	}
})

let hitsSlider = null;
const hitsSliderOptions = {
	modules: [Grid],
	breakpoints: {
		320: {
			slidesPerView: 2.4,
			spaceBetween: 20,
			allowTouchMove: true,
			centeredSlides: true,
			initialSlide: 1,
			loop: true,
			grid: {
				rows: 1,
				fill: 'row'
			},
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 0,
			allowTouchMove: false,
			loop: false,
			grid: {
				rows: 4,
				fill: 'row'
			},
		},
	},
}

hitsSlider = new Swiper('.hits-slider', hitsSliderOptions);
let desktop = true;
window.addEventListener('resize', function(e){
	if(window.innerWidth > 767 ){
		if(desktop){
			hitsSlider.destroy(true, true);
			hitsSlider = new Swiper('.hits-slider', hitsSliderOptions);
			desktop = false;
		}
	}else{
		hitsSlider.params.loop = true;
		hitsSlider.update();
		desktop = true;
	}
})