const { src, dest, parallel, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const rename = require('gulp-rename');

// DEV
const clean = () => {
  return del(['dist/*'])
}

const fonts = () => {
  return src([
    'src/fonts/**/*.woff',
    'src/fonts/**/*.woff2'
  ])
    .pipe(dest('dist/fonts'))
}

const styles = () => {
  return src('src/css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      cascade: false,
      grid: true,
      flexbox: true,
    }))
    .pipe(dest('dist/css'))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
};

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist'))
}

const html = () => {
  return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src([
    'src/js/**/*.js',
  ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('script.js'))
    .pipe(uglify({
      toplevel: true,
    }).on('error', notify.onError()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    notify: false,
  })
}

const images = () => {
  return src([
    'src/img/**/*.webp',
    'src/img/**/*.svg'
  ])
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream())
}

watch('src/**/*.html', html);
watch('src/css/**/*.css', styles);
watch('src/js/**/*.js', scripts);
watch('src/resources/**', resources);
watch([
  'src/img/**/*.jpg',
  'src/img/**/*.png',
  'src/img/**/*.jpeg',
], images);

exports.clean = clean;
exports.fonts = fonts;
exports.styles = styles;
exports.html = html;
exports.scripts = scripts;
exports.images = images;
exports.default = series(clean, parallel(html, scripts, fonts, resources, images), styles, watchFiles);

// BUILD
const htmlBuild = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const stylesBuild = () => {
  return src('src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      cascade: false,
      grid: true,
      flexbox: true,
    }))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
};

exports.build = series(clean, parallel(htmlBuild, scripts, fonts, resources, images), stylesBuild, watchFiles);
