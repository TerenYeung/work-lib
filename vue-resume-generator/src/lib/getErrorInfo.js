const map = {
	126: '用户不存在',
	200: '用户名为空',
	201:　'密码为空',
	202: '用户名被占用',
	210: '用户名和密码不匹配',
	217: '无效用户名',
	unknown: '请求失败，请稍后重试'
}
export default function({code}){
	return map[code] || map.unknown
}