const Company = require("../models/Company");

class CompanyController {
  // [GET] /geos
  showAll(req, res, next) {
    Company.find({})
      .then((companies) =>
        res.status(200).json({
          status: 200,
          message: "Get all company successfully!",
          payload: companies,
        })
      )
      .catch(next);
  }

  // [GET] /geos/:id
  show(req, res, next) {
    Company.findById(req.params.id)
      .then((company) =>
        res.status(200).json({
          status: 200,
          message: "Get company by id successfully!",
          payload: company,
        })
      )
      .catch(next);
  }

  // [POST] /geos
  create(req, res, next) {
    const company = new Company(req.body);
    company
      .save()
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Create company successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [PUT] /geos/:id
  update(req, res, next) {
    Company.updateOne({ _id: req.params.id }, req.body)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Update information of company successfully!",
          payload: null,
        })
      )
      .catch(next);
  }

  // [DELETE] /geos/:id
  delete(req, res, next) {
    Company.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).json({
          status: 200,
          message: "Delete company successfully!",
          payload: null,
        })
      )
      .catch(next);
  }
}

module.exports = new CompanyController();
