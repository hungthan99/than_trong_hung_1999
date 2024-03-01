const express = require("express");
const router = express.Router();

const companyController = require("../app/controllers/CompanyController");

router.get("/", companyController.showAll);
router.get("/:id", companyController.show);
router.post("/", companyController.create);
router.put("/:id", companyController.update);
router.delete("/:id", companyController.delete);

module.exports = router;
