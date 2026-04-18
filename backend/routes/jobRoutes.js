const express = require("express");
const {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  deleteJobById,
} = require("../controllers/jobController");
const isAuthenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/createJob", isAuthenticate, createJob);
router.get("/getJobs", getJobs);

router.get("/getJobs/:id", getJobById);
router.put("/update/:id", updateJobById);
router.delete("/delete/:id", deleteJobById);

module.exports = router;
