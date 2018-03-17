import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App, {
    props: {
      endpoint: "http://code.eduweb.pl/kurs-vue/images/?wait=1"
    }
  })
});
