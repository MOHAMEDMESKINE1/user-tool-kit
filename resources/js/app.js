import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import "primevue/resources/themes/aura-light-blue/theme.css"
import Tooltip from 'primevue/tooltip';
import PrimeVue from "primevue/config";
import 'primeicons/primeicons.css'
import VueClickAway from "vue3-click-away";


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(VueClickAway) // Makes 'v-click-away' directive usable in every component
            .use(PrimeVue,{
                unstyled: false,
            })

            .directive('Tooltip',Tooltip)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
