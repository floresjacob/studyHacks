const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Lesson collection and inserts the lesson content below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/lessonlist",
  {
    useMongoClient: true
  }
);

const lessonSeed = [
  {
    title: "Lesson 1",
    author: "Teacher",
    synopsis:
      "The First Lesson",
    date: new Date(Date.now())
  }
];

db.Lesson
  .remove({})
  .then(() => db.Lesson.collection.insertMany(lessonSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
