const Geo = require("../models/Geo");

class GeoController {
  // [GET] /geos
  showAll(req, res, next) {
    Geo.find({})
      .then((geos) =>
        res.status(200).json({
          status: 200,
          message: "Get all geographies successfully!",
          payload: geos,
        })
      )
      .catch(next);
  }

  // [GET] /geos/:id
  show(req, res, next) {
    Geo.findById(req.params.id)
      .then((geo) =>
        res.status(200).json({
          status: 200,
          message: "Get geography by id successfully!",
          payload: geo,
        })
      )
      .catch(next);
  }

  // [POST] /geos
  create(req, res, next) {
    const geo = new Geo(req.body);
    geo
      .save()
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Create geography successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [PUT] /geos/:id
  update(req, res, next) {
    Geo.updateOne({ _id: req.params.id }, req.body)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Update information of geography successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [DELETE] /geos/:id
  delete(req, res, next) {
    Geo.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Delete geography successfully!",
          payload: null,
        })
      )
      .catch(next);
  }
}

module.exports = new GeoController();
