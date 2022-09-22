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
      parameter.konzentration -= 0.005 * parameter.konzentration;
    }
    if (index >= 25 && index <= 30) {
      parameter.konzentration -= 0.01 * parameter.konzentration;
    }
    if (index > 30 && index <= 45) {
      parameter.konzentration -= 0.015 * parameter.konzentration;
    }
    if (index > 45 && parameter.konzentration >= 0) {
      parameter.konzentration -= 0.02 * parameter.konzentration;
    }
  }
  parameter.konzentration = Math.round(parameter.konzentration);
  /* ----------------------------------------------------------- */
  let LernnZeit = parameter.theorieZeit + parameter.praxisZeit;
  parameter.praxisToLernnZeit =
    Math.round((parameter.praxisZeit / LernnZeit) * 100) / 100;

  parameter.lernEffizienz = Math.round(
    (1 - Math.abs(0.8 - parameter.praxisToLernnZeit)) * parameter.konzentration
  );
};

/* ................... Pause....................................... */
pauseRechner = (zeit) => {
  parameter.pause += zeit;
  for (let index = 0; index < zeit; index++) {
    if (index < 5) {
      parameter.konzentration += 0.1 * (100 - parameter.konzentration);
    }
    if (index >= 5 && index <= 7) {
      parameter.konzentration += 0.5 * (100 - parameter.konzentration);
    }
    if (index > 7) {
      parameter.konzentration += 0.01 * (100 - parameter.konzentration);
    }
  }
  parameter.konzentration = Math.round(parameter.konzentration);
};
lernRechner(20,"Theorie")
pauseRechner(10)
lernRechner(20,"Theorie")

/* ,`,`,`,`,`,`,`,`,`,`,`,`INPUT,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,`,` */

document.write(`<select class="form-select" aria-label="Default select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>`);

/* :::::::::::::TABELE:::::::::::::::::::::::: */

document.write(`<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Parameter</th>
    <th scope="col">Ergebnis</th>
 
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Praxis</td>
    <td>${parameter.praxisZeit} min</td>

  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Theorie</td>
    <td>${parameter.theorieZeit} min</td>
  
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>konzentration</td>
    <td>${parameter.konzentration}%</td>
  </tr>
  <tr>
    <th scope="row">4</th>
    <td>Lerneffizienz</td>
    <td>${parameter.lernEffizienz}%</td>
  
  </tr>
  <tr>
    <th scope="row">5</th>
    <td>Pause</td>
    <td>${parameter.pause} min</td>
  
  </tr>
  <tr>
    <th scope="row">6</th>
    <td>Anteil der Theorie an der gesamten Lernzeit</td>
    <td>${parameter.praxisToLernnZeit * 100}%</td>
  
  </tr>
</tbody>
</table>`);
