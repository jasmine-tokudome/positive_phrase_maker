const interests = []
const specialities = []
const greetings = []
const button = document.querySelector("#button");
button.addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * interests.length);
    const index2 = Math.floor(Math.random() * specialities.length);
    const index3 = Math.floor(Math.random() * greetings.length);
    const interest = interests[index1];
    const speciality = interests[index2];
    const greeting = interests[index3];
    const message = `
    こんにちは
    `
    const output = document.querySelector("#output");
    output.textContent = message;
});
