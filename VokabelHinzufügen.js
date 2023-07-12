function add() {
   let valueRussia = document.getElementById("inputFieldRussia").value;
   let valueGerman = document.getElementById("inputFieldGerman").value;

   if (valueGerman === "" && valueRussia === "") {
       alert("Bitte schreiben Sie etwas in das Textfeld");
   } else {
       let newListElement = document.createElement("li");
       let text2 = document.createTextNode(valueRussia);
       let text = document.createTextNode(valueGerman);
       let minus = document.createTextNode(" - ");
       newListElement.appendChild(text);
       newListElement.appendChild(minus);
       newListElement.appendChild(text2);

       let deleteButton = document.createElement("button");
       let buttonText = document.createTextNode("Löschen");
       deleteButton.classList.add("deleteBtn");
       deleteButton.className.add = "delete";
       deleteButton.appendChild(buttonText);

       deleteButton.onclick = function() {
           this.parentNode.remove();
           deleteVocabulary(vocabulary);
       };

       newListElement.appendChild(deleteButton);

       let list = document.getElementById("liste");
       list.appendChild(newListElement);

       document.getElementById("inputFieldRussia").value = "";
       document.getElementById("inputFieldGerman").value = "";
       let vocabulary = valueGerman + "-" + valueRussia;
       saveVocabulary(vocabulary);
   }
}

// Funktion zum Laden der gespeicherten Vokabeln aus dem Local Storage und Anzeigen in der Liste
function loadVocabularies() {
   let storedVocabularies = localStorage.getItem("vocabularyList");

   if (storedVocabularies) {
       let vocabularies = JSON.parse(storedVocabularies);

       let list = document.getElementById("liste");

       for (let i = 0; i < vocabularies.length; i++) {
           let vocabulary = vocabularies[i];

           let newListElement = document.createElement("li");
           let vocabularyText = document.createTextNode(vocabulary);
           newListElement.appendChild(vocabularyText);

           let deleteButton = document.createElement("button");
           let buttonText = document.createTextNode("Löschen");
           deleteButton.classList.add("deleteBtn");
           deleteButton.className.add = "delete";
           deleteButton.appendChild(buttonText);

           deleteButton.onclick = function() {
               this.parentNode.remove();
               deleteVocabulary(vocabulary);
           };

           newListElement.appendChild(deleteButton);
           list.appendChild(newListElement);
       }
   }
}

// Funktion zum Speichern einer neuen Vokabel im Local Storage
function saveVocabulary(vocabulary) {
   let storedVocabularies = localStorage.getItem("vocabularyList");

   if (storedVocabularies) {
       let existingVocabularies = JSON.parse(storedVocabularies);
       existingVocabularies.push(vocabulary);
       localStorage.setItem("vocabularyList", JSON.stringify(existingVocabularies));
   } else {
       let newVocabularies = [vocabulary];
       localStorage.setItem("vocabularyList", JSON.stringify(newVocabularies));
   }
}

// Funktion zum Löschen einer Vokabel aus dem Local Storage
function deleteVocabulary(vocabulary) {
   let storedVocabularies = localStorage.getItem("vocabularyList");

   if (storedVocabularies) {
       let existingVocabularies = JSON.parse(storedVocabularies);
       let index = existingVocabularies.indexOf(vocabulary);

       if (index !== -1) {
           existingVocabularies.splice(index, 1);
           localStorage.setItem("vocabularyList", JSON.stringify(existingVocabularies));
       }
   }
}

// Event-Listener, der auf das Laden der Seite wartet und dann die gespeicherten Vokabeln lädt
window.addEventListener("load", function() {
   loadVocabularies();
});
