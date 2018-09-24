const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Courses = mongoose.model("Courses", CourseSchema);
