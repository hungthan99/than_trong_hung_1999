const express = require("express");
const router = express.Router();

const geoController = require("../app/controllers/GeoController");

router.get("/", geoController.showAll);
router.get("/:id", geoController.show);
router.post("/", geoController.create);
router.put("/:id", geoController.update);
router.delete("/:id", geoController.delete);

module.exports = router;
