const mongoose = require("mongoose");
const crypto = require("crypto");
// const { v1: uuidv1 } = require('uuid'); // for currect uuid version
const uuidv1 = require("uuid/v1");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastName: {
      type: String,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    userInfo: {
      type: String,
      trim: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number, // higher the number, higher the priviledge
      default: 0, // 0 means user
    },
    purchases: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    // setter
    this._password = password; //underscore before password is making it private
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    // getter
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainpassword) {
    return (
      this.securePassword(plainpassword) ===
      this.encry_password
    );
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
