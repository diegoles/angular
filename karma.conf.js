module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
	browsers: ['PhantomJS'],
	files: [
      '../bower_components/jquery/dist/jquery.js',
	  '../bower_components/angular/angular.js',
	  '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/bootstrap/dist/js/bootstrap.js',
      '../bower_components/angular-animate/angular-animate.js',
      '../bower_components/angular-aria/angular-aria.js',
      '../bower_components/angular-resource/angular-resource.js',
      '../bower_components/angular-messages/angular-messages.js',
      '../bower_components/angular-cookies/angular-cookies.js',
      '../bower_components/angular-sanitize/angular-sanitize.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-touch/angular-touch.js',
      '../app/scripts/*.js',
      '../app/scripts/**/*.js',
      '../test/*.js',
	  '../test/**/*.js',
	]
  });
};