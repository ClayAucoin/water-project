
var esButton = document.getElementById("esButton")
esButton.addEventListener("click", function () {
    document.getElementById("pageTitle").textContent = "Proyecto de Conservación del Agua";
    document.getElementById("title").innerHTML = "Consejos de Conservación<br>del Agua";
    document.getElementById("subtitle").innerHTML = "Es importante que todos hagamos nuestra parte para<br>usar menos agua. Haz clic en esta aplicación para<br>obtener ideas sobre conservación.";
    document.getElementById("nextButton").setAttribute("href", "water-bottle-screen-es.html");
    document.getElementById("nextButton").textContent = "Siguiente";
    document.getElementById("water-in-glass").setAttribute("alt", "Vaso de agua");
});

var enButton = document.getElementById("enButton")
enButton.addEventListener("click", function () {
    document.getElementById("pageTitle").textContent = "Water Conservation Project";
    document.getElementById("title").textContent = "Water Conservation Tips";
    document.getElementById("subtitle").textContent = "It's important that we all do our part to use less water. Click through this app for tips for conservation ideas.";
    document.getElementById("nextButton").setAttribute("href", "water-bottle-screen-en.html");
    document.getElementById("nextButton").textContent = "Next";
    document.getElementById("water-in-glass").setAttribute("alt", "Glass of water");
});


