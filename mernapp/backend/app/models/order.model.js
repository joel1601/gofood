module.exports = (mongoose) => {
    const schema = new mongoose.Schema(
      {
         
          email:String,
          order_data:Array
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
  
    const Order = mongoose.model("order", schema);
    return Order;
  };