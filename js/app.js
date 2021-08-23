"use strict";

// Colors
const valid = "#44C767";
const invalid = "#ff0000";

// state
let emailError = false;
let passwordError = false;
let confirmPasswordError = false;

// Select elements
const form = document.getElementById("form");
const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const submitBtn = document.getElementById("submit");
const emailErrorMessage = document.querySelector(".form__error--email");
const passwordErrorMessage = document.querySelector(".form__error--password");
const passwordConfirmErrorMessage = document.querySelector(
  ".form__error--passwordConfirm"
);

// RegEx
const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordPattern = /^.{6,}$/;

// Functionality

// username field
usernameField.addEventListener("change", function (e) {
  if (!e.target.value) e.target.style.borderColor = invalid;
  e.target.style.borderColor = valid;
});

// email field
emailField.addEventListener("change", function (e) {
  if (emailPattern.test(e.target.value)) {
    e.target.style.borderColor = valid;
    emailErrorMessage.textContent = "";
    emailError = false;
  } else {
    e.target.style.borderColor = invalid;
    emailErrorMessage.textContent = "Email is not valid";
    emailError = true;
  }
});

// password
passwordField.addEventListener("input", function (e) {
  if (passwordPattern.test(e.target.value)) {
    e.target.style.borderColor = valid;
    passwordErrorMessage.textContent = "";
    passwordError = false;
  } else {
    e.target.style.borderColor = invalid;
    passwordErrorMessage.textContent = "Password must be at least 6 characters";
    passwordError = true;
  }
});

// Confirm Password
confirmPasswordField.addEventListener("input", function (e) {
  if (!passwordField.value) return;
  else if (e.target.value === passwordField.value) {
    e.target.style.borderColor = valid;
    passwordConfirmErrorMessage.textContent = "";
    confirmPasswordError = false;
  } else {
    e.target.style.borderColor = invalid;
    passwordConfirmErrorMessage.textContent =
      "Please make sure your passwords match";
    confirmPasswordError = true;
  }
});

// submit form
form.addEventListener("submit", function (e) {
  if (emailError || passwordError || confirmPasswordError) e.preventDefault();
});
