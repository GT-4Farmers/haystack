exports.registerController = (req, res) => {
    const db = require("../server");
    const bcrypt = require('bcrypt');

    const email = req.body.email;

    // Check users table to see if email is already in use
    db.query(`SELECT * FROM Users WHERE email = ? LIMIT 1`, [email], (err, data, fields) => {
        if (err) {
            res.json({
                success: false,
                msg: 'An error occured, please try again.'
            })
            return;
        }

        // if found 1 user
        if (data && data.length === 1) {
            res.json({
                success: false,
                msg: "A user already exists with that email address."
            })
            return;
        } else { // if email is not found a new user can be made
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const password = bcrypt.hashSync(req.body.password, 9);
        
            var sql = `INSERT INTO Users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;
            var cols = [firstName, lastName, email, password];
            db.query(sql, cols, function (err, data) {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occured, please try again.'
                    })
                    return;
                } else {
                    var bio = '';
                    var birthdate = '';
                    var location = '';
                    var phone = ''
                    var sql = `INSERT INTO Profiles (email, bio, birthdate, location, phone) VALUES (?, ?, ?, ?, ?)`;
                    var cols = [email, bio, birthdate, location, phone];
                    db.query(sql, cols, function (err, data) {
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'An error occured, please try again.'
                            })
                            return;
                        } else {
                            res.json({
                                success: true,
                                email: email,
                                firstName: firstName,
                                lastName: lastName
                            })
                            return;
                        }
                    });
                }
            });
        }
    });
}