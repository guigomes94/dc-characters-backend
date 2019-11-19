import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  real_name: {
    type: String,
    required: true,
    trim: true
  },
  alignment: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    trim: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills: [
    {
      type: String,
      required: true
    }
  ],
  first_appeared: {
    type: Number,
    required: true
  }
});

CharacterSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Character", CharacterSchema);
