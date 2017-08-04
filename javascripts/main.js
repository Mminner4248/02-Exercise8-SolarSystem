var planets = [" mercury", " venus", " earth", " mars", " jupiter", " saturn", " uranus", " neptune"];
var el = document.getElementById("planets");
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function(index){
    el.innerHTML = `${planets}<br><br>`;
});

// Use the map method to create a new array where the first letter of each planet is capitalized
var upPlanets = planets.map(function(str){
    return (" " + str.charAt(1).toUpperCase() + str.slice(2));
});

el.innerHTML += `${upPlanets}<br><br>`;
console.log("planetsUpp", upPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function(letter){
    return letter.toLowerCase().match("e");
});

 el.innerHTML += `${ePlanets}<br><br>`;
 console.log("ePlanets:", ePlanets)


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(sum, value){
    return sum + " " + value;
    });
el.innerHTML += sentence;
console.log("sentence:", sentence);