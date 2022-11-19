const dice = document.querySelector(".svgp");
const adviceNum = document.querySelector(".advice1");
const advice = document.querySelector(".heading");

function changeAdvice() {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => data.slip)
    .then((data) => {
      adviceNum.textContent = `Advice #${data.id}`;
      advice.textContent = data.advice;
      console.log(data);
    });
}
