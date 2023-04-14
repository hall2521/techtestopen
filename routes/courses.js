import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import {getAllCourses, getOneCourse, updateCourse, deleteCourse, createCourse} from '../controllers/courses.controller.js';

// Read all Courses
router.get("/", getAllCourses);

// Read one Course
router.get("/:id", getOneCourse);


// After Authentication
// Json Web token authentication
router.use((req, res, next) => {
  const token = req.headers['x-access-token'];
  let decoded = jwt.decode(token, { complete: true });
  if (token) {
    jwt.verify(token, process.env.TOKEN, (err, decode) => {
      if (err) {
        res.send('login invalid')
      } else {
        next();
      }
    })
  } else {
    res.send('provide token');
  }
})

// Create a new Course
router.post("/", createCourse);

// Update a Course with id
router.put("/:id", updateCourse);

// Delete a Course with id
router.delete("/:id", deleteCourse);

export default router;