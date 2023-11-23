import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import { Image as VanImage } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Card } from 'vant';
import { Tag } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Divider } from 'vant';
import { Rate } from 'vant';
import { TreeSelect } from 'vant';
import { List } from 'vant';
import { Pagination } from 'vant';
import { Dialog } from 'vant';

Vue.use(Dialog);
Vue.use(Pagination);
Vue.use(List);
Vue.use(TreeSelect);
Vue.use(Rate);
Vue.use(Divider);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(TabbarItem);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Search);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(ElementUI);

import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL="http://cookiesukaze.cn/yuyu/"
Vue.prototype.$http=axios

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount('#app')
