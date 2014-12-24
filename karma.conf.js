module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],
    files: [
      'src/StringCalculator.js',
      'spec/StringCalculatorSpec.js'
    ],
    browsers: ['PhantomJS'],

    reporters: ['progress', 'coverage'],
    preprocessors: { 'src/StringCalculator.js': ['coverage'] },

    singleRun: true
  });
};
