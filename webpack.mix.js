let mix = require('laravel-mix');
require('mix-tailwindcss');
mix
	.js('src/js/app.js', 'assets/js/app.min.js')
	.sass('src/scss/app.scss', 'assets/css/styles.min.css')
	.tailwind()
	.setPublicPath('/');



if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		server: {
			baseDir: "./",
		},
		files: ['**/*.html', 'assets/css/styles.min.css', 'assets/js/app.min.js'],
		notify: false
	});
}

mix.disableSuccessNotifications();