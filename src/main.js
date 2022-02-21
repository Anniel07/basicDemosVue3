import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

// importing lodash as global resource
import 'lodash';   

createApp(App).use(router).mount('#app')