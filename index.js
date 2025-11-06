// code here, goodluck!!

let prompt = require("prompt-sync")();

function getValidNumberInput(prompMessage) {
  let num;
  let flag = 0;
  do {
    flag++;
    if (flag > 1)
      console.log("Input tidak valid, silakan masukkan angka yang benar.");
    num = prompt(prompMessage);
  } while (isNaN(num) || num.trim() === "");
  return parseFloat(num);
}


// 1 function saja
function calculation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operator tidak valid";
  }
}

console.log("Program Calculator Sederhana");

while (true) {
  let angka = getValidNumberInput("Masukan angka: ");

  console.log("typeof: ", typeof angka); // typeof number, berarti tipe datanya number

  let angka2 = getValidNumberInput("Masukan angka kedua: ");

  let operator = prompt("Masukan operator (+, -, *, /): ");

  let hasil = calculation(parseInt(angka), parseInt(angka2), operator);

  console.log("Hasilnya adalah : ", hasil);

  let question = prompt("Apakah Anda ingin melanjutkan? (y/n): ");

  if (question.toLowerCase() === "n") {
    console.log("Terima kasih telah menggunakan kalkulator sederhana ini.");
    break;
  }
}

console.log("Program selesai.");
