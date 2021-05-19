import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:8081',
    // entry: '//dream-seeker-yu-github-io.vercel.app/',
    container: '#app_container',
    activeRule: '/app1',
  },
  {
    name: 'vue',
    // entry: '//localhost:7101',
    entry: '/vue',
    container: '#app_container',
    activeRule: '/vue',
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
