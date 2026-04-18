const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  //  timestamps: true
});

/*Why { timestamps: true }

MongoDB automatically adds:

createdAt
updatedAt

Very useful for APIs. */

module.exports = mongoose.model("Jobs", jobSchema);
