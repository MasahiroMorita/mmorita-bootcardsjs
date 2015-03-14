Package.describe({
  name: 'mmorita:bootcardsjs',
  version: '1.1.1',
  // Brief, one-line summary of the package.
  summary: 'bootcards.js for Meteor - A cards-based UI framework for mobile and desktop apps',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/MasahiroMorita/mmorita-bootcardsjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('twbs:bootstrap@3.3.2', 'client');
  api.addFiles('bootcards-1.1.0/dist/css/bootcards-desktop-lite.min.css', 'web.browser');
  api.addFiles('bootcards-1.1.0/dist/css/bootcards-ios-lite.min.css', 'web.cordova');

  api.addFiles('bootcards-1.1.0/dist/fonts/icomoon.eot', 'client');
  api.addFiles('bootcards-1.1.0/dist/fonts/icomoon.svg', 'client');
  api.addFiles('bootcards-1.1.0/dist/fonts/icomoon.ttf', 'client');
  api.addFiles('bootcards-1.1.0/dist/fonts/icomoon.woff', 'client');

  api.addFiles('bootcards-1.1.0/dist/js/bootcards.min.js', 'client');
  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mmorita:bootcardsjs');
  api.addFiles('bootcardsjs-tests.js');
});
