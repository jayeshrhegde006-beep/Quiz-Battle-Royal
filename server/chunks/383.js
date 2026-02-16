"use strict";
exports.id = 383;
exports.ids = [383];
exports.modules = {

/***/ 4795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ playSound)
/* harmony export */ });
function playSound(sound, volume = 0.25) {
    if (localStorage.getItem("sound") === "true") {
        const audio = new Audio(`/sounds/${sound}.mp3`);
        audio.volume = volume;
        audio.play();
    }
}


/***/ }),

/***/ 1573:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"aa","name":"History","color":"#e6c642"},{"id":"ab","name":"Entertainment","color":"#f94e4e"},{"id":"ac","name":"Technology","color":"#685af5"},{"id":"ad","name":"Geography","color":"#3ce956"},{"id":"ae","name":"Art","color":"#307de7"},{"id":"af","name":"Space","color":"#a656fd"},{"id":"ah","name":"Science","color":"#e857ed"},{"id":"ag","name":"General culture","color":"#56cfef"}]');

/***/ })

};
;