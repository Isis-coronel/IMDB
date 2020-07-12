"use strict";
exports.__esModule = true;
var professional_1 = require("./Professional/professional");
var BradPitt = new professional_1.Professional("Brad Pitt", 56, "male", 78, 180, "blonde", "Blue", "white", false, "american", 2, "actor");
var AngelinaJolie = new professional_1.Professional("Angelina Jolie", 45, "Female", 50, 169, "brown", "blue", "middlewhite", false, "CamboyanAmerican", 2, "actress");
BradPitt.showAttributes();
AngelinaJolie.showAttributes();
