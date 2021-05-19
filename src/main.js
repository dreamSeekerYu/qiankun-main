import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue2',
    // entry: '//localhost:8081',
    entry: '//qiankun-vue2.vercel.app/',
    container: '#app_container',
    activeRule: '/vue2',
  },
  {
    name: 'vue3',
    // entry: '//localhost:7101',
    entry: '//qiankun-vue3.vercel.app/',
    container: '#app_container',
    activeRule: '/vue3',
  },
  // {
  //   name: 'blog',
  //   entry: '//localhost:8082/blog',
  //   container: '#container',
  //   activeRule: '/blog',
  // },
]);
// 启动 qiankun
start();


createApp(App).use(store)
.use(router)
.mount('#qiankun_container')
