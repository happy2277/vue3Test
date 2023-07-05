/*
 * @Description: 
 * @Author: ggs
 * @Date: 2022-09-13 11:40:31
 * @LastEditors: ggs
 * @LastEditTime: 2022-12-19 13:24:46
 * @FilePath: \vue3Test\src\main.ts
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
