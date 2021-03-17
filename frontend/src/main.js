import Vue from "vue";
import App from "./App.vue";

import "./plugins/bootstrapPlugins";
import "./plugins/fontawesomePlugins";
import "./config/filters";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
