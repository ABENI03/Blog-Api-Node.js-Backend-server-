const mysql=require('mysql')
require('dotenv').config()

const pool=mysql.createPool({
    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_password,
    database:process.env.db_name
})


module.exports=pool;