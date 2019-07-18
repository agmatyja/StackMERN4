const Post = require('../models/post.model');

// get all posts

exports.getPosts = async (req, res) => {

    try {
      res.status(200).json(await Post.find());
    } catch(err) {
      res.status(500).json(err);
    }

};

//get single post

exports.getPost = async (req, res) => {

    try {
      const postArr = await Post.find({ id: { $eq: req.params.id} })
      if (postArr.length === 1) {
		res.status(200).json(postArr[0]);
	  } else {
		res.status(404).json({});
	  }
    } catch(err) {
      res.status(500).json(err);
    }

};