/*
	
*/



// // ENVIROMENT // //
if (!process.env.PG_HOST) console.log("ERROR aaJs/database/postgresql.js DATABASE.host")
if (!process.env.PG_PORT) console.log("ERROR aaJs/database/postgresql.js DATABASE.port")
if (!process.env.PG_USER) console.log("ERROR aaJs/database/postgresql.js DATABASE.user")
if (!process.env.PG_DATABASE) console.log("ERROR aaJs/database/postgresql.js DATABASE.database")
if (!process.env.PG_PASSWORD) console.log("ERROR aaJs/database/postgresql.js DATABASE.password")

console.log()

const { Pool } = require("pg")
const pool = new Pool({
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	user: process.env.PG_USER,
	database: process.env.PG_DATABASE,
	password: process.env.PG_PASSWORD,
})
pool.on("error", (err)=>{
	console.error("ERROR aaJs/database/postgresql.js pool.on error")
	console.error(err)
	process.exit()
})

exports.pool = pool



// QUERY HELPERS //
// funcName(element, columnn name){}

// make search query extension
exports.msqe = (e, cN)=>{return (e)? ` AND LOWER(${cN}) LIKE % || LOWER(${e}) || %` : ''}

// make update query extension
exports.muqe = (e, cN)=>{return (e)? ` AND ${cN}=${e}` : ''}

// make insert query extension, Name or Value
exports.miqeN = (cN)=>{return (cN)? `, ${cN}` : ''}
exports.miqeV = (e)=>{return (e)? `, ${e}` : ''}

