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

    },
    email: {
        type: String,
        unique: true,
        required: true,
        max_length: 50,
        // match:  [/.+@.+\..+/], ??

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
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = userSchema;

