const { CreatePost, CommentPost, GetPosts, GetPostbyUserId, GetPostbyPostId, GetCommentByPostId, UpdatePost, DeletePost } = require('../controllers/postsController');

const router=require('express').Router();

router.post('',CreatePost)
router.post('/comment',CommentPost)
router.get('',GetPosts)
router.get('/mypost',GetPostbyUserId)
router.get('/post',GetPostbyPostId)
router.get('/comment',GetCommentByPostId)
router.patch('',UpdatePost)
router.delete('',DeletePost)
module.exports=router