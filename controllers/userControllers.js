const { User, Thought } = require("../models");
const { ObjectId } = require('mongoose').Types;

module.exports = {
   async getAllUser(req, res){
    try {
        const user = await User.find()
        .populate('friends');
        res.json(User);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async getUserById(req,res){
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .populate('friends');
      
            if (!user) {
              return res.status(404).json({ message: 'No user with that ID' });
            }
      
            res.json(user);
          } catch (err) {
            res.status(500).json(err);
          }
    },
    async postUser(req,res){
        try {
            const user = await User.create(req.body);
            res.json(user);
          } catch (err) {
            console.log(err);
            return res.status(500).json(err);
          }
        },
    async putUser(req,res){
        try {
            const user = await User.findOneAndUpdate(
              { _id: req.params.thoughtId },
              { $set: req.body },
              { runValidators: true, new: true }
            );
      
            if (!user) {
              return res.status(404).json({ message: 'No thought with this id!' });
            }
      
            res.json(user);
          } catch (err) {
            res.status(500).json(err);
          }
        },
    async deleteUser(req,res){
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
      
            if (!user) {
              return res.status(404).json({ message: 'No course with that ID' });
            }
      
          //   await Students.deleteMany({ _id: { $in: course.students } });
          //   res.json({ message: 'Course and students deleted!' });
          } catch (err) {
            res.status(500).json(err);
          }
    },
    async addFriend(req, res) {
        try {
          console.log(req.body);
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { assignments: req.body } },
            { runValidators: true, new: true }
          );
    
          if (!user) {
            return res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      // Remove assignment from a student
      async deleteFriend(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friend: { friendId: req.params.friendId } } },
            { runValidators: true, new: true }
          );
    
          if (!user) {
            return res
              .status(404)
              .json({ message: 'No user found with that ID :(' });
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    };
   
  
  
  
  
//   addFriend,
//   deleteFriend,
// };
