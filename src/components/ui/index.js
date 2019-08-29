import Switch from './switch/switch.vue';
import Toast from './toast/toast.js';

const install = function(Vue) {
  if (install.installed) return;
  Vue.component(Switch.name, Switch);
  Vue.prototype.$toast = Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default install
