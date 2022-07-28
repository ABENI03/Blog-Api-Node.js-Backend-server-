const pool=require('../dbConnection')

module.exports={
    createPost:(data,callback)=>{
       
        var queryStatment = '';
        var values = [
            data.userid,

        ]

        pool.query(queryStatment, values, (error, result) => {
            if (error) return callback(error)
            else return callback(null, result)
        }) 
    },
    getPosts:(data,callback)=>{

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