import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#5064CC',
                secondary: '#646464',
                heading: '#2B2B2B',
                error: '#E62222',
                success: '#a8ff78',
                accent: '#52F1EC',
                /***** just added colors *****/
                'bg-gray-300': '#e2e8f0',
                'bg-gray-900': '#1a202c', //drawer color
                'bg-indigo-800': '#434190',
                'bg-gray-800': '#2d3748',
                /*****overwritten color******/
                main_bg: '#0e0e23', //drawer color
                icon_color: '#9b9ca7',
                bg_color: '#252954',
                active_link: '#fb8c00',
            },
        },
    },
});