const mix = require('laravel-mix');
const openInEditor = require('launch-editor-middleware');

mix.openInEditor = (editor = null) => {
    if (!mix.inProduction()) {
        mix.webpackConfig({
            devServer: {
                before(app) {
                    app.use('/__open-in-editor', openInEditor(editor));
                },
            },
        });
    }

    return mix;
};
