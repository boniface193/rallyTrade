import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9B9FFF',//sea blue
                secondary: '#838383',//cool dark grey
                heading: '#2B2B2B', //lighter black
                error: '#FF0F0F', //peper red
                success: '#03B10A', //green
                /***** just added colors *****/
                main_bg: '#0e0e23', //very dark blue
                icon_color: '#9b9ca7', //bluish grey
                bg_color: '#252954', //deep blue
                active_link: '#fb8c00', //yellow
                dollars: "#A0FF9E",
                naira: "#9EE8FF",
                /****** card background color*******/
                success_bg: '#EAFFEB',
                secondary_bg: '#F3F3F3',
                primary_bg: '#F2F5FF',
                error_bg: '#FFEEEE',
                /******** onboaring **************/
                btn_gold: '#C3A500',
            },
        },
    },
});