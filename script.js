var historique = [];

function convertTemperature() {
  // Ajouter la conversion à l'historique
  // historique.push({celsius: celsius, fahrenheit: fahrenheit});

  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;

  
}


function generate_table() {
  var table = document.getElementById("historique_table");
 table.innerHTML = ""; // Efface le contenu actuel de la table

  for (var i = 0; i < historique.length; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell1.innerHTML = historique[i].celsius + " °C";
    cell2.innerHTML = historique[i].fahrenheit + " °F";
 
  }
}

