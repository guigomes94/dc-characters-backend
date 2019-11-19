import mongoose from "mongoose";

const Character = mongoose.model("Character");

(exports.get = async page => {
  const res = await Character.paginate({}, { page, limit: 100 });
  return res;
}),
  (exports.getByName = async name => {
    const res = await Character.findOne(
      {
        name: name
      },
      "name real_name gender alignment height weight description skills first_appeared"
    );
    return res;
  }),
  (exports.getById = async id => {
    const res = await Character.findById(id);
    return res;
  }),
  (exports.getByTag = async skill => {
    const res = Character.find(
      {
        skills: skill
      },
      "name real_name gender alignment height weight description skills first_appeared"
    );
    return res;
  }),
  (exports.create = async data => {
    let character = new Character(data);
    await character.save();
  }),
  (exports.update = async (id, body) => {
    await Character.findByIdAndUpdate(id, {
      $set: {
        name: body.name,
        real_name: body.real_name,
        alignment: body.alignment,
        gender: body.gender,
        height: body.height,
        weight: body.weight,
        description: body.description,
        skills: body.skills,
        first_appeared: body.first_appeared
      }
    });
  }),
  (exports.del = async id => {
    await Character.findByIdAndRemove(id);
  });
