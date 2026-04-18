const asyncHandler = require("express-async-handler");
const Job = require("../models/job");

//create job
const createJob = asyncHandler(async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json(job);
});

//get Jobs
const getJobs = asyncHandler(async (req, res) => {
  const { keyword, page = 1, limit = 5 } = req.query;
  const query = keyword ? { title: { $regex: keyword, $options: "i" } } : {};
  const jobs = await Job.find(query);
  res.status(200).json(jobs);
});

//get job by id
const getJobById = async (req, res) => {
  console.log(req);
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update Job by Id
const updateJobById = asyncHandler(async (req, res, next) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  res.json(job);
});

//Delete Job by Id
const deleteJobById = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  res.json({ message: "Job Deleted Successfully" });
});

module.exports = {
  createJob,
  getJobs,
  getJobById,
  updateJobById,
  deleteJobById,
};
