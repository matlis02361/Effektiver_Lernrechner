const parameter = {
  pause: 0,
  praxisZeit: 0,
  theorieZeit: 0,
  konzentration: 100,
  lernEffizienz: 0,
  praxisToLernnZeit: 0,
};

lernRechner = (zeit, Tätigkeit) => {
  if (Tätigkeit === "Theorie") {
    parameter.theorieZeit += zeit;
  }
  if (Tätigkeit === "Praxis") {
    parameter.praxisZeit += zeit;
  }

  for (let index = 0; index < zeit; index += 5) {
    if (index >= 25) {
      parameter.konzentration -= 0.01 * parameter.konzentration;
    }
    if (index >= 25 && index <= 30) {
      parameter.konzentration -= 0.015 * parameter.konzentration;
    }
    if (index > 30 && index <= 45) {
      parameter.konzentration -= 0.02 * parameter.konzentration;
    }
    if (index > 45 && parameter.konzentration >= 0) {
      parameter.konzentration -= 0.03 * parameter.konzentration;
    }
  }
  /* ----------------------------------------------------------- */
  let LernnZeit = parameter.theorieZeit + parameter.praxisZeit;
  parameter.praxisToLernnZeit = parameter.praxisZeit / LernnZeit;

  parameter.lernEffizienz =
    100 - Math.abs(0.8 - parameter.praxisToLernnZeit) * parameter.konzentration;
};

/* ................... Pause....................................... */
pauseRechner = (zeit) => {
  pause += zeit;
  if (zeit >= 5 && zeit <= 7) {
    parameter.konzentration += 50;
  } else if (zeit > 7) {
    for (let index = 7; index < zeit; index += 5) {
      parameter.konzentration += 1;
      lernEffizienz -= 1;
    }
  }
};

lernRechner(45, "Theorie");
console.log(parameter);
lernRechner(45, "Praxis");
console.log(parameter);
