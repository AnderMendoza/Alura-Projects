const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});


$(document).ready(function (){

  $('.script1').click(function () {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', "/projectsJavaScript/barChartDrawing.js")
    head.appendChild(script)
  });

  $('.script2').click(function () {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', "/projectsJavaScript/choiceOfColoredPaints.js")
    head.appendChild(script)
  });

  $('.script3').click(function () {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', "/projectsJavaScript/circleAnimation.js")
    head.appendChild(script)
  });

  $('.script4').click(function () {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', "/projectsJavaScript/circleAnimationWithBounce.js")
    head.appendChild(script)
  });

  $('.script5').click(function () {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', "/projectsJavaScript/creeperDrawing.js")
    head.appendChild(script)
  });

  $('.script6').click(function () {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', "/projectsJavaScript/currentTimePlusCoordinales.js")
    head.appendChild(script)
  });

  $('.script7').click(function () {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', "/projectsJavaScript/drawingCircles.js")
    head.appendChild(script)
  });

  $('.script8').click(function () {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', "/projectsJavaScript/squareDrawing.js")
    head.appendChild(script)
  });
});