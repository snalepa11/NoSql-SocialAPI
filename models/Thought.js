const { Schema, model, Types } = require("mongoose");
const date = require("../utils/date");

const ReactionSchema = new Schema(
  {
    reactionId: {
      // Mongoose's ObjectId data type
      type: Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      // Set default value to the current timestamp
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: (timestamp) => date(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
          
    },

    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: (timestamp) => date(timestamp),
    },

    username: {
      type: String,
      required: true,
    },

    // array of nested documents created with the reactionSchema
    reactions: [ReactionSchema],
  },
//   Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;