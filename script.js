"use strict";
const questions = document.querySelectorAll(".questions");
questions.forEach((question) => {
  question.addEventListener("click", function () {
    questions.forEach((question) => {
      question.children[1].children[0].style.display = "none";
      question.children[0].children[1].style.display = "flex";
      question.children[0].children[2].style.display = "none";
      question.children[0].children[0].style.fontWeight = "normal";
    });
    question.children[1].children[0].style.display = "flex";
    question.children[0].children[1].style.display = "none";
    question.children[0].children[2].style.display = "flex";
    question.children[0].children[0].style.fontWeight = "bold";
  });
});
