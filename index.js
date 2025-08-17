
esButton.addEventListener("click", function() {
    document.getElementById("pageTitle").textContent = "Proyecto de Conservación del Agua";
    document.getElementById("title").textContent = "Consejos de Conservación del Agua";
    document.getElementById("subtitle").textContent = "Es importante que todos hagamos nuestra parte para usar menos agua. Haz clic en esta aplicación para obtener ideas sobre conservación.";
    document.getElementById("nextButton").setAttribute("href", "page2es.html");
    document.getElementById("nextButton").textContent = "Siguiente";
    document.getElementById("water-in-glass").setAttribute("alt", "Vaso de agua");
});

enButton.addEventListener("click", function() {
    document.getElementById("pageTitle").textContent = "Water Conservation Project";
    document.getElementById("title").textContent = "Water Conservation Tips";
    document.getElementById("subtitle").textContent = "It's important that we all do our part to use less water. Click through this app for tips for conservation ideas.";
    document.getElementById("nextButton").setAttribute("href", "page2en.html");
    document.getElementById("nextButton").textContent = "Next";
    document.getElementById("water-in-glass").setAttribute("alt", "Glass of water");
});