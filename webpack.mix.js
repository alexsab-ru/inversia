let mix = require('laravel-mix');
require('mix-tailwindcss');
require('mix-html-builder');
mix
	.html({
		htmlRoot: './src/*.html',
		output: 'docs',
		partialRoot: './src/partials',
		layoutRoot: './src/layouts',
		minify: {
			removeComments: true
		}
	})
	.js('src/js/app.js', 'docs/js/app.min.js')
	.sass('src/scss/app.scss', 'docs/css/styles.min.css')
	.tailwind();



if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		server: {
			baseDir: "./docs",
		},
		files: ['docs/**/*.html', 'docs/css/styles.min.css', 'docs/js/app.min.js'],
		notify: false
	});
}

mix.disableSuccessNotifications();