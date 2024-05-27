const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
{
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
          
    },

    username: {
        type: String,
        unique: true,
        required: true,
        max_length: 50,
        trim: true,

    },
    email: {
        type: String,
        unique: true,
        required: true,
        max_length: 50,
        // match:  [/.+@.+\..+/], ?? Need to do this

    },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: "Thought",
    },
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ]
    // Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = userSchema;

