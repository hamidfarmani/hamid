#!/usr/bin/env node
"use strict";

var chalk = require("chalk");

var response = chalk.bold.green;

var resume = require("./data.json");

function main() {
  Object.keys(resume).forEach((option) => {
    resume[`${option}`].forEach((info) => {
      console.log(response(info));
    });
  });
}

main();
