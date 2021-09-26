exports.searchUserController = (req, res) => {
    const db = require("../server");
    
    let userToSearch = (req.body.userToSearch === "" ? "" : '%' + req.body.userToSearch + '%');
    // console.log("userToSearch:",userToSearch);

    db.query('SELECT * FROM `Users` WHERE (LOWER(`firstName`) LIKE LOWER(?)) OR (LOWER(`lastName`) LIKE LOWER(?))', [userToSearch, userToSearch], (err, data, fields) => {
        // if at least 1 user exists
        if (data[0]) {

            // TODO: map not just data[0] but all data to array and set as response

            res.json({
                success: true,
                firstName: data[0].firstName,
                lastName: data[0].lastName
            })
        } else {
            res.json({
                success: false,
                msg:'An error occurred.'
            })
        }
    });
}