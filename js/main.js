let averageFlow = document.querySelector("#average-flow");
let distance = document.querySelector("#distance");
let result = document.querySelector("#result");
let distanceStart = document.querySelector("#distance-start");
let distanceFinish = document.querySelector("#distance-finish");

const calckBtn = document.querySelector("#calck-btn");
const calearBtn = document.querySelector("#clear-btn");

calckBtn.addEventListener("click", calckResult);
calearBtn.addEventListener("click", clearForm);

function calckResult(e) {
  e.preventDefault()
  if (
    averageFlow.value.length != 0 &&
    (distance.value.length != 0 ||
      (distanceFinish.value.length != 0) & (distanceStart.value.length != 0))
  ) {
    if (distanceStart.value.length == 0 || distanceFinish.value.length == 0) {
      result.innerHTML =
        ((distance.value / 100) * averageFlow.value).toFixed(2) + " л";
    } else if (
      distanceStart.value.length != 0 &&
      distanceFinish.value.length != 0
    ) {
      result.innerHTML =
        (
          ((distanceFinish.value - distanceStart.value) / 100) *
          averageFlow.value
        ).toFixed(2) + " л";
    } else if (
      (distanceStart.value.length == 0 || distanceFinish.value.length == 0) &&
      distance.value.length != 0
    ) {
      result.innerHTML =
        ((distance.value / 100) * averageFlow.value).toFixed(2) + " л";
    }
  } else {
    alert("Заполните поля!");
  }
}
function clearForm() {
  document.querySelector("form").reset();
  result.innerHTML = "";
}
