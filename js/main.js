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
  e.preventDefault();
  let distanceTotal = distanceFinish.value - distanceStart.value;
  function formula() {
    result.innerHTML =
      ((distance.value / 100) * averageFlow.value).toFixed(2) + " л";
  }

  if (averageFlow.value != 0) {
    //Если заполнено пройденое расстояние
    if (distance.value != 0) {
      //Если помимо пройденного расстояния указаны показания одометра
      if ((distanceFinish.value && distanceStart.value) != 0) {
        //Проверяем равно ли заполненное поле пройденного расстояния разнице показаний одометра
        if (distance.value != distanceTotal) {
          alert(
            "Введенное пройденное расстояние не сходится с показаниями одометра!"
          );
        } else {
          formula();
        }
      } else {
        formula();
      }
    } else {
      //Если не заполнено поле расстояния
      if ((distanceFinish.value && distanceStart.value) != 0) {
        distance.value = distanceTotal;
        formula();
      } else {
        alert("Заполните показания одометра либо пройденное расстояние!");
      }
    }
  } else {
    alert("Введите средний расход");
  }
}
function clearForm() {
  document.querySelector("form").reset();
  result.innerHTML = "";
}
