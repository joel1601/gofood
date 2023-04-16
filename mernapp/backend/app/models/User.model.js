

module.exports = (mongoose) => {
  const schema = new mongoose.Schema(
    {
        userName:String,
        email:String,
        password:String,
        location:String
    //   userName: {
    //     type: String,
    //     required: true
    //   },
    //   location: {
    //     type: String,
    //     required: true
    //   },
    //   email: {
    //     type: String,
    //     required: true
    //   },
    //   password: {
    //     type: Number,
    //     required: true
    //   },
    //   date: {
    //     type: ,
    //     default: date.now,
    //   },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("users", schema);
  return User;
};
