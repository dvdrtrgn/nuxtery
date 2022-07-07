import path from 'path';
import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
    defaults: {},
    hooks: {
        'components:dirs' (dirs) {
            dirs.push({
                path: path.resolve(__dirname, './components'),
            });
        },
        'autoImports:dirs' (dirs) {
            dirs.push(path.resolve(__dirname, './composables'));
        },
    },
});
