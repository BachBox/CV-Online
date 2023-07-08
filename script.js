"use strict";
const input = document.querySelector("#email");
const submitBtn = document.querySelector(".submit");
const hidden = document.querySelector("#about .info");
const hidden2 = document.querySelector("#about .icon-if");
const errMess = document.getElementById("errorMsg");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của button

  // Lấy giá trị nhập vào trong input
  let email = input.value.trim();
  if (email.match(regex)) {
    hidden.classList.remove("hidden");
    hidden2.classList.remove("hidden");
    errMess.classList.add("hidden");
    document.querySelector("form").classList.add("hidden");
  } else {
    errMess.innerHTML = "Email không đúng định dạng!";
    errMess.classList.remove("hidden");
  }
});

// Quest 10
const content = document.querySelectorAll(".job-info-content");
const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");
const jobEl = document.querySelectorAll(".job-info");

for (let i = 0; i < jobEl.length; i++) {
  jobEl[i].addEventListener("mouseover", () => {
    viewMore[i].classList.remove("hidden");
    //content is showed when hover, hide btn more
    if (!content[i].classList.contains("hidden")) {
      viewMore[i].classList.add("hidden");
    }
  });
  jobEl[i].addEventListener("mouseout", () => {
    viewMore[i].classList.add("hidden");
  });
}
//show content + view less btn
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", () => {
    content[i].classList.remove("hidden");
    viewMore[i].classList.add("hidden");
    viewLess[i].classList.remove("hidden");
    //Remove hidden + stretch content
    jobEl[i].style.alignSelf = "stretch";
  });
}
for (let i = 0; i < viewLess.length; i++) {
  viewLess[i].addEventListener("click", () => {
    content[i].classList.add("hidden");
    viewLess[i].classList.add("hidden");
  });
}
