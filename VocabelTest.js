function displayRandomVocabulary() {
    let storedVocabularies = localStorage.getItem("vocabularyList");
 
    if (storedVocabularies) {
        let vocabularies = JSON.parse(storedVocabularies);
 
        if (vocabularies.length > 0) {
            let randomIndex = Math.floor(Math.random() * vocabularies.length);
            let randomVocabulary = vocabularies[randomIndex];
 
            let splitVocabulary = randomVocabulary.split("-");
            let germanWord = splitVocabulary[0].trim();
            let russianWord = splitVocabulary[1].trim();
 
            let h1Element = document.createElement("h1");
            h1Element.id = "vocabularyHeading"; // ID für das h1-Element
            let vocabularyText = document.createTextNode(germanWord);
            h1Element.appendChild(vocabularyText);
 
            let inputField = document.createElement("input");
            inputField.type = "text";
            
            inputField.id = "inputField";
            inputField.placeholder = "Geben Sie die russische Übersetzung ein";
 
            let checkButton = document.createElement("button");
            checkButton.id ="checkButton"
            checkButton.textContent = "Überprüfen";
            checkButton.addEventListener("click", function() {
                let userInput = inputField.value.trim();

 
                if (userInput === russianWord) {
                    alert("Richtig!");
                } else {
                    alert("Falsch!");
                }
                inputField.value= ""
            });
            
            document.body.appendChild(h1Element);
            document.body.appendChild(inputField);
            document.body.appendChild(checkButton);
        }
    }
 }
 
 // Aufruf der Funktion zum Anzeigen einer zufälligen Vokabel und des Eingabefelds beim Laden der Seite
 window.addEventListener("load", function() {
    displayRandomVocabulary();
 });
 