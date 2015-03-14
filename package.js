Package.describe({
  name: 'mmorita:bootcardsjs',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'bootcards.js - A cards-based UI framework for mobile and desktop apps, built on top of Bootstrap',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.0');
  api.use('twbs:bootstrap', 'client');
  api.addFiles('bootcards-1.1.0/bootcardsjs.js', 'client');
  api.addFiles('bootcards-1.1.0/dist/css/bootcards-desktop-lite.min.css', 'web.browser');
  api.addFiles('bootcards-1.1.0/dist/css/bootcards-ios-lite.min.css', 'web.cordova');

  api.addFiles('bootcards-1.1.0/dist/fonts/icomoon.eot', 'client');
  api.addFiles('bootcards-1.1.0/dist/fonts/icomoon.svg', 'client');
  api.addFiles('bootcards-1.1.0/dist/fonts/icomoon.ttf', 'client');
  api.addFiles('bootcards-1.1.0/dist/fonts/icomoon.woff', 'client');

  api.addFiles('bootcards-1.1.0/dist/js/bootcards.js', 'client');
  api.addFiles('bootcards-1.1.0/dist/js/bootcards.min.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mmorita:bootcardsjs');
  api.addFiles('bootcardsjs-tests.js');
});
