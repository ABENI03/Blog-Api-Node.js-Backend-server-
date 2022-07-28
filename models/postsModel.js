const pool=require('../dbConnection')

module.exports={
    createPost:(data,callback)=>{
       
          var queryStatment = 'INSERT INTO `post`( `authorId`, `title`, `summary`, `content`) VALUES (?,?,?,?)';
        var values = [
            data.userid,
            data.title,
            data.summary,
            data.content


        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
        
    },
    getPosts:(data,callback)=>{
        var queryStatment = 'SELECT * FROM `post` ';
        var values = [
          

        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
    updatePost:(data,callback)=>{
        var queryStatment =  "UPDATE `post` SET `title`=?,`summary`=?,`content`=? WHERE id=?";
        var values = [
            data.title,
            data.summary,
            data.content,
            data.postid,

        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
    deletePost:(data,callback)=>{
       
        var queryStatment =  "DELETE FROM `post` WHERE id=?";
        var values = [
            data.postid,

        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
    getPostbyUserId:(data,callback)=>{
        var queryStatment = 'SELECT * FROM `post` where authorId=?';
        var values = [
            data.userid,

        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
    getPostbyPostId:(data,callback)=>{
        var queryStatment = 'SELECT * FROM `post` where id=?';
        var values = [
            data.postid,

        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
    commentPost:(data,callback)=>{
        var queryStatment = 'INSERT INTO `post_comment`( `postId`, `title`, `content`) VALUES (?,?,?)';
        var values = [
            data.postid,
            data.title,
            data.content


        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
    getCommentByPostId:(data,callback)=>{
        var queryStatment = 'SELECT * FROM `post_comment` WHERE `postId`=?';
        var values = [
            data.postid,

        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
}