module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'wwwroot/js/**/*.js'
    ],
    plugins: [
      'karma-coverage',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],
    exclude: [
    ],
    preprocessors: {
      '*.js': ['coverage'] 
    },
    reporters: ['progress','coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
          { type: 'html', subdir: 'html' },
          { type: 'lcovonly', subdir: 'lcov' },
          { type: 'cobertura', subdir: 'cobertura' }
      ]
   }
  })
}
