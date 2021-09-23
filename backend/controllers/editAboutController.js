exports.editAboutController = (req, res) => {
    const db = require("../server");
    var email = req.session.userID
    var bio = req.body.bio
    var birthdate = req.body.birthdate
    var location = req.body.location
    var phone = req.body.phone

    var update_sql = 'UPDATE Profiles SET bio = ?, birthdate = ?, location = ?, phone = ? WHERE email = ?'
    var update_cols = [bio, birthdate, location, phone, email]
    db.query(update_sql, update_cols, (err) => {
        if (err) {
            res.json({
                success: false,
                msg: 'An error occured, please try again.'
            })
            return;
        } else {
            res.json({
                success: true
            })
            return;
        }
    })
}