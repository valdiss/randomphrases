
let sujet = ["la nature", "la pollution", "Jacques Chirac", "un Pokemon"];
let verbe = ["mange", "concentre", "glisse", "se casse"];
let complement = ["sa force", "les immeubles", "la margoulette", "un chien"];
let phrase = [];
phrase.push(sujet[Math.floor(Math.random()*sujet.length)], verbe[Math.floor(Math.random()*verbe.length)] , complement[Math.floor(Math.random()*complement.length)]);

let complete = phrase.join(' ');
alert (complete);
