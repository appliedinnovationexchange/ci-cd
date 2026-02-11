const express = require('express');
const router = express.Router();


router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: "GET Test route working 🚀"
  });
});



module.exports = router;
