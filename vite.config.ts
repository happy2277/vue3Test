/*
 * @Description:        
 * @Author: ggs
 * @Date: 2022-09-13 11:40:31
 * @LastEditors: ggs
 * @LastEditTime: 2022-12-19 14:13:08
 * @FilePath: \vue3Test\vite.config.ts
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            reactivityTransform: true
        }), 
        vueJsx(),
        Components({
            dts: true, //ts支持
			dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
			resolvers: [
				AntDesignVueResolver({
					importStyle: true, // 是否需要自动随引入加载对应的组件样式，禁用，因为某些二级组件（比如 DateRangePicker）没办法准确地识别正确路径，手动引入全局样式
					resolveIcons: true // 可使用@ant-design/icons-vue图标库
				})
			]
        }),
    ],
    resolve: {
        alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
