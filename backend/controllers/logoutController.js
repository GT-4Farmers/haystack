exports.logoutController = (req, res) => {
    const db = require("../server");

    console.log("logout Controller req.sessions.userid:")
    console.log(req.session.userID);
    
    if (req.session.userID) {
        req.session.destroy();
        res.json({
            success: true
        })
        res.end();
        return true;
    } else {
        res.json({
            success: false
        })

        return false;
    }
}