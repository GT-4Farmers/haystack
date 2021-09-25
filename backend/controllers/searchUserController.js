exports.searchUserController = (req, res) => {
    const db = require("../server");
    
    let userToSearch = req.body.userToSearch;

    db.query("SELECT * FROM Users WHERE firstName = ?", userToSearch, (err, data) => {
        if (data) {
            res.json({
                firstName: data[0].firstName,
                lastName: data[0].lastName
                
            })
        } else {
            res.json({
                success:false,
                msg:'An error occurred.'
            })
        }
    })
}