import Switch from './switch/switch.vue';
import Toast from './toast/toast';
import Button from './button/button';
import Actions from './actions/actions';
const install = function(Vue) {
  if (install.installed) return;
  Vue.component(Button.name, Button);
  Vue.component(Actions.name, Actions);
  Vue.component(Switch.name, Switch);
  Vue.prototype.$toast = Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default install
