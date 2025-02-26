import Course from "../models/Course.js";

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

export const enrollCourse = async (req, res) => {
  // Logic to enroll user in a course
};
