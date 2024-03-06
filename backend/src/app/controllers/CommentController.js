const Comment = require("../models/Comment");

class CommentController {
  // [GET] /comments
  showAll(req, res, next) {
    Comment.find({})
      .then((comments) =>
        res.status(200).json(comments)
      )
      .catch(next);
  }

  // [GET] /comments/:id
  show(req, res, next) {
    Comment.findById(req.params.id)
      .then((comment) =>
        res.status(200).json(comment)
      )
      .catch(next);
  }

  // [POST] /comments
  create(req, res, next) {
    const comment = new Comment(req.body);
    comment
      .save()
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Create comment successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [PUT] /comments/:id
  update(req, res, next) {
    Comment.updateOne({ _id: req.params.id }, req.body)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Update information of comment successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [DELETE] /comments/:id
  delete(req, res, next) {
    Comment.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Delete comment successfully!",
          payload: null,
        })
      )
      .catch(next);
  }
}

module.exports = new CommentController();
