const express = require("express");
const router = express.Router();

const commentController = require("../app/controllers/CommentController");

router.get("/", commentController.showAll);
router.get("/:id", commentController.show);
router.post("/", commentController.create);
router.put("/:id", commentController.update);
router.delete("/:id", commentController.delete);

module.exports = router;
