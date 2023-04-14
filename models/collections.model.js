import sql from './db.model.js';

const Collections = (collection) => {
    this.id = collection.id
    this.title = collection.title;
}

Collections.create = (newCollection, result) => {
    sql.query("INSERT INTO collections SET ?", newCollection, (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newCollection });
    })
}

// Get all courses within a specific collection
Collections.getAll = (id, result) => {
    sql.query("SELECT * FROM collections RIGHT JOIN coursecollections ON collections.id = coursecollections.collectionId LEFT JOIN courses ON coursecollections.courseId = courses.id WHERE collections.id = ? LIMIT 5",[id], (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        result(null, res);
    })
}

// Get just a list of collections
Collections.getJust = (result) => {
    sql.query("SELECT * FROM collections LIMIT 5", (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        result(null, res);
    
    })
}

Collections.getOne = (id, result) => {
    sql.query("SELECT * FROM collections WHERE id = ? LIMIT 5", id, (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Collections.update = (id, collection, result) => {
    sql.query("UPDATE collections SET title = ? WHERE id = ?", [collection.title, id], (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            // collection not found with this ID
            result({ collection: "not_found" }, null)
            return;
        }
        result(null, { id: id, ...collection });
    })
}

Collections.delete = (id, result) => {
    sql.query('DELETE FROM collections WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log(err)
            result(null, err)
            return;
        }
        if (res.affectedRows == 0) {
            // Collection not found with given ID
            result({ collection: 'not found' }, null)
        }

        result(null, res);
    })
}

export default Collections;