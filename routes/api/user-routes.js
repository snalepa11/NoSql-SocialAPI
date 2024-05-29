
const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userControllers");

// /api/users
router.route("/").get(getAllUser).post(postUser);

// /api/users/:id
router.route("/:userId").get(getUserById).put(putUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
