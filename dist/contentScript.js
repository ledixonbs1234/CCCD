/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/contentScript/contentScript.tsx ***!
  \*********************************************/

window.onload = () => {
    console.log("chay contentScript");
};
document.addEventListener("DOMContentLoaded", function () {
    console.log("chay");
});
chrome.runtime.onMessage.addListener((msg, sender, callback) => {
    if (msg) {
        if (msg.message === "ADD") {
            var event = new Event("input", { bubbles: true });
            let a = document.querySelector("#HoTen");
            a?.setAttribute("value", msg.data.Name);
            a.value = msg.data.Name;
            a?.dispatchEvent(event);
            let b = document.querySelector("#NgaySinh");
            b?.setAttribute("value", msg.data.NgaySinh);
            b.value = msg.data.NgaySinh;
            b?.dispatchEvent(event);
        }
    }
});
// const delay = (ms: number | undefined) =>
//   new Promise((res) => setTimeout(res, ms));
// function waitForNotElm(selector: any) {
//   return new Promise((resolve) => {
//     if (!document.querySelector(selector)) {
//       return "ok";
//     }
//     const observer = new MutationObserver(() => {
//       if (!document.querySelector(selector)) {
//         observer.disconnect();
//         resolve("ok");
//       }
//     });
//     // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });
//   });
// }
// function waitForElm(selector: any) {
//   return new Promise((resolve) => {
//     if (document.querySelector(selector)) {
//       return resolve(document.querySelector(selector));
//     }
//     const observer = new MutationObserver(() => {
//       if (document.querySelector(selector)) {
//         observer.disconnect();
//         resolve(document.querySelector(selector));
//       }
//     });
//     // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });
//   });
// }

/******/ })()
;
//# sourceMappingURL=contentScript.js.map