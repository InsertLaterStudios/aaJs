/*
	
*/



const SALT_ROUNDS = 12 // The higher the number, the more secure but slower it is



const bcrypt = require("bcrypt")



exports.compare = bcrypt.compare
exports.hash = (plain, callback)=>{
	bcrypt.genSalt(SALT_ROUNDS, (sErr, salt)=>{
		if (sErr) {
			console.log("ERROR aaJs/authorization.js hash genSalt sErr")
			callback(true)
		} 
		else bcrypt.hash(plain, salt, (hErr, hRes)=>{
			if (hErr) {
				console.log("ERROR aaJs/authorization.js hash genSalt hash hErr")
				callback(true)
			}
			else callback(false, hRes)
		})
	})
}

