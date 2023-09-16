/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-16 14:18:59
 * @LastEditTime: 2023-09-16 22:26:56
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */

import { format } from './core'

export * from './core'
export default { format }

if (typeof window === 'undefined') {
	throw new Error('this is no window ENV')
}
