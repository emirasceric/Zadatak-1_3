//Zadatak 3.

let broj = prompt("Unesite broj za provjeru !");

let brojevi = [];

for (let i = 1; i <= broj; i++) {
  if (broj % i === 0) {
    brojevi.push(parseInt(i));
  }
}

document.write("broj je djeljiv sa: " + brojevi);
