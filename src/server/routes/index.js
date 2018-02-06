const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/file-data', upload.single('file'), (req, res) => {
  if (req.file.size) {
    res.json(req.file.size);
  }
});

module.exports = router;
