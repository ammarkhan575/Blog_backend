const Post = require('../models/postModel');

exports.createPost = async (req,res)=>{
    try{
        const {title, body} = req.body;
        const post = new Post({
            title,body
        });
        const savedPost = await post.save();
        res.status(200).json({
            success: true,
            message: "successfully created post",
            post : savedPost,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: " Error while creating Post",
            error: error,
        });
    }
}

exports.getAllPost = async (req,res)=>{
    try{
        const posts = await Post.find({}).populate('comments');
        res.status(200).json({
            success: true,
            posts: posts,
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error while fetching all posts",
            error: error,
        })
    }
}