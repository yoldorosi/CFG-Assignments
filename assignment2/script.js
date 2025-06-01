// script.js

// Function to calculate base stats based on class choice
function calculateStats(classChoice) {
    let stats = {};
    if (classChoice === "Warrior") {
        stats = {Attack: 10, Magic: 2, Stealth: 3};
    } else if (classChoice === "Mage") {
        stats = {Attack: 2, Magic: 10, Stealth: 3};
    } else if (classChoice === "Rogue") {
        stats = {Attack: 4, Magic: 3, Stealth: 10};
    }
    return stats;
}

// Function to display character result
function displayCharacter(character) {
    const resultDiv = document.getElementById("result");
    // Change background based on race
    if (character.race === "Elf") {
        resultDiv.style.backgroundColor = "#e0ffe0";
    } else if (character.race === "Dwarf") {
        resultDiv.style.backgroundColor = "#fff0e0";
    } else {
        resultDiv.style.backgroundColor = "#e0e0ff";
    }
    resultDiv.innerHTML = ""; // Clear previous

    const title = document.createElement("h2");
    title.textContent = "Character Summary";
    resultDiv.appendChild(title);

    const nameP = document.createElement("p");
    nameP.textContent = "Name: " + character.name;
    resultDiv.appendChild(nameP);

    const raceP = document.createElement("p");
    raceP.textContent = "Race: " + character.race;
    resultDiv.appendChild(raceP);

    const classP = document.createElement("p");
    classP.textContent = "Class: " + character.classChoice;
    resultDiv.appendChild(classP);

    const statsP = document.createElement("p");
    statsP.textContent = `Stats - Attack: ${character.stats.Attack}, Magic: ${character.stats.Magic}, Stealth: ${character.stats.Stealth}`;
    resultDiv.appendChild(statsP);

    const skillsP = document.createElement("p");
    skillsP.textContent = "Skills: " + (character.skills.length > 0 ? character.skills.join(", ") : "None");
    resultDiv.appendChild(skillsP);

    const equipP = document.createElement("p");
    equipP.textContent = "Starter Equipment: " + (character.equipment ? "Included" : "Not Included");
    resultDiv.appendChild(equipP);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const race = document.getElementById("race").value;
    const classChoice = document.getElementById("class").value;
    const equipment = document.getElementById("equipment").checked;

    // Collect skills
    let skills = [];
    document.querySelectorAll('input[name="skills"]:checked').forEach((checkbox) => {
        skills.push(checkbox.value);
    });

    const stats = calculateStats(classChoice);

    const character = {
        name: name,
        race: race,
        classChoice: classChoice,
        stats: stats,
        skills: skills,
        equipment: equipment
    };

    console.log("Character Object:", character);
    alert("Character Created! Check the summary below.");
    displayCharacter(character);
}

// Function for hover event
function hoverFunction() {
    alert("You hovered over the text! onmouseover event triggered.");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("character-form").addEventListener("submit", handleFormSubmit);

    // Demonstrate split, unshift, shift in console
    let streams = "Web Development,Data Science,Cybersecurity";
    let streamsArray = streams.split(",");
    console.log("Streams Array:", streamsArray);
    streamsArray.unshift("UX/UI Design");
    console.log("After unshift:", streamsArray);
    let removed = streamsArray.shift();
    console.log("Removed Stream:", removed);
    console.log("Final Streams Array:", streamsArray);

    // Demonstrate object methods
    let programmingLanguages = {
        languages: ["JavaScript", "Python", "Java"],
        listLanguages: function() {
            console.log("Languages:", this.languages.join(", "));
        },
        addLanguage: function(newLang) {
            this.languages.push(newLang);
            console.log(newLang + " added.");
        }
    };
    programmingLanguages.listLanguages();
    programmingLanguages.addLanguage("C#");
    programmingLanguages.listLanguages();
});
