import { createApp } from "vue";
<<<<<<< HEAD
import App from './app.vue'

createApp(App).mount('#app')
=======
import App from './app.vue';
import router from './router';

createApp(App)
    .use(router)
    .mount('#app')
>>>>>>> feature/add-routing
