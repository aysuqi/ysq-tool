/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-16 14:18:59
 * @LastEditTime: 2023-09-16 18:19:08
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */

export * from './core'
import { format } from './core'

const YS = {
	format
}

console.log('ys :>> ', YS.format.time(''))

if (typeof window === 'undefined') {
	throw new Error('this is no window ENV')
}

export default YS
