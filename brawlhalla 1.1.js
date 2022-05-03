"use strict";

let lg1 = {
  name: "Bödvar",
  weapon: "sword",
  weapon2: "hammer",
  at: 6,
  dx: 6,
  def: 5,
  sp: 5,
  sigchar: "Y-direction change",
};

let lg2 = {
  name: "Cassidy",
  weapon: "guns",
  weapon2: "hammer",
  at: 6,
  dx: 8,
  def: 4,
  sp: 4,
  sigchar: "X-direction change",
};
let lg3 = {
  name: "Orion",
  weapon: "spear",
  weapon2: "rocketlance",
  at: 4,
  dx: 6,
  def: 6,
  sp: 6,
  sigchar: "X-direction change",
};
let lg4 = {
  name: "Lord vraxx",
  weapon: "guns",
  weapon2: "rocketlance",
  at: 4,
  dx: 8,
  def: 4,
  sp: 6,
  sigchar: "X-direction change",
};
let lg5 = {
  name: "Gnash",
  weapon: "hammer",
  weapon2: "spear",
  at: 7,
  dx: 3,
  def: 5,
  sp: 7,
  sigchar: { sighchar1: "X-direction change", sigchar2: "Y-direction change" }, //endast en sigchar är tillagd för förenklad sökning, kom p att jag kan placera objekt i objekt
};
let lg6 = {
  name: "Queen nai",
  weapon: "spear",
  weapon2: "katars",
  at: 7,
  dx: 4,
  def: 8,
  sp: 3,
  sigchar: { sigchar1: "Y-direction change", sigchar2: "X-direction change" },
};
let lg7 = {
  name: "Hattori",
  weapon: "sword",
  weapon2: "spear",
  at: 4,
  dx: 6,
  def: 4,
  sp: 8,
  sigchar: { sigchar1: "X-direction change", sigchar2: "X-direction change" },
};
let lg8 = {
  name: "Sir roland",
  weapon: "rocketlance",
  weapon2: "sword",
  at: 5,
  dx: 5,
  def: 8,
  sp: 4,
  sigchar: "X-direction change",
};
let lg9 = {
  name: "Scarlet",
  weapon: "hammer",
  weapon2: "rocketlance",
  at: 8,
  dx: 5,
  def: 5,
  sp: 4,
  sigchar: "standard",
};
let lg10 = {
  name: "Thatch",
  weapon: "sword",
  weapon2: "guns",
  at: 7,
  dx: 5,
  def: 3,
  sp: 7,
  sigchar: "standard",
};
let lg11 = {
  name: "Ada",
  weapon: "guns",
  weapon2: "spear",
  at: 6,
  dx: 7,
  def: 3,
  sp: 6,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg12 = {
  name: "Sentinel",
  weapon: "hammer",
  weapon2: "katars",
  at: 5,
  dx: 4,
  def: 7,
  sp: 6,
  sigchar: "X-direction change",
};
let lg13 = {
  name: "Lucien",
  weapon: "katars",
  weapon2: "guns",
  at: 3,
  dx: 5,
  def: 6,
  sp: 8,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg14 = {
  name: "Teros",
  weapon: "axe",
  weapon2: "hammer",
  at: 8,
  dx: 3,
  def: 6,
  sp: 5,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg15 = {
  name: "Brynn",
  weapon: "axe",
  weapon2: "spear",
  at: 5,
  dx: 5,
  def: 5,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg16 = {
  name: "Asuri",
  weapon: "katars",
  weapon2: "sword",
  at: 4,
  dx: 7,
  def: 5,
  sp: 6,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" }, // objekt i ett objekt
  //för att utdöka det som defineras vid val av sig och hur en legend kan bli vald
};
let lg17 = {
  name: "Barraza",
  weapon: "guns",
  weapon2: "axe",
  at: 6,
  dx: 4,
  def: 8,
  sp: 4,
  sigchar: "standard",
};
let lg18 = {
  name: "Ember",
  weapon: "bow",
  weapon2: "Katars",
  at: 6,
  dx: 6,
  def: 3,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg19 = {
  name: "Azoth",
  weapon: "bow",
  weapon2: "axe",
  at: 7,
  dx: 5,
  def: 6,
  sp: 4,
  sigchar: "standard",
};
let lg20 = {
  name: "Koji",
  weapon: "bow",
  weapon2: "sword",
  at: 5,
  dx: 8,
  def: 4,
  sp: 5,
  sigchar: "X-direction change",
};
let lg21 = {
  name: "Ulgrim",
  weapon: "rocketlance",
  weapon2: "axe",
  at: 6,
  dx: 3,
  def: 7,
  sp: 6,
  sigchar: "X-direction change",
};
let lg22 = {
  name: "Diana",
  weapon: "bow",
  weapon2: "guns",
  at: 5,
  dx: 6,
  def: 5,
  sp: 6,
  sigchar: { Sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg23 = {
  name: "Jhala",
  weapon: "axe",
  weapon2: "sword",
  at: 7,
  dx: 7,
  def: 3,
  sp: 5,
  sigchar: "X-direction change",
};
let lg24 = {
  name: "Kor",
  weapon: "hammer",
  weapon2: "gloves",
  at: 6,
  dx: 5,
  def: 7,
  sp: 4,
  sigchar: "X-direction change",
};
let lg25 = {
  name: "Wu shang",
  weapon: "gloves",
  weapon2: "spear",
  at: 5,
  dx: 7,
  def: 5,
  sp: 5,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg26 = {
  name: "Val",
  weapon: "sword",
  weapon2: "gloves",
  at: 4,
  dx: 5,
  def: 6,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg27 = {
  name: "Ragnir",
  weapon: "axe",
  weapon2: "katars",
  at: 5,
  dx: 6,
  def: 6,
  sp: 5,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg28 = {
  name: "Cross",
  weapon: "gloves",
  weapon2: "guns",
  at: 7,
  dx: 4,
  def: 6,
  sp: 5,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg29 = {
  name: "Mirage",
  weapon: "spear",
  weapon2: "scythe",
  at: 7,
  dx: 6,
  def: 4,
  sp: 5,
  sigchar: "X-direction change",
};
let lg30 = {
  name: "Nix",
  weapon: "guns",
  weapon2: "scythe",
  at: 4,
  dx: 5,
  def: 7,
  sp: 6,
  sigchar: "X-direction change",
};
let lg31 = {
  name: "Mordex",
  weapon: "gloves",
  weapon2: "scythe",
  at: 6,
  dx: 4,
  def: 5,
  sp: 7,
  sigchar: { sigchar1: "input", sigchar2: "Y-direction change" },
};
let lg32 = {
  name: "Yumiko",
  weapon: "hammer",
  weapon2: "bow",
  at: 4,
  dx: 7,
  def: 4,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg33 = {
  name: "Artemis",
  weapon: "rocketlance",
  weapon2: "scythe",
  at: 5,
  dx: 5,
  def: 4,
  sp: 8,
  sigchar: "X-direction change",
};
let lg34 = {
  name: "Caspian",
  weapon: "katars",
  weapon2: "gloves",
  at: 7,
  dx: 5,
  def: 4,
  sp: 6,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg35 = {
  name: "Sidra",
  weapon: "sword",
  weapon2: "canon",
  at: 6,
  dx: 4,
  def: 6,
  sp: 6,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg36 = {
  name: "Xull",
  weapon: "axe",
  weapon2: "canon",
  at: 9,
  dx: 4,
  def: 5,
  sp: 4,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg37 = {
  name: "Kaya",
  weapon: "bow",
  weapon2: "spear",
  at: 4,
  dx: 4,
  def: 7,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg38 = {
  name: "Isaiah",
  weapon: "canon",
  weapon2: "guns",
  at: 5,
  dx: 6,
  def: 7,
  sp: 4,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg39 = {
  name: "Jiro",
  weapon: "sword",
  weapon2: "scythe",
  at: 5,
  dx: 7,
  def: 3,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg40 = {
  name: "Lin Fei",
  weapon: "canon",
  weapon2: "katars",
  at: 3,
  dx: 8,
  def: 4,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg41 = {
  name: "Zariel",
  weapon: "bow",
  weapon2: "gloves",
  at: 7,
  dx: 4,
  def: 7,
  sp: 4,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg42 = {
  name: "Rayman",
  weapon: "axe",
  weapon2: "gloves",
  at: 5,
  dx: 5,
  def: 6,
  sp: 6,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg43 = {
  name: "Dusk",
  weapon: "spear",
  weapon2: "orb",
  at: 6,
  dx: 7,
  def: 4,
  sp: 5,
  sigchar: "X-direction change",
};
let lg44 = {
  name: "Fait",
  weapon: "scythe",
  weapon2: "orb",
  at: 7,
  dx: 4,
  def: 4,
  sp: 7,
  sigchar: {
    sigchar1: "X-direction change",
    sigchar2: "Y-direction change",
    sigchar3: "input",
  },
};
let lg45 = {
  name: "Thor",
  weapon: "hammer",
  weapon2: "orb",
  at: 6,
  dx: 4,
  def: 7,
  sp: 5,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg46 = {
  name: "Petra",
  weapon: "orb",
  weapon2: "gloves",
  at: 8,
  dx: 4,
  def: 4,
  sp: 6,
  sigchar: {
    sigchar1: "X-direction change",
    sigchar2: "Y-direction change",
    sigchar3: "input",
  },
};
let lg47 = {
  name: "Vector",
  weapon: "rocketlance",
  weapon2: "bow",
  at: 5,
  dx: 4,
  def: 6,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg48 = {
  name: "Volkov",
  weapon: "scythe",
  weapon2: "axe",
  at: 4,
  dx: 8,
  def: 6,
  sp: 4,
  sigchar: {
    sigchar1: "X-direction change",
    sigchar2: "Y-direction change",
    sigchar3: "input",
  },
};
let lg49 = {
  name: "Onyx",
  weapon: "gloves",
  weapon2: "canon",
  at: 5,
  dx: 4,
  def: 8,
  sp: 5,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg50 = {
  name: "Jaeyun",
  weapon: "greatsword",
  weapon2: "sword",
  at: 6,
  dx: 5,
  def: 5,
  sp: 6,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg51 = {
  name: "Mako",
  weapon: "greatsword",
  weapon2: "katars",
  at: 6,
  dx: 4,
  def: 4,
  sp: 8,
  sigchar: {
    sigchar1: "X-direction change",
    sigchar2: "Y-direction change",
    sigchar3: "input",
  },
};
let lg52 = {
  name: "Magyar",
  weapon: "hammer",
  weapon2: "greatsword",
  at: 5,
  dx: 4,
  def: 9,
  sp: 4,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg53 = {
  name: "Reno",
  weapon: "orb",
  weapon2: "guns",
  at: 4,
  dx: 7,
  def: 6,
  sp: 5,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};
let lg54 = {
  name: "Munin",
  weapon: "scythe",
  weapon2: "bow",
  at: 5,
  dx: 6,
  def: 4,
  sp: 7,
  sigchar: { sigchar1: "X-direction change", sigchar2: "Y-direction change" },
};

let legends = [
  lg1,
  lg2,
  lg3,
  lg4,
  lg5,
  lg6,
  lg7,
  lg8,
  lg9,
  lg10,
  lg11,
  lg12,
  lg13,
  lg14,
  lg15,
  lg16,
  lg17,
  lg18,
  lg19,
  lg20,
  lg21,
  lg22,
  lg23,
  lg24,
  lg25,
  lg26,
  lg27,
  lg28,
  lg29,
  lg30,
  lg31,
  lg32,
  lg33,
  lg34,
  lg35,
  lg36,
  lg37,
  lg38,
  lg39,
  lg40,
  lg41,
  lg42,
  lg43,
  lg44,
  lg45,
  lg46,
  lg47,
  lg48,
  lg49,
  lg50,
  lg51,
  lg52,
  lg53,
  lg54,
];
let LgNamn = [
  "Bödvar",
  "Cassidy",
  "Orion",
  "Lord Vraxx",
  "Gnash",
  "Queen Nai",
  "Hattori",
  "Sir Roland",
  "Scarlet",
  "Thatch",
  "Ada",
  "Sentinel",
  "Lucien",
  "Teros",
  "Brynn",
  "Asuri",
  "Barraza",
  "Ember",
  "Azoth",
  "Koji",
  "Ulgrim",
  "Diana",
  "Jhala",
  "Kor",
  "Wu Shang",
  "Val",
  "Ragnir",
  "Cross",
  "Mirage",
  "Nix",
  "Mordex",
  "Yumiko",
  "Artemis",
  "Caspian",
  "Sidra",
  "Xull",
  "Kaya",
  "Isaiah",
  "Jiro",
  "Lin Fei",
  "Zariel",
  "Rayman",
  "Dusk",
  "Fait",
  "Thor",
  "Petra",
  "Vector",
  "Volkov",
  "Onyx",
  "Jaeyun",
  "Mako",
  "Magyar",
  "Reno",
  "Munin",
];
//gör det möjligt att datorn vet vilken lg som ska ha vilket namn som kommer va användbart när jag presenterar vilken legend de har fått istället för att de får lg7 t.ex
//definerar 54 olika objekt i legends sedan för in de olika legenderna och deras info i 54 objejt som är strukturerade på samma sätt detta behöver flyttas ned då jag måste skapa objekten innan jag katigoriserar dem i legends
//function GetLegendByWeapon()
let scythelegends = legends.find(
  (o) => o.weapon === "scythe" || o.weapon2 === "scythe"
); //https://www.codegrepper.com/code-examples/javascript/find+an+object+in+an+array+of+objects+javascript
console.log(scythelegends);
//detta funkar nu, den presenterar en legend som har scythe, däremot måste jag finna ett sätt
//göra så att denna funktion även kollar på weaponslot2, jag funderar på om jag ska
//göra en sådan funktion för varje vapen och weaponslot, däremot är det oklart hur jag ska göra
//däremot tänker jag uttnytja detta för att kategorisera de olika statsen.
let highDmglegends = legends.find((o) => o.at >= 7); //titta på de objekt o legends o börjar på 0
//söker fram till då at är >=7, vill dock finna ett sätt så att jag kan få ut flera objekt och den inte bara tar den först som har 7
console.log(highDmglegends);

let highDxlegends = legends.find((o) => o.dx >= 7);
console.log(highDxlegends);

let highDeflegends = legends.find((o) => o.def >= 7);
console.log(highDeflegends);

let highSplegends = legends.find((o) => o.sp >= 7);
console.log(highSplegends);

let mediumDmglegends = legends.find((o) => o.at >= 4 && o.at <= 6);
console.log(mediumDmglegends);

let mediumDxlegends = legends.find((o) => o.dx >= 4 && o.dx <= 6);

let mediumDeflegends = legends.find((o) => o.def >= 4 && o.def <= 6);

let mediumSplegends = legends.find((o) => o.sp >= 4 && o.sp <= 6);

let lowDmglegends = legends.find((o) => o.at <= 3);

let lowDxlegends = legends.find((o) => o.dx <= 3);

let lowDeflegends = legends.find((o) => o.def <= 3);

let lowSplegends = legends.find((o) => o.sp <= 3);

let lastIndex = -1;
function lgweapon() {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === "scythe" && i > lastIndex) ||
      (o.weapon2 === "scythe" && i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
} //denna function finner  scythe legends utefter parametrarna index o och i
//denna index i gör så att den kommer endast hitta en scythe legends en gång
//detta leder till att jag kan finna flera Scythe legends
//det funkar så att den ser till att den paserar legends med scythe ifall den indexen som hittade innan
//har samma index, alltså skippar den det objektet och går vidare till nästa.

//test 1 inkorpererat från brawlhallatest
/*function mediumDmgKatars() {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === "katars" &&
        i > lastIndex &&
        o.at <= 6 &&
        o.at >= 4 &&
        i > lastIndex) ||
      (o.weapon2 === "katars" &&
        i > lastIndex &&
        o.at <= 6 &&
        o.at >= 4 &&
        i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
}*/
//i först provet i genom gången av alla möjliga enligt consolen. så fann den många
//inte upprepning av legender, men den lyckades få med en legends med attack 7 vilket inte är
//medium utan är high, jag ska köra den igen och se om det upprepar sig
//den händer igen, oklart varför, jag har rovat olika sätt att begränsa sökningen
//så att det verkligen inte händer i 7
//här börjar de tre damage funktionerna
function highDmgWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick && i > lastIndex && o.at >= 7 && i > lastIndex) ||
      (o.weapon2 === wepPick && i > lastIndex && o.at >= 7 && i > lastIndex)
  );
  //console.log(lastIndex);
  return legends[lastIndex];
}
//jag klurade ut hur jag skulle kompila allting i en function
//skapa en parameter som kan förändras, den som använder programet kommer få
//välja på en lista av vapen för att se till att det är rätt stavat.
//denna teknik kommer tillläpas till de övriga stakarakeristiks.
//denna förkortningen tog bort cirka 70rader kod vilket clearar mycket space
//jag slka försöka göra något åt mina långa rader kod ovanför

function mediumDmgWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick &&
        i > lastIndex &&
        4 <= o.at &&
        o.at <= 6 &&
        i > lastIndex) ||
      (o.weapon2 === wepPick &&
        i > lastIndex &&
        4 <= o.at &&
        o.at <= 6 &&
        i > lastIndex)
  );
  return legends[lastIndex];
}

function lowDmgWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick && i > lastIndex && o.at <= 3 && i > lastIndex) ||
      (o.weapon2 === wepPick && i > lastIndex && o.at <= 3 && i > lastIndex)
  );

  return legends[lastIndex];
}
//här börjar defense funktionerna
function highDefWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick && i > lastIndex && o.def >= 7 && i > lastIndex) ||
      (o.weapon2 === wepPick && i > lastIndex && o.def >= 7 && i > lastIndex)
  );

  return legends[lastIndex];
}

function mediumDefWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick &&
        i > lastIndex &&
        4 <= o.def &&
        o.def <= 6 &&
        i > lastIndex) ||
      (o.weapon2 === wepPick &&
        i > lastIndex &&
        4 <= o.def &&
        o.def <= 6 &&
        i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
}
// nu ska jag prova ifall jag kan göra statsen till en variabel så att det endast kräver
//vapen och stats som en variabel istället för att ha statsen som en konstant
//detta visade sig inte funka så jag fortsätter med min orginala plan
function lowDefWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick && i > lastIndex && o.def <= 3 && i > lastIndex) ||
      (o.weapon2 === wepPick && i > lastIndex && o.def <= 3 && i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
}
//här börjar Dexterity functionerna
function highDxWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick && i > lastIndex && o.dx >= 7 && i > lastIndex) ||
      (o.weapon2 === wepPick && i > lastIndex && o.dx >= 7 && i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
}

function mediumDxWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick &&
        i > lastIndex &&
        4 <= o.dx &&
        o.dx <= 6 &&
        i > lastIndex) ||
      (o.weapon2 === wepPick &&
        i > lastIndex &&
        4 <= o.dx &&
        o.dx <= 6 &&
        i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
}
function lowDxWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick && i > lastIndex && o.dx <= 3 && i > lastIndex) ||
      (o.weapon2 === wepPick && i > lastIndex && o.dx <= 3 && i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
}
//Här börjar speed funktionerna
function highSpWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick && i > lastIndex && o.sp >= 7 && i > lastIndex) ||
      (o.weapon2 === wepPick && i > lastIndex && o.sp >= 7 && i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
}

function mediumSpWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick &&
        i > lastIndex &&
        4 <= o.sp &&
        o.sp <= 6 &&
        i > lastIndex) ||
      (o.weapon2 === wepPick &&
        i > lastIndex &&
        4 <= o.sp &&
        o.sp <= 6 &&
        i > lastIndex)
  );
  return legends[lastIndex];
}
function lowSpWeapon(wepPick) {
  lastIndex = legends.findIndex(
    (o, i) =>
      (o.weapon === wepPick && i > lastIndex && o.dx <= 3 && i > lastIndex) ||
      (o.weapon2 === wepPick && i > lastIndex && o.dx <= 3 && i > lastIndex)
  );
  console.log(lastIndex);
  return legends[lastIndex];
}
let wepPickOptions = [
  "scythe", //0
  "orb", //1
  "hammer", //2
  "rocketlance", //3
  "katars", //4
  "sword", //5
  "greatsword", //6
  "spear", //7
  "canon", //8
  "guns", //9
  "bow", //10
  "Axe", //11
];
document.getElementById("functionButton").addEventListener("click", onclick);
function onclick() {
  document.getElementById("Legend").innerText = "";
  let selectedWeapon = document.getElementById("weapons").value; //finners skriver ut weapon med.value(valda variabeln)
  let selectedstat = document.getElementById("stats").value; //samma som ovan men med stats

  if (selectedstat == "highDmgWeapon") {
    for (let i = 0; i <= 10; i++) {
      console.log("hej" + selectedWeapon); //för att kolla om det läses in korrekt
      let lgd = highDmgWeapon(selectedWeapon); //variabel skapad för att kolla om den är -1 innan innertext
      console.log(lgd);
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += ", " + lgd["name"]; //skapade en variabel så att den inte körs två gånger och då letar name på -1
      }
    }
  } else if (selectedstat == "mediumDmgWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = mediumDmgWeapon(selectedWeapon);
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += ", " + lgd["name"];
      }
    }
  } else if (selectedstat == "lowDmgWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = lowDmgWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          " " + "There Was no more or no legends to be found";
        break;
      } else if (lgd !== -1) {
        document.getElementById("Legend").innerText += ", " + lgd["name"];
      }
    }
  } else if (selectedstat == "highDefWeapon)") {
    for (let i = 0; i <= 10; i++) {
      let lgd = highDefWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There Was no more or no legends to be found";
        break;
      }
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += " " + lgd["name"];
      }
    }
  } else if (selectedstat == "mediumDefWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = mediumDefWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There was no more or no legends to be found";
        break;
      }
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += " " + lgd["name"];
      }
    }
  } else if (selectedstat == "lowDefWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = lowDefWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There Was no more or no legends to be found";
        break;
      }
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += ", " + lgd["name"];
      }
    }
  } else if (selectedstat == "highDxWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = highDxWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There Was no more or no legends to be found";
        break;
      } else if (lgd !== -1) {
        document.getElementById("Legend").innerText += ", " + lgd["name"];
      }
    }
  } else if (selectedstat == "mediumDxWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = mediumDxWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There Was no more or no legends to be found";
        break;
      }
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += ", " + lgd["name"];
      }
    }
  } else if (selectedstat == "lowDxWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = lowDxWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There Was no more or no legends to be found";
        break;
      }
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += " " + lgd["name"];
      }
    }
  }
  if (selectedstat == "highSpWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = highSpWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There Was no more or no legends to be found";
        break;
      }
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += ", " + lgd["name"];
      }
    }
  } else if (selectedstat == "mediumSpWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = mediumSpWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There Was no more or no legends to be found";
        break;
      }
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += ", " + lgd["name"];
      }
    }
  } else if (selectedstat == "lowSpWeapon") {
    for (let i = 0; i <= 10; i++) {
      let lgd = lowSpWeapon(selectedWeapon);
      if (lgd === undefined) {
        document.getElementById("Legend").innerText +=
          ", " + "There Was no more or no legends to be found";
        break;
      }
      if (lgd !== -1) {
        document.getElementById("Legend").innerText += " " + lgd["name"];
      }
    }
  }
}
