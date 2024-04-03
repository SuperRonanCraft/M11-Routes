const diagnostics = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// GET Route for retrieving diagnostic information
diagnostics.get("/", (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile("./db/diagnostics.json").then((data) => {
    res.json(JSON.parse(data));
  });
});

// POST Route for a error logging
diagnostics.post("/", (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const log = {
    time: new Date().getTime(),
    error_id: uuidv4(),
    errors: req.body.errors,
  };
  readAndAppend(log, "./db/diagnostics.json");
  res.status(201).json({
    success: true,
  });
});

module.exports = diagnostics;
