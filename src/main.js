import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

createApp(App).use(router).mount('#app').component('VueDatePicker', VueDatePicker).app.mount('#app');
