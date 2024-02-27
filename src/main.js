import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueSweetalert2);
app.mount('#app')
