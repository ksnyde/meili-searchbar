import { createApp } from "vue";
// register vue composition api globally
import FloatingVue from "floating-vue";

import "floating-vue/dist/style.css";
import App from "./App.vue";

// windicss layers
import "virtual:windi-base.css";
import "virtual:windi-components.css";
// your custom styles here
// import "./styles/main.css";
// windicss utilities should be the last style import
import "virtual:windi-utilities.css";
// windicss devtools support (dev only)
import "virtual:windi-devtools";

export const app = createApp(App);
app.use(FloatingVue);
app.mount("#app");
