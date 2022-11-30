const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
router.get('/',authController.isLoggedIn, (req, res) => {
    res.sendFile("main.html", { root: './public/' })
});
router.get('/register', (req, res) => {
    res.sendFile("register.html", { root: './public/' })
});
router.get('/login', (req, res) => {
    res.sendFile("login.html", { root: './public/' })
});
router.get('/home', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        res.sendFile("home.html", { root: './public/' })
    } else {
        res.sendFile("login.html", { root: './public/' });
    }
})
module.exports = router;