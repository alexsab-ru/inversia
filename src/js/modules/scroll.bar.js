const scrollbar = document.querySelector('.custom-scrollbar');
scrollbar.addEventListener('scroll', function(e) {
	if(this.scrollHeight < this.scrollTop + this.clientHeight + 10){
		this.closest('.categories-mobile-list').classList.add('end');
	}else{
		this.closest('.categories-mobile-list').classList.remove('end');
	}
})