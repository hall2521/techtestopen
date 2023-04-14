import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import {getAllCollections, getOneCollection, getJustCollections, updateCollection, deleteCollection, createCollection} from '../controllers/collections.controller.js';

// Create a new Collection
router.post("/", createCollection);

// Read all Courses with a collection
router.get("/:id", getAllCollections);

// Read all collections
router.get("/", getJustCollections);

// Read one Collection
router.get("/getone/:id", getOneCollection);

// Update a Collection with id
router.put("/:id", updateCollection);

// Delete a Collection with id
router.delete("/:id", deleteCollection);

export default router;