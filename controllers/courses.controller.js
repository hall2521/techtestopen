// Import the courses model
import Course from '../models/courses.model.js';

// Create a new Course
export const createCourse = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    // Create Course
    Course.create(req.body, (err, data) => {
        if (err)
            res.status(500).send(err);
        else res.send(data);
    });
};

// Retrieve all Courses from the database
export const getAllCourses = (req, res) => {
    // Get all courses
    Course.getAll((err, data) => {
        if (err)
            res.status(500).send(err);
        else res.send(data);
    });
};

// Find a single Course with a id
export const getOneCourse = (req, res) => {
    Course.getOne(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send(err);
            } else {
                res.status(500).send(err);
            }
        } else res.send(data);
    });
};

// Update a Course identified by the id in the request
export const updateCourse = (req, res) => {

 // Validate Request
 if (!req.body) {
    res.status(400).send("no data");
  }
  Course.update(
    req.params.id,
    req.body,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send(err);
        } else {
          res.status(500).send(err);
        }
      } else res.send(data);
    }
  );

};

// Delete a Course with the specified id in the request
export const deleteCourse = (req, res) => {
    Course.delete(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send(err);
          } else {
            res.status(500).send(err);
          }
        } else res.send("Course deleted");
      });
};
