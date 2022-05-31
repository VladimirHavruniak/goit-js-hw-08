var throttle = require('lodash.throttle');
const formEl = document.querySelector(".feedback-form");
const inputEmailEl = document.querySelector('input[name="email"]');
const areaMessageeL = document.querySelector('textarea[name="message"]');
const result = {
    email: null,
    message: null,
};

formEl.addEventListener("input", throttle(((event) =>{
    if (!event.target.name === "email" || !event.target.name === "message") {
        return;
    }
    if (event.target.name === "email") {
        result.email = event.target.value;
    }
    if (event.target.name === "message") {
        result.message = event.target.value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(result));
}),300));
const recordsJSon = JSON.parse(localStorage.getItem("feedback-form-state"));

inputEmailEl.value = recordsJSon.email;
areaMessageeL.value = recordsJSon.message;
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(result);
    inputEmailEl.value = "";
    areaMessageeL.value = "";
})

