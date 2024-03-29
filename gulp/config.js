var config = {
  'fonts': {
    'src': [
      './src/fonts/**/*'
    ],
    'dest': './dist/fonts'
  },
  'images': {
    'src': [
      './src/img/**/*.{gif,ico,png,jpg,jpeg,svg}'
    ],
    'dest': './dist/img'
  },
  'media': {
    'src': [
      './src/media/**/*.{mp3,mp4}'
    ],
    'dest': './dist/media'
  },
  'html': {
    'src': [
      './src/index.pug'
    ],
    'dest': 'dist'
  },
  'scripts': {
    'lint': {
      'src': [
        './src/js/**/*.js'
      ]
    },
    'build': {
      'src': [
        './src/js/main.js'
      ],
      'dest': './dist/js'
    }
  },
  'styles': {
    'lint': {
      'src': [
        './src/css/**/*.{css,scss,sass}'
      ]
    },
    'build': {
      'src': [
        './src/css/**/*.{css,scss,sass}'
      ],
      'dest': './dist/css'
    }
  }
};

module.exports = config;
