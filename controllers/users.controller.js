// Import the users model
import User from '../models/users.model.js';

import jwt from 'jsonwebtoken';

// Create a new User
export const createUser = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  // Create User
  User.create(req.body, (err, data) => {
    if (err)
      res.status(500).send(err);
    else res.send(data);
  });
};

export const login = (req, res) => {
const { name, password } = req.body;
if (!name && !password){
  res.status(400).send('Login failed');
}else{
  User.login(req.body, (err, data) => {
    if (err){
      res.status(400).send(err);
    }else{
      const token = jwt.sign(
        {name},
        process.env.TOKEN,
        {
          expiresIn: "7d",
        }
      )
      res.status(200).send(token);
    }
  })
}
  // res.send('login');
};

export const register = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  // Create User
  User.create(req.body, (err, data) => {
    if (err)
      res.status(500).send(err);
    else res.send(data);
  });
};

// Retrieve all Users from the database
export const getAllUsers = (req, res) => {
  // Get all users
  User.getAll((err, data) => {
    if (err)
      res.status(500).send(err);
    else res.send(data);
  });
};

// Find a single User with a id
export const getOneUser = (req, res) => {
  User.getOne(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send(err);
      } else {
        res.status(500).send(err);
      }
    } else res.send(data);
  });
};

// Update a User identified by the id in the request
export const updateUser = (req, res) => {

  // Validate Request
  if (!req.body) {
    res.status(400).send("no data");
  }
  User.update(
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

// Delete a User with the specified id in the request
export const deleteUser = (req, res) => {
  User.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send(err);
      } else {
        res.status(500).send(err);
      }
    } else res.send("User deleted");
  });
};
