const express = require('express');
const router = express.Router();

const uploadsController = require("../controllers/uploads");

/* GET user uploads. */
router.get("/", uploadsController.getUploads);

/* GET user upload */

router.get("/:id", uploadsController.getUpload)

/* Create user upload*/

router.post("/", uploadsController.postUpload)


module.exports = router;
