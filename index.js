const parameter = {
  pause: 0,
  praxisZeit: 0,
  theorieZeit: 0,
  konzentration: 100,
  lernEffizienz: 0,

  /* TEST  */
  praxisToLernnZeit: 0,
};
/* ................... Theorie....................................... */
/* theorieRechner = (zeit) => {
  parameter.theorieZeit += zeit;
  if (zeit >= 25) {
    for (let index = 0; index < zeit; index += 5) {
      parameter.konzentration -= 5;
    }
  }
  if (zeit >= 25 && zeit <= 30 ) {
    for (let index = 45; index < zeit; index += 5) {
        parameter.konzentration -= 6;
      }
  } else if (zeit > 30 && zeit <= 45 && parameter.konzentration > 0) {
    parameter.konzentration -= 15;
  } else if (zeit > 45 && parameter.konzentration > 0) {
    parameter.konzentration -= 15;
    for (let index = 45; index < zeit; index += 5) {
      parameter.konzentration -= 5;
    }
  }
}; */

theorieRechner = (zeit) => {
  parameter.theorieZeit += zeit;

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
};

/* ................... Praxis....................................... */
praxisRechner = (zeit) => {
  parameter.praxisZeit += zeit;

  for (let index = 0; index < zeit; index += 15) {
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

lernRechner = () => {
  let LernnZeit = parameter.theorieZeit + parameter.praxisZeit;
  parameter.praxisToLernnZeit = parameter.praxisZeit / LernnZeit;

  parameter.lernEffizienz =
    100 - Math.abs(0.8 - parameter.praxisToLernnZeit) * parameter.konzentration;
};

//lernRechner(zeit,Tätigkeit)
//             45, Theorie

theorieRechner(80);
praxisRechner(20);
lernRechner();
console.log(parameter);

theorieRechner(20);
praxisRechner(80);
lernRechner();
console.log(parameter);

theorieRechner(20);
praxisRechner(80);
lernRechner();
console.log(parameter);

theorieRechner(20);
praxisRechner(80);
lernRechner();
console.log(parameter);

theorieRechner(20);
praxisRechner(80);
lernRechner();
console.log(parameter);

theorieRechner(20);
praxisRechner(80);
lernRechner();
console.log(parameter);

theorieRechner(20);
praxisRechner(80);
lernRechner();
console.log(parameter);
