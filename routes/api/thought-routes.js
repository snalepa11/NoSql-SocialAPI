const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  postThought,
  putThought,
  deleteThought,
  postReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

// /api/thoughts
router.route("/").get(getAllThought).post(postThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(putThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(postReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;