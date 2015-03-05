# Slimming

> An agile command line image optimizer tool.

## How It Works

Slimming uses the `imagemin` npm module with Grunt to automatically compress multiple images locally.

## Getting Started

Just clone the git repo — `git clone https://github.com/renansan/slimming.git` and compress your images! :smile:

This tool requires some stuffs installed:

* [Nodejs](//nodejs.org/download) and [npm](//npmjs.com)
* [Grunt](//gruntjs.com/getting-started)
* [Imagemin](//github.com/gruntjs/grunt-contrib-imagemin)

### NodeJs and npm

Node and npm (Node Package Manager) are required, among other cool things, for installing and running Grunt tasks.

Node can be downloaded on [its official website](//nodejs.org/download) (npm comes with Node).

### Grunt

Grunt is a JavaScript task runner for automation of repetitive tasks like minification, compilation, testing, linting, etc. In Slimming it's used to run the [imagemin](//github.com/gruntjs/grunt-contrib-imagemin 'grunt-contrib-imagemin: "Minify images."') task, the module used to compress the images.

You need to install Nodejs and run `npm install -g grunt-cli` (you may need to use sudo or run it as administrator) to install globlally both Grunt command line tools and Bower.

#### imagemin

The `grunt-contrib-imagemin` module works with major formats: JPG, PNG, GIF and SVG. It provides some options for the compression, see [the module documentation](//github.com/gruntjs/grunt-contrib-imagemin) for more details.

Once you have installed both Node.js (and npm) and Grunt, you need to run `npm install` on the Slimming directory to install the `grunt-contrib-imagemin` module.

## Usage

The input images should be placed in `src` directory and, after running `grunt` on command line, the optimized images should be generated in `dist` directory, as simple as that.

> The `src` images are automatically **deleted** after the process, so **always keep a copy of the original files**.

## License

Slimming is free to use under [MIT License](LICENSE.md).

## Changelog

* 2015-03-04 &nbsp;&nbsp;&nbsp; v0.1.0 &nbsp;&nbsp;&nbsp; Initial release.
