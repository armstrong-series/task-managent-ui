
import { createApp } from 'vue'
import App from './App.vue';
import router from '@/router/index';
import '@/assets/main.css';
import 'toastr/build/toastr.min.css';

createApp(App).use(router).mount('#app');
