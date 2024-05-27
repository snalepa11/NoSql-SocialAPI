const { Thought, User } = require("../models");

module.exports = {
  // get all Thoughts
  async getAllThought(req, res) {
    try {
      const courses = await Thought.find()
      .populate('reactions');
      res.json(Thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course
  async getSingleCourse(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
      .populate('reactions');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a course
  async postThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a course
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!course) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

    //   await Students.deleteMany({ _id: { $in: course.students } });
    //   res.json({ message: 'Course and students deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a course
  async putThought(req, res) {
    try {
      const course = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
  


 