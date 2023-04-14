import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();
import {login, getAllUsers, getOneUser, updateUser, deleteUser, createUser} from '../controllers/users.controller.js';

// User login and generate token
router.post('/login', login);

// Register a new user
router.post("/register", createUser);

// Only available after login

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
// Read all Users
router.get("/", getAllUsers);

// Read one User
router.get("/:id", getOneUser);

// // Update a User with id
router.put("/:id", updateUser);

// Delete a User with id
router.delete("/:id", deleteUser);

export default router;