const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
{
    thoughtId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
          
    },
}
);

module.exports = thoughtSchema;