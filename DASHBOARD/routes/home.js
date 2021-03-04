const express  = require('express');
const router   = express.Router();

router.get('/', (req, res) => {
   res.render('pageContents')
});

module.exports = router;
