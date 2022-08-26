const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// user Schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, require: true },
    lastName: { type: String, required: false },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

// compare when ligin in the data with the password using prototype method

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
// user Model
const User = mongoose.model("user", userSchema);

module.exports = User;
