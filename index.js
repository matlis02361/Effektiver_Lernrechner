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
theorieRechner = (zeit) => {
  parameter.theorieZeit += zeit;

  if (zeit <= 25) {
    parameter.konzentration -= 0;
    // parameter.lernEffizienz = 99;
  } else if (zeit <= 30) {
    parameter.konzentration -= 0;
    // parameter.lernEffizienz = 100;
  } else if (zeit <= 45) {
    parameter.konzentration -= 1;
    // parameter.lernEffizienz = 95;
  } else if (zeit >= 45) {
    for (let index = 45; index < zeit; index += 5) {
      parameter.konzentration -= 5;
      //  parameter.lernEffizienz -= 5;
    }
  }
};
/* ................... Praxis....................................... */
praxisRechner = (zeit) => {
  parameter.praxisZeit += zeit;

  if (zeit <= 25) {
    parameter.konzentration -= 0;
    // parameter.lernEffizienz = 99;
  } else if (zeit <= 30) {
    parameter.konzentration -= 0;
    // parameter.lernEffizienz = 100;
  } else if (zeit <= 45) {
    parameter.konzentration -= 1;

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
  if (parameter.praxisToLernnZeit >= 0.75 &&  parameter.praxisToLernnZeit <= 0.85){
 parameter.lernEffizienz = 100
  } else if (parameter.praxisToLernnZeit < 0.75 || parameter.praxisToLernnZeit > 0.85){
  parameter.lernEffizienz = 100 - (Math.abs(0.8 - parameter.praxisToLernnZeit))*100 }
};

//lernRechner(zeit,Tätigkeit)
//             45, Theorie

theorieRechner(1)
praxisRechner(10)
lernRechner();
console.log(parameter);

theorieRechner(20)
praxisRechner(80)
lernRechner();
console.log(parameter);

