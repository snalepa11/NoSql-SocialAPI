const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
{
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
          
    },

    username: {
        type: String,
    },
    email: {
        type: String,
    },
    thoughts: {
        type: String,
    },
    friends: {

    }
}
);

module.exports = userSchema;

