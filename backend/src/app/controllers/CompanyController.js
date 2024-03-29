const Company = require("../models/Company");

class CompanyController {
  // [GET] /companies
  showAll(req, res, next) {
    Company.find({})
      .then((companies) =>
        res.status(200).json(companies)
      )
      .catch(next);
  }

  // [GET] /companies/:id
  show(req, res, next) {
    Company.findById(req.params.id)
      .then((company) =>
        res.status(200).json(company)
      )
      .catch(next);
  }

  // [POST] /companies
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

  // [PUT] /companies/:id
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

  // [DELETE] /companies/:id
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
