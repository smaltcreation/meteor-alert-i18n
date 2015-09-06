Package.describe({
    name: 'smaltcreation:alert-i18n',
    version: '0.0.1',
    summary: 'Display an adapted SweetAlert for i18n translations.',
    git: 'https://github.com/SmaltCreation/meteor-alert-i18n.git',
    documentation: 'README.md'
});

Npm.depends({
    'underscore': '1.8.3',
    'sweetalert': '1.1.0'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.use([
        'templating'
    ], 'client');
    api.use([
        'tap:i18n@1.0.7'
    ], ['client', 'server']);
    api.addFiles([
        'package-tap.i18n',
        'i18n/en.i18n.json',
        'i18n/fr.i18n.json'
    ], ['client', 'server']);
    api.addFiles('alert-i18n.js');
    api.export('Alert', 'client');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('smaltcreation:alert-i18n');
    api.addFiles('alert-i18n-tests.js');
});