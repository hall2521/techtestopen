// Import the collections model
import Collection from '../models/collections.model.js';

// Create a new Collection
export const createCollection = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    // Create Collection
    Collection.create(req.body, (err, data) => {
        if (err)
            res.status(500).send(err);
        else res.send(data);
    });
};

// Retrieve all Courses within a collection
export const getAllCollections = (req, res) => {
    // Get all collections
    Collection.getAll(req.params.id, (err, data) => {
        if (err)
            res.status(500).send(err);
        else res.send(data);
    });
};

// Retrieve all Collections from the database
export const getJustCollections = (req, res) => {
  // Get all collections
  Collection.getJust((err, data) => {
      if (err)
          res.status(500).send(err);
      else res.send(data);
  });
};


// Find a single Collection with a id
export const getOneCollection = (req, res) => {
    Collection.getOne(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send(err);
            } else {
                res.status(500).send(err);
            }
        } else res.send(data);
    });
};

// Update a Collection identified by the id in the request
export const updateCollection = (req, res) => {

 // Validate Request
 if (!req.body) {
    res.status(400).send("no data");
  }
  Collection.update(
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

// Delete a Collection with the specified id in the request
export const deleteCollection = (req, res) => {
    Collection.delete(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send(err);
          } else {
            res.status(500).send(err);
          }
        } else res.send("Collection deleted");
      });
};
