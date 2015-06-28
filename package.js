Package.describe({
    name: 'bixin:meteor-plyr',
    summary: 'A simple, accessible HTML5 media player.',
    version: '0.0.3',
    git: 'https://github.com/wbashir/meteor-plyr'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use('jquery', 'client');

    var path = Npm.require('path');
    var assetPath = path.join('files/sprite/');

    api.addFiles('files/plyr.css', 'client');
    api.addFiles('files/plyr.js', 'client');
    api.addFiles('sprite.svg', 'client');
    //var assetFiles = [
    //    assetPath + 'icon-captions-off.svg',
    //    assetPath + 'icon-captions-on.svg',
    //    assetPath + 'icon-enter-fullscreen.svg',
    //    assetPath + 'icon-exit-fullscreen.svg',
    //    assetPath + 'icon-fast-forward.svg',
    //    assetPath + 'icon-muted.svg',
    //    assetPath + 'icon-pause.svg',
    //    assetPath + 'icon-play.svg',
    //    assetPath + 'icon-restart.svg',
    //    assetPath + 'icon-rewind.svg',
    //    assetPath + 'icon-volume.svg'
    //];
    //api.add_files(assetFiles, 'client');

});
