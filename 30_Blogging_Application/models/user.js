const { Schema, model } = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { createTokenForAUser } = require("../services/auth");
 

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
    profileImgUrl: {
      type: String,
      default: "/images/avatar.jpg",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;

  const salt =randomBytes(16).toString();
  const hasedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hasedPassword;

  next();
});
userSchema.static("matchPasswordAndGenrateToken", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("User Not Found");

  const salt = user.salt;
  const hasedPassword = user.password;

  const userProvideHased = createHmac("sha256", salt).update(password).digest("hex");

  if (hasedPassword !== userProvideHased) throw new Error("incorrect Password");
  
  const token = createTokenForAUser(user)
  return token;

});
const User = model("user", userSchema);

module.exports = User;
