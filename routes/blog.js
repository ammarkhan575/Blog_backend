const express = require("express");
const { createPost, getAllPost } = require("../controllers/postController");
const { createComment } = require("../controllers/commentController");
const { likePost, unlikePost } = require("../controllers/likeController");

const router = express.Router();

// Posts
// route for post create
router.post('/posts/create',createPost);
// route for fetching all posts
router.get("/posts", getAllPost);

// Likes
// route for liking the post
router.post('/likes/like', likePost);
//route for unliking the post
router.post('/likes/unlike', unlikePost);

// Comments
//route for comment create
router.post('/comments/create', createComment);




module.exports = router;