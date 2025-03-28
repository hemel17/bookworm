import User from "../models/User.js";

const findUserByProperty = (key, value, verified) => {
  if (key === "_id") {
    return User.findById(value);
  }

  return User.find({ [key]: value, verified });
};

const findUserWithPassword = (email) => {
  return User.findOne({ email, verified: true }).select("+password");
};

const createNewUser = (name, email, password) => {
  const user = new User({ name, email, password });
  return user.save();
};

const deleteUnverifiedUserEntries = (id, email) => {
  return User.deleteMany({
    _id: { $ne: id },
    email,
    verified: false,
  });
};
export {
  findUserByProperty,
  findUserWithPassword,
  createNewUser,
  deleteUnverifiedUserEntries,
};
