import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;

Vue.directive("highlight",
   { bind(el, binding, vnode){
      //  el.style.backgroundColor = 'green';   
      // el.style.backgroundColor = binding.value;


      // if (binding.arg == 'background') {
      //   el.style.backgroundColor = binding.value;
      // } else {
      //   el.style.color = binding.value;
      // }

      var delay = 0;
      if (binding.modifiers['delayed']) {
        delay = 3000;
      }
      setTimeout(() => {
          if (binding.arg == 'background') {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      } 
});

Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('main ');
  }
})

new Vue({
  el:"#app",
  router,
  render: h => h(App)
}).$mount('#app')

