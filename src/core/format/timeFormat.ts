/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-16 16:38:34
 * @LastEditTime: 2023-09-16 17:48:43
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */

type TimeFormat = <T>(
	datetime: T | undefined | Date | number | string,
	fmt?: string
) => string

/**
 * 日期时间格式化函数
 * @param datetime 时间
 * @param fmt 格式
 * @example yyyy:mm:dd | yyyy年mm月dd日 hh时MM分ss秒
 * @returns
 */
export const timeFormat: TimeFormat = (datetime, fmt = 'yy-mm-dd') => {
	if (!datetime) datetime = Number(new Date())
	if (datetime.toString().length == 10) (datetime as number) *= 1000

	const date = new Date(datetime as string)
	const opt = {
		'y+': date.getFullYear().toString(),
		'm+': (date.getMonth() + 1).toString(),
		'd+': date.getDate().toString(),
		'h+': date.getHours().toString(),
		'M+': date.getMinutes().toString(),
		's+': date.getSeconds().toString()
	}

	let ret: (string | any[])[] | null
	for (const k in opt) {
		ret = new RegExp('(' + k + ')').exec(fmt)
		if (ret) {
			fmt = fmt?.replace(
				ret[1] as string,
				ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
			)
		}
	}

	return fmt
}
