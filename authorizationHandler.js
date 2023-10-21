/*
	
*/



// passwords... COMPLETE GARBAGE RANDOM, FIGURE OUT BETTER
const pO = "!@#$%^&*(){}[]_+-.,;:1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const pOL = pO.length
exports.randomString = (length)=>{
	let out = ""
	while (length > 0) {
		out += pO.charAt(Math.floor(Math.random() * pOL))
		length -= 1
	}
	return out
}



exports.parseUrl = (req)=>{return req.url.slice(1).split('/')}
exports.parseCookies = (req, badCookieCount_callback, badCookie_callack)=>{
	const cookie = req.headers.cookie
	const cookies_1 = cookie.split('; ')
	if(cookies_1.length == 2) {
		let cookies = { id:false, t:false }
		for (let i = 0; i < 2; i++) {
			const cookies_2 = cookies_1[i].split('=')
			
			if 		(cookies_2[0] == "id" && cookies_2[1]) cookies.id = cookies_2[1]
			else if (cookies_2[0] == "t" && cookies_2[1]) cookies.t = cookies_2[1]
			else badCookie_callack(res)
		}
		
		if (cookies.id && cookies.t) return cookies
	}
	else badCookieCount_callback(res)
	return false
}
exports.parseBody = (body, optionsArray)=>{
	const inArray = body.split('&')//['name=value', ...,]
	let outData = new Object
	
	inArray.forEach((e1)=>{
		const e1Array = e1.split('=')//['name', 'item']
		optionsArray.forEach((e2)=>{ if(e2==e1Array[0]) outData[e2]=e1Array[1] })
	})
	
	return outData
}
exports.parseBodyRequired = (body, optionsArray, requiredArray)=>{
	const inArray = body.split('&')//['name=value', ...,]
	if(inArray.length != optionsArray.length) return false
	
	let outData = new Object
	
	inArray.forEach((e1)=>{
		const e1Array = e1.split('=')//['name', 'item']
		
		optionsArray.forEach((e2)=>{
			if(e2 == e1Array[0]) outData[e2] = e1Array[1]
		})
	})
	requiredArray.forEach((e2)=>{
		if(outData[e2] == null) return false
	})
	
	return outData
}

