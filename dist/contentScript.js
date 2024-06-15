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
chrome.runtime.onMessage.addListener((msg, _sender) => {
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
            let c = document.querySelector("#submit");
            c?.click();
        }
    }
});

/******/ })()
;
//# sourceMappingURL=contentScript.js.map