/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-16 18:31:30
 * @LastEditTime: 2023-09-16 21:13:49
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'Plugin',
			formats: ['es', 'cjs', 'umd'],
			fileName: 'index'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'vue'
				}
			}
		}
	}
})
