"use strict";

const notification = document.querySelectorAll(".notifications");
const redDot = document.querySelectorAll(".red-pointer");
const notificationNum = document.querySelector(".notification-num");
const markRead = document.querySelector(".mark-read");
let notificationNumber = Number(notificationNum.textContent);

// for each button click
for (let i = 0; i < notification.length; i++) {
  let isClicked = false;

  notification[i].addEventListener("click", () => {
    // clicking should happen only if notification number is zero, and when we haven't click a notification before
    if (notificationNumber > 0 && !isClicked) {
      isClicked = true;

      notification[i].classList.remove("bg-veryLightGrayishBlue");
      redDot[i].classList.add("hidden");
      notificationNumber--;
      notificationNum.textContent = notificationNumber;
    }
  });
}

// mark all as read

markRead.addEventListener("click", () => {
  // reduce notifaction number to zero
  notificationNumber = 0;
  notificationNum.textContent = notificationNumber;

  //   remove background and red pointer from all notifications
  for (let i = 0; i < notification.length; i++) {
    notification[i].classList.remove("bg-veryLightGrayishBlue");
    redDot[i].classList.add("hidden");
  }
});
