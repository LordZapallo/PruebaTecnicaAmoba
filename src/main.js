import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js' 
import "./assets/sass/app.scss"
import router from './router'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App);

app.use(bootstrap).use(VCalendar, {}).use(router).mount('#app'); 