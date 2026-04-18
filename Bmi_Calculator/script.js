const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const compare = document.querySelector("#compare");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show Result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      compare.innerHTML = "Under weight";
    }
    if (bmi > 18.6 && bmi < 24.9) {
      compare.innerHTML = "Normal range";
    }
    if (bmi > 24.9) {
      compare.innerHTML = "Overweight";
    }
  }
});

//           <p>Under Weight = Less than 18.6</p>
//           <p>Normal Range = 18.6 and 24.9</p>
//           <p>Overweight = Greater than 24.9</p>
