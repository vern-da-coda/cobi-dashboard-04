import './assets/main.css'
import '@/libs/cobi/0.44.0/cobi'

import {createApp} from 'vue'
import {createPinia} from "pinia";

import VueKonva from 'vue-konva';

import App from './App.vue'

const app = createApp(App);

app.use(VueKonva);
app.use(createPinia());
app.mount('#app');
