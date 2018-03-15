import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import routes from "./routes/Routes";

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App, {
    props: {
        endpoint: "http://code.eduweb.pl/kurs-vue/images/?wait=1"
    }
  })
})
