Package.describe({
    name: 'bixin:meteor-plyr',
    summary: 'A simple, accessible HTML5 media player.',
    version: '0.0.1',
    git: 'https://github.com/warsamebashir/meteor-plyr'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use('jquery', 'client');

    api.addFiles('files/plyr.css', 'client');
    api.addFiles('files/plyr.js', 'client');
    api.addFiles('files/sprite.svg', 'client');

});