const Post = require("../models/Post");

class PostController {
  // [GET] /posts
  showAll(req, res, next) {
    Post.find({})
      .then((posts) =>
        res.status(200).json(posts)
      )
      .catch(next);
  }

  // [GET] /posts/:id
  show(req, res, next) {
    Post.findById(req.params.id)
      .then((post) =>
        res.status(200).json(post)
      )
      .catch(next);
  }

  // [POST] /posts
  create(req, res, next) {
    const post = new Post(req.body);
    post
      .save()
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Create post successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [PUT] /posts/:id
  update(req, res, next) {
    Post.updateOne({ _id: req.params.id }, req.body)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Update information of post successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [DELETE] /geos/:id
  delete(req, res, next) {
    Post.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Delete post successfully!",
          payload: null,
        })
      )
      .catch(next);
  }
}

module.exports = new PostController();
