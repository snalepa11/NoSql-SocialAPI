const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
{
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
          
    },

    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    thoughts: {
        type: String,
    },
    friends: {
        type: Array
        // friendCount
    }
}
);

module.exports = userSchema;

