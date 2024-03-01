const express = require("express");
const router = express.Router();

const addressController = require("../app/controllers/AddressController");

router.get("/", addressController.showAll);
router.get("/:id", addressController.show);
router.post("/", addressController.create);
router.put("/:id", addressController.update);
router.delete("/:id", addressController.delete);

module.exports = router;
