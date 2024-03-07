const User = require("../models/User");
const Geo = require("../models/Geo");

class UserController {
  // [GET] /users
  showAll(req, res, next) {
    User.find({})
      .populate("address")
      .populate("company")
      .then((users) => {
        const items = users.map((user) => {
          return {
            id: user.user_id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
            address: user.address,
            company: user.company,
          };
        });
        res.status(200).json(items);
      })
      .catch(next);
  }

  // [GET] /users/:id
  show(req, res, next) {
    User.findById(req.params.id)
      .populate("address")
      .populate("company")
      .then((user) => res.status(200).json(user))
      .catch(next);
  }

  // [POST] /users
  create(req, res, next) {
    const user = new User(req.body);
    user
      .save()
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Create user successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [PUT] /users/:id
  update(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Update information of user successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [DELETE] /users/:id
  delete(req, res, next) {
    User.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Delete user successfully!",
          payload: null,
        })
      )
      .catch(next);
  }
}

module.exports = new UserController();
