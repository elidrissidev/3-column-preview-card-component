const { dest, src, parallel } = require('gulp')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-htmlmin')

const html = () => src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('dist'))

const css = () => src('src/*.css')
  .pipe(cleanCSS())
  .pipe(dest('dist'))

const images = () => src('images/*')
  .pipe(dest('dist/images'))

exports.default = parallel(html, css, images)
