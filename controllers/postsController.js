const { createPost, getPosts, getPostbyUserId, getPostbyPostId } = require("../models/postsModel")

module.exports={
    CreatePost:(req,res)=>{
        createPost(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Post Created successfully'
                })
            }
        })
    },
    GetPosts:(req,res)=>{
        getPosts(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'fetching post successfully',
                    data:result
                })
            }
        })
    },
    UpdatePost:(req,res)=>{

    },
    DeletePost:(req,res)=>{

    },
    GetPostbyUserId:(req,res)=>{
        getPostbyUserId(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'fetching post successfully',
                    data:result
                })
            }
        })
    },
    GetPostbyPostId:(req,res)=>{
        getPostbyPostId(req.body,(error,result)=>{
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'fetching post successfully',
                    data:result
                })
            }
        })
    },
    CommentPost:(req,res)=>{

    },
    GetCommentByPostId:(req,res)=>{

    },
    

}