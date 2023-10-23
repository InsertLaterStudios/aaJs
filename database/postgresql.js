/*
	
*/



// // ENVIROMENT // //
const DATABASE = {
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	user: process.env.PG_USER,
	database: process.env.PG_DATABASE,
	password: process.env.PG_PASSWORD,
}



const { Pool } = require("pg")
exports.pool = new Pool(DATABASE)
pool.on("error", (err)=>{
	console.error("ERROR aaJs/database/postgresql.js pool.on error")
	console.error(err)
	process.exit()
})



// QUERY HELPERS //
// funcName(element, columnn name){}

// make search query extension
exports.msqe = (e, cN)=>{return (e)? ` AND LOWER(${cN}) LIKE % || LOWER(${e}) || %` : ''}

// make update query extension
exports.muqe = (e, cN)=>{return (e)? ` AND ${cN}=${e}` : ''}

// make insert query extension, Name or Value
exports.miqeN = (cN)=>{return (cN)? `, ${cN}` : ''}
exports.miqeV = (e)=>{return (e)? `, ${e}` : ''}

