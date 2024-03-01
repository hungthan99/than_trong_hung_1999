const Address = require("../models/Address");

class AddressController {
  // [GET] /addresses
  showAll(req, res, next) {
    Address.find({}).populate('geo')
      .then((addresses) =>
        res.status(200).json({
          status: 200,
          message: "Get all addresses successfully!",
          payload: addresses,
        })
      )
      .catch(next);
  }

  // [GET] /addresses/:id
  show(req, res, next) {
    Address.findById(req.params.id).populate('geo')
      .then((address) =>
        res.status(200).json({
          status: 200,
          message: "Get address by id successfully!",
          payload: address,
        })
      )
      .catch(next);
  }

  // [POST] /addresses
  create(req, res, next) {
    const address = new Address(req.body);
    address
      .save()
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Create address successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [PUT] /addresses/:id
  update(req, res, next) {
    Address.updateOne({ _id: req.params.id }, req.body)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Update information of address successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [DELETE] /addresses/:id
  delete(req, res, next) {
    Address.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Delete address successfully!",
          payload: null,
        })
      )
      .catch(next);
  }
}

module.exports = new AddressController();
