import sql from './db.model.js';

const Courses = (course) => {
    this.id = course.id
    this.coursetitle = course.coursetitle
    this.description = course.description
    this.duration = course.duration
    this.outcome = course.outcome
    this.created = course.created
    this.modified = course.modified
}

Courses.create = (newCourse, result) => {
    sql.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newCourse });
    })
}

Courses.getAll = (result) => {
    sql.query("SELECT * FROM courses LIMIT 5", (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Courses.just


Courses.getOne = (id,result) => {
    sql.query("SELECT * FROM courses WHERE id = ? LIMIT 5",id, (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        result(null, res);
    })
}
Courses.update = (id, course, result) => {
    sql.query("UPDATE courses SET coursetitle = ?, description = ?, duration = ?, outcome = ?, created = ?, modified = ? WHERE id = ?", [course.coursetitle, course.description, course.duration, course.outcome, course.created, course.modified, id], (err, res) => {
        if (err) {
            console.log(err)
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            // course not found with this ID
            result({ course: "not_found" }, null)
            return;
        }

        result(null, { id: id, ...course });
    })
}

Courses.delete = (id, result) => {
    sql.query('DELETE FROM courses WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log(err)
            result(null, err)
            return;
        }
        if (res.affectedRows == 0) {
            // Course not found with given ID
            result({ collection: 'not found' }, null)
        }

        result(null, res);
    })
}

export default Courses;