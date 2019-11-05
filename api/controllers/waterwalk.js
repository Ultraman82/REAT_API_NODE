//const mongoose = require("mongoose");
//const Waterwalk = require("../models/waterwalk");

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePhone(number) {
  var re = /^\d{10}$/;
  return re.test(number);
}
function validateName(name) {
  var re = /^[a-zA-Z ]+$/;
  return re.test(name);
}

exports.verifyData = (req, res, next) => {
  const { email, phone, input } = req.body;
  let validEmail = validateEmail(email);
  let validPhone = validatePhone(phone);
  let validName = validateName(input);
  if (validName) {
    if (validEmail) {
      if (validPhone) {
        res.status(201).json({
          success: true,
          message: "Proper data form was given",
          email,
          phone,
          name: input
        });
      } else {
        res.status(500).json({
          message: `Invalid Phonenumber ${phone}`
        });
      }
    } else {
      res.status(500).json({
        message: `Invalid email ${email}`
      });
    }
  } else {
    res.status(500).json({
      message: `Invalid name ${input}`
    });
  }
};
