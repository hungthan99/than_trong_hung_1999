const express = require("express");
const router = express.Router();

const postController = require("../app/controllers/PostController");

router.get("/", postController.showAll);
router.get("/:id", postController.show);
router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);

module.exports = router;
