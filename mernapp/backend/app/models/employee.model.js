module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        employeeId:String,
        employeeName:String,
        employeeEmail:String,
        employeePhnoneNumber:Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Employee = mongoose.model("employee", schema);
    return Employee;
  };
  