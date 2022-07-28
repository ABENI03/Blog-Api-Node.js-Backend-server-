const pool=require('../dbConnection')

module.exports={
    createPost:(data,callback)=>{
       
        

        
    },
    getPosts:(data,callback)=>{
        var queryStatment = 'select * from posts';
        var values = [
            data.userid,

        ]
        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
    updatePost:(data,callback)=>{

    },
    deletePost:(data,callback)=>{

    },
    getPostbyUserId:(data,callback)=>{

    },
    getPostbyPostId:(data,callback)=>{

    },
    commentPost:(data,callback)=>{

    },
    getCommentByPostId:(data,callback)=>{

    },
}