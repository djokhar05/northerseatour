import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
;import TheHeader from './components/TheHeader.vue';
import TheSliderComponent from './components/TheSliderComponent';
import TheCardComponent from './components/TheCardComponent';
import TheCenteringComponent from './components/TheCenteringComponent';
import TheImageTextComponent from './components/TheImageTextComponent';
import LocaleSwitcher from './components/LocaleSwitcher'
import TheAccordionComponent from './components/TheAccordionComponent';
import TheFooterComponent from './components/TheFooterComponent'
import i18n from './i18n'


const app = createApp(App).use(i18n)

//Registering global components.
app.component('TheHeader', TheHeader);
app.component('TheSliderComponent', TheSliderComponent);
app.component('TheCardComponent', TheCardComponent);
app.component('TheCenteringComponent', TheCenteringComponent);
app.component('TheImageTextComponent', TheImageTextComponent);
app.component('LocaleSwitcher', LocaleSwitcher);
app.component('TheAccordionComponent', TheAccordionComponent);
app.component('TheFooterComponent', TheFooterComponent);

app.use(router)
app.mount('#app')
