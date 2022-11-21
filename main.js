
// On button click run pick function
let pickElement = document.getElementById("pick");
pickElement.onclick = pick;

function pick() {
    // Grab the contents of the text area
    let namesElement = document.getElementById("names");
    let namesText = namesElement.value;
    // Split into lines
    let names = namesText.split("\n");
    // Pick a random number (up to total lines)
    let max = names.length;
    let pick = Math.floor(Math.random() * max);
    // Show the random number
    alert(names[pick]);
}
