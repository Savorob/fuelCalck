let averageFlow = document.querySelector("#average-flow");
let distance = document.querySelector("#distance");
let result = document.querySelector('#result');
const calckBtn = document.querySelector('#calck-btn');

calckBtn.addEventListener('click', function(){
    result.innerHTML = ((distance.value / 100) * averageFlow.value).toFixed(2) + " л";
})
