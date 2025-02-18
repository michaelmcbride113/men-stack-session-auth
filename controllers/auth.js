const express = require("express");
const router = express.Router();

// This could go in server.js but placing it here and declaring a variable keeps
// server,js clean
router.get('/sign-up', (req, res) => {
    res.render('auth/sign-up.ejs');
})


module.exports = router;