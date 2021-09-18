exports.registerController = (req, res) => {
    const db = require("../server");
    const bcrypt = require('bcrypt');

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 9);

    db.query(
        "INSERT INTO Users (firstName, lastName, email, password) VALUES (?,?,?,?)",
        [firstName, lastName, email, password],
        (err, data) => {
            console.log(err);
        }
    );
}