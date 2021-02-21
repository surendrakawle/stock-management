const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');
mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/bootstrap.js', 'public/js')
    //  .js('resources/plugins/jquery/jquery.min.js', 'public/js')
    //  .js('resources/plugins/bootstrap/js/bootstrap.js', 'public/js')
    //  .js('resources/plugins/bootstrap-select/js/bootstrap-select.js', 'public/js')
    //  .js('resources/plugins/jquery-slimscroll/jquery.slimscroll.js', 'public/js')
    //  .js('resources/plugins/node-waves/waves.js', 'public/js')
    //  .js('resources/plugins/jquery-countto/jquery.countTo.js', 'public/js')
    //  .js('resources/plugins/raphael/raphael.js', 'public/js')
    //  .js('resources/plugins/morrisjs/morris.js', 'public/js')
    //  .js('resources/plugins/chartjs/Chart.bundle.js', 'public/js')
    //  .js('resources/plugins/flot-charts/jquery.flot.js', 'public/js')
    //  .js('resources/plugins/flot-charts/jquery.flot.resize.js', 'public/js')
    //  .js('resources/plugins/flot-charts/jquery.flot.pie.js', 'public/js')
    //  .js('resources/plugins/flot-charts/jquery.flot.categories.js', 'public/js')
    //  .js('resources/plugins/jquery-sparkline/jquery.sparkline.js', 'public/js')
    //  .js('resources/plugins/flot-charts/jquery.flot.time.js', 'public/js')
    //  .js('resources/js/js/admin.js', 'public/js')
    //  .js('resources/js/js/pages/index.js', 'public/js')
    //  .js('resources/js/js/demo.js', 'public/js')
    //  .css('resources/plugins/bootstrap/css/bootstrap.css', 'public/css')
    //  .css('resources/plugins/node-waves/waves.css', 'public/css')
    //  .css('resources/plugins/animate-css/animate.css', 'public/css')
    //  .css('resources/plugins/morrisjs/morris.css', 'public/css')
    //  .css('resources/css/style.css', 'public/css')
    //  .css('resources/css/themes/all-themes.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css');