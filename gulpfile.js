// webpack

const elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 |  Configuring Elixir default path
 |--------------------------------------------------------------------------
 */

elixir.config.assetsPath = './src';
elixir.config.js.folder  = './';
/*
 |--------------------------------------------------------------------------
 |  Loading up application specific requirement
 |--------------------------------------------------------------------------
 */

elixir((mix) => {
    mix
    .webpack('main.js', 'dist/myfirebase.js')
});