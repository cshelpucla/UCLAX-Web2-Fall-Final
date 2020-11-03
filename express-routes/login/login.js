const express = require('express');
const router = express.Router();

router.post('/validate', (req,res) => {

    const profile = {
        email: "meatch@me.com",
        first: 'Gohman',
        last: 'Mitch'
    }

    const response = {
        errors: false, 
        message: 'Login Validated',
        postedData: req.body,
        isLoggedIn: true,
        profile: profile
    }
    
    res.json(response);

});

module.exports = router;