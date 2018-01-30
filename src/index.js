import mix from 'laravel-mix';
import openInEditor from 'launch-editor-middleware';

mix.openInEditor = (editor = null) => {
    if (mix.config.hmr) {
        const http = process.argv.includes('--https') ? 'https' : 'http';
        const {host, port} = mix.config.hmrOptions;
        window.VUE_DEVTOOLS_CONFIG = http + '://' + host + ':' + port + '/';

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
