const express = require('express');
const router = express.Router();

console.log("Test Routes Loaded");

router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: "GET Test route working 🚀"
  });
});

module.exports = router;
