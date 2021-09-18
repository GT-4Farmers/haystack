const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const session = require('express-session');

app.listen(3001, () => {
    console.log("Backend running on port 3001");
})

app.use(express.json());
app.use(cors());
app.use("/users/", require("./routes/usersRoute"));
app.use("/profile/", require("./routes/profileRoute"));
app.use("/register/", require("./routes/registerRoute"));
app.use("/login/", require("./routes/loginRoute"))

const db = mysql.createConnection({
    host: 'haystackdb.cwuhnsyt464r.us-east-1.rds.amazonaws.com',
    user: 'hayderson',
    password: 'shellhb3311',
    database: 'haystackdb'
});

db.connect(function(err) {
    if (err) {
        console.log('Connection to DB failed')
        throw err;
        return false;
    }
    console.log('Connected to HaystackDB!')
});

module.exports = db;

// const sessionStore = new MySQLStore({
//     expiration: (1825 * 86400 * 1000),
//     endConnectionOnClose: false
// }, db);

// app.use(session({
//     key: '4h873fhqnruiof33n3h8743q',
//     secret: '69g96h8ewr8h2397834h78vh',
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: (1825 * 86400 * 1000),
//         httpOnly: false
//     }
// }));