const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')


const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createAtval => dateFormat(createAtval)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts; 