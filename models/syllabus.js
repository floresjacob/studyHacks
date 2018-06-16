const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const syllabusSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  synopsis: String,
  length: { type: int, required: true },
});

const Syllabus= mongoose.model("Syllabus", syllabusSchema);

module.exports = Syllabus;
