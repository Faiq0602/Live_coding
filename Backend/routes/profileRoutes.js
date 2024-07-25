const express = require('express');
const { updateProfile } = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');
const { upload } = require('../middleware/uploadMiddleware');
const router = express.Router();

router.put('/update', protect, upload.single('avatar'), updateProfile);

module.exports = router;