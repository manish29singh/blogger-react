const Router = require("express").Router();
const Courses = require("../models/course");
const util = require("../utils/index");

Router.post("/course", async (req, res) => {
  if (req.body.name) {
    if (await util.courseExists(req.body.name)) {
      return res.json({ sucess: false, message: "Course already exists." });
    }
    try {
      let Course = new Courses({
        name: req.body.name
      });

      let newCourse = await Course.save();
      if (newCourse) {
        res.json({
          success: true,
          message: "course saved successfully",
          data: newCourse
        });
      }
    } catch (err) {
      console.log("Error occured while saving new course: ", err.message);
      res.json(err.message);
    }
  } else {
    res.json({ message: "Fields can not be empty" });
  }
});

/**
 * User List
 */
Router.get("/courses", async (req, res) => {
  try {
    let courses = await Courses.find();
    if (courses) console.log("user list : ", courses);
    res.json({ data: courses });
  } catch (err) {
    res.json({ errormessage: err.message });
  }
});

module.exports = Router;
