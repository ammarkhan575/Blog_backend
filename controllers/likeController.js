const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// like a post
exports.likePost = async (req,res)=>{
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user
        });
        const savedLike = await like.save();

        // update the post collection basis on this
        const updatedPost = Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}},{new:true})
        res.status(200).json({
            success: true,
            message: "Liked Successfully",
            post: updatedPost
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while like",
            error: error
        })
    }
}


// unlike post 
exports.unlikePost = async (req,res)=>{
    try{
        const {post, like} = req.body;
        // deleting from the like collection
        const deletedLike = await Like.findOneAndDelete({post: post, _id: like});
        // updating the likes array in the post
        const updatedPost = await Post.findByIdAndUpdate({post},{$pull: {likes: deletedLike._id}}, {new:true});

        res.status(200).json({
            success: true,
            message: "Unliked Successfully",
            post: updatedPost
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong while unliking the post"
        })
    }
}