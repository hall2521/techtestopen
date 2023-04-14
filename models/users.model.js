import sql from './db.model.js';

const Users = (user) => {
    this.id = user.id
    this.name = user.name;
    this.password = user.password
}

Users.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err){
            console.log(err)
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newUser});
    })
}

Users.getAll = (result) => {
    sql.query("SELECT * FROM users LIMIT 5", (err, res) => {
        if(err){
            console.log(err)
            result(err, null);
            return;
        }
        result(null, res);
    })
}


Users.getOne = (id, result) => {
    sql.query("SELECT * FROM users WHERE id = ? LIMIT 5",id, (err, res) => {
        if(err){
            console.log(err)
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Users.login = (user, result) => {
    sql.query("SELECT * FROM users where name = ? AND password = ? LIMIT 5",[user.name, user.password], (err, res) => {
        if(err){
            console.log(err)
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Users.update = (id, user, result) => {
    sql.query("UPDATE users SET name = ?, password = ? WHERE id = ?", [user.name, user.password, id], (err, res) => {
        if (err){
            console.log(err)
            result(err, null);
            return;
        }
        if (res.affectedRows == 0){
            // user not found with this ID
            result({ user: "not_found"}, null)
            return;
        }

        result(null, { id: id, ...user});
    })
}

Users.delete = (id, result) => {
sql.query('DELETE FROM users WHERE id = ?', id, (err, res) => {
    if (err){
        console.log(err)
        result(null,err)
        return;
    }
    if (res.affectedRows == 0){
        // User not found with given ID
        result({ user: 'not found'}, null)
    }

    result(null,res);
})
}

export default Users;