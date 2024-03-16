//                                                                                           //
//# Comment rules

// Regular comment
//// Strikethrough
//#Heading
//*Section/Example
//!Alerts
//?Query
// var Variable
// Implementation
// Notes:
//:Output

//                                                                                           //
//# JavaScript basic logic

// let mathNumber = Math.random();

// console.log(mathNumber);

// if (mathNumber >= 0.5) {
//   console.log("Nomor lebih besar dari 0.5");
// } else {
//   console.log("Nomor kurang dari 0.5");
// }

// let namaDepan = "Dzikrie";

// let namaBelakang = "Mursyid";

// if (mathNumber >= 0.8) {
//   let namaLengkap = namaDepan + " " + namaBelakang;
//   console.log(namaLengkap);
//   console.log("Nomor lebih besar dari 0.8");
// }

// const nilai = 90;

// if (nilai < 50) {
//   console.log("E");
// } else if (nilai < 60) {
//   console.log("D");
// } else if (nilai < 70) {
//   console.log("C");
// } else if (nilai < 80) {
//   console.log("B");
// } else if (nilai < 100) {
//   console.log("A");
// }

// let namaHari = prompt("Hayoo sekarang hari apa nih!?").toLowerCase();

// if (namaHari === "senin") {
//   console.log("Semoga harimu senin terus:3");
// } else if (namaHari === "sabtu") {
//   console.log("Akhirnya libur jugaa!!");
// } else {
//   console.log("Semoga harimu menyenangkan!!");
// }

// const inputPassword = prompt("Buat password!");

// if (inputPassword.length >= 6) {
//   if (inputPassword.indexOf(" ") === -1) {
//     console.log("Password valid!");
//   } else {
//     console.log("Password tidak boleh menggunakan spasi!");
//   }
// } else {
//   console.log("Password minimal terdiri dari 6 karakter!");
// }

// Penggunaan Operator Logic &&
// const inputPassword = prompt("Buat password!");

// if (inputPassword.length >= 6 && inputPassword.indexOf(" ") === -1) {
//   console.log("Password valid!");
// } else {
//   console.log("Password tidak memenuhi syarat");
// }

// Penggunaan Operator Logic ||

// const inputUser = prompt("Masukkan ID user!");

// if (inputUser === "admin" || inputUser === "spv") {
//   console.log("Anda diberikan akses!");
// } else {
//   console.log("Anda tidak diberikan akses!");
// }

// Penggunaan Operator Logic Not

// const umurPelamar = 18;

// if (umurPelamar !== 18) {
//   console.log("Anda diterima!");
// } else {
//   console.log("Anjing lo!");
// }

// Switch

// const weekDay = 2;
// switch (weekDay) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid");
// }

//                                                                                           //
//# For, For ... Of, For ... in, and While loop

// ! For syntax
// for (initialization; condition; afterthought){
//     statement;
// }
// ! End of For syntax

//* Looping over an Array using For
// var const animals = ["Kambing", "Kucing", "Koala", "Kerbau"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

//* Looping over a String using For
// var const animal = "Harimau";
// for (i = 0; i < animal.length; i++) {
//   console.log(animal[i]);
// }

//* Nested looping over a String using For
// var const jawabanSoal = "ABCD";
// for (i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor ${i}:`);
//   for (j = 0; j < jawabanSoal.length; j++) {
//     console.log(`    ${jawabanSoal[j]}. Pilihan jawaban`);
//   }
// }

//* Nested looping over an Array using For
// var const barisMurid = [
//   ["Ahmad", "Mujahid", "Hasibuan", "Trulala"],
//   ["Reffian", "Abdul", "Malik", "Siregar"],
//   ["Muhammad", "Aprianto", "Effendi", "Chaniago"],
//   ["Raisya", "Setha", "Raden", "Nisrina"],
// ];
// Implementation
// for (i = 0; i < barisMurid.length; i++) {
//   const baris = barisMurid[i];
//   console.log(`Baris ke #${i + 1}`);
//   for (let j = 0; j < baris.length; j++) {
//     console.log(` ${baris[j]}`);
//   }
// }

//* Nested looping over an Array using For (2)
// var const listBelanja = [
//   ["Bayam", "Kangkung", "Sawi", "Kol"],
//   ["Ikan", "Ayam", "Daging", "Hati"],
//   ["Bawang Merah", "Bawang Putih", "Jahe", "Lengkuas"],
//   ["Garam", "Lada", "Ketumbar", "Kemiri"],
// ];
// Implementation
// for (i = 0; i < listBelanja.length; i++) {
//   const list = listBelanja[i];
//   console.log(` List belanja keranjang ${i + 1}:`);
//   for (j = 0; j < list.length; j++) {
//     console.log(list[j]);
//   }
// }

//  ! For ... Of Syntax
//  for (variable of iterable) {
//     statement
// }
// ! End of For ... Of syntax

//* Looping over an Array using For ... Of
// var const fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

//* Looping over a String using For ... Of
// var const fruit = "Avocado";
// for (let fruitAbc of fruit) {
//   console.log(fruitAbc);
// }

//* Nested looping an Array using For ... Of
// var const barisMurid = [
//   ["Ahmad", "Mujahid", "Hasibuan", "Trulala"],
//   ["Reffian", "Abdul", "Malik", "Siregar"],
//   ["Muhammad", "Aprianto", "Effendi", "Chaniago"],
//   ["Raisya", "Setha", "Raden", "Nisrina"],
// ];
// Implementation
// for (let baris of barisMurid) {
//   for (let ind of baris) {
//     console.log(ind);
//   }
// }

//* Nested looping an Array using For ... Of (2)
// var const listBelanja = [
//   ["Bayam", "Kangkung", "Sawi", "Kol"],
//   ["Ikan", "Ayam", "Daging", "Hati"],
//   ["Bawang Merah", "Bawang Putih", "Jahe", "Lengkuas"],
//   ["Garam", "Lada", "Ketumbar", "Kemiri"],
// ];
// Implementation
// for (let list of listBelanja) {
//   for (let item of list) {
//     console.log(item);
//   }
// }

//! While syntax
// while (condition) {
//     code block to be executed
// }
//! End of While syntax

//* Difference between While and For
// Notes: While will always run the loop as long as the value is true!
//* While loop
// var let number = 0;
// while (number <= 10) {
//   console.log(number);
//   number += 1;
// }
//* For loop
// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// Implementation
// var const passWord = "abc5dasar";
// var let attempts = 0;
// var let guess = prompt("Enter the password!");
// while (guess !== passWord) {
//   attempts++;
//   guess = prompt("Password incorrect, please input again!");
// }
// alert(`Congrats the password is correct with ${attempts} trials!`);

//* Break use to stop the while loop
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

//* Break use to stop the while loop (2)
// Implementation
// var let input = prompt("Hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop") break;
// }
// alert("Okay");

// Implementation: Guess the number using While loop
// var let maximum = parseInt(prompt("Masukkan nilai maksimal!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Masukkan nilai maksimal!"));
// }
// var const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);
// var let guess = parseInt(prompt("Isi tebakan kamu!"));
// var let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//   attempts++;
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Tebakanmu terlalu tinggi, tebak lagi!"));
//   } else {
//     guess = parseInt(prompt("Tebakanmu terlalu rendah, tebak lagi!"));
//   }
// }
// alert(`Selamat tebakanmu benar dengan percobaan ${attempts} kali!`);

//                                                                                           //
//# Function

// ! Function syntax
// function myFunc (parameter1, parameter2, and so on) {
//     statement
// }
// ! End of Function syntax

// Notes:
// The code inside the function will execute when "something" invokes (calls) the function:
//   1.When an event occurs (when a user clicks a button)
//   2.When it is invoked (called) from JavaScript code
//   3.Automatically (self invoked)

//* Argument & Parameter
// function greet(name) {
//   console.log(`Hello, ${name}. Have a nice day!`);
// }

// greet("Dzikrie");
// Notes: name inside of greet at the function is a parameter and "Dzikrie" is an argument

//* Multiple Parameters & Arguments
// function jumlahkan(a = 0, b = 0) { // Notes: Set the a & b value with number
//   const total = a + b;
//   console.log(total);
// }

// jumlahkan(5); // Notes: If you not set the a & b value as a number, the program will run this with 5 + b = NaN
// jumlahkan(5, 1);
// jumlahkan(5, 2, 3); // Notes: The third arguments will not execute bcz the input parameter are only a & b

//* Return
// function penjumlahan(a, b) {
//   return a + b;
// }
// let hasil = penjumlahan(5, 5); //: 10

// Implementation for add
// function penjumlahan(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Input must be numbers!";
//   } else {
//     return a + b;
//   }
// }
// Notes: Shortcut
// function penjumlahanShorcut(a, b) {
//   return typeof a !== "number" || typeof b !== "number" ? "Input must be numbers!" : a + b;
// }

// Implementation for multiply
// function perkalian(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Input must be numbers!";
//   } else {
//     return a * b;
//   }
// }
// Notes: Shortcut
// function perkalian(a, b) {
//   return typeof a !== "number" || typeof b !== "number" ? "Input must be numbers!" : a * b;
// }

// Implementation
// function isEven(number) {
//   if (number % 2 === 0) {
//     return "Nilai yang anda masukkan Genap!";
//   } else {
//     return "Nilai yang anda masukkan Ganjil!";
//   }
// }
// Notes: Shortcut
// function isEven(number) {
//   return number % 2 === 0 ? "Bilangan yang anda masukkan genap!" : "Bilangan yang anda masukkan ganjil!";
// }

// Implementation(2)
// function isValid(email) {
//   if (email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// Notes: Shortcut
// function isValidEmail(email) {
//   return email.includes("@") ? true : false;
// }

//* Function Expression
//! Syntax
// Notes: opt = optional
// Function Declaration
// function identifier (parameter-opt) {FunctionBody}

// Function Expression
// function identifier-opt (paramater-opt) {FunctionBody}
//! End of syntax

// Notes: Function Declaration
// function perpangkatan(input) {
//   return input * input;
// }
// let hasil = perpangkatan(5);
// console.log(hasil); //: 25

// Notes: Function Expression
// const hasilPerpangkatan = function (input) {
//   return input * input;
// };
// console.log(hasilPerpangkatan(5)); //: 25

//* Function as an argument/s
// Implementation 1
// function sicBo(func) {
// Notes: Function argument
//   func();
//   func();
//   func();
// }
// function lemparDadu() {
//   const nilai = Math.floor(Math.random() * 6) + 1;
//   console.log(nilai); //: random1, random2, random3
// }
// sicBo(lemparDadu); // Notes: lemparDadu as an argument does not require opening and closing brackets ().

// Implementation 2
// function sicBo(func) {
// Notes: Function argument
//   func();
//   func();
//   func();
// }

// sicBo(function lemparDadu() {
//   const nilai = Math.floor(Math.random() * 6) + 1;
//   console.log(nilai);
// }); // Notes: We can put all of the function as an argument instead of separate it in different line

//* Function as a Function
// Masih kosong hehe

//* Method definitions
// const myMathOp = {
//   penjumlahan(a, b) {
//     return typeof a !== "number" || typeof b !== "number" ? "Input must be numbers!" : a + b;
//   },
//   pengurangan(a, b) {
//     return typeof a !== "number" || typeof b !== "number" ? "Input must be numbers!" : a - b;
//   },
//   perkalian(a, b) {
//     return typeof a !== "number" || typeof b !== "number" ? "Input must be numbers!" : a * b;
//   },
//   pembagian(a, b) {
//     return typeof a !== "number" || typeof b !== "number" ? "Input must be numbers!" : a / b;
//   },
// };

//! Learn more about This, Try, and Catch!

//# Variable visibilities related to their scope
// Notes: let and const have properties to blocked the other function or condition to use them if they are part of a function or condition. Contrary of var, variable that defining using var can be accessible for another function or condition, or even we can use them generally.

//* Case 1
// let kucingLucu = "Milo"
// function kucing() {
//     let kucingLucu = "Ucil"
//     console.log(kucingLucu) //: "Ucil"
// }
// kucing()
// console.log(kucingLucu) //: "Milo"

//* Case 2
// let kucingLucu = "Milo";
// function kucing() {
//   kucingLucu = "Ucil";
//   console.log(kucingLucu); //: "Ucil"
// }
// kucing();
// console.log(kucingLucu); //: "Ucil"

//* Case 3
// let kucingLucu = "Milo"
// function kucing() {
//     console.log(kucingLucu) //: "Milo"
// }
// kucing()
// console.log(kucingLucu) //: "Milo"

//* Case 4
// function kucing() {
//     let kucingLucu = "Ucil"
//     console.log(kucingLucu) //: "Ucil"
// }
// kucing()
// console.log(kucingLucu) //: kucingLucu is not defined

//* Case 5: Using var for defining variable instead of let or const
// Notes: Using var for define the variable causes the other function and condition can access the variable, this can cause inconsistencies in variables.
// let randomNum = 10;
// if (randomNum > 5) {
//   var targetExample = 15;
// }

// console.log(targetExample); //: 15

// for (randomIndex = 0; randomIndex <= 10; randomIndex++) {
//   var targetExample = randomIndex;
// }

// console.log(targetExample); //: 10

//                                                                                           //
//# Arrow Function Expression

//! Syntax
// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }
//! End of syntax

// Implementation 1
//* Traditional anonymous function
// const perpangkatan = function (input) {
//   return input * input;
// };

//* 1. Remove the word "function" and place arrow between the argument and opening body brace.
// const perpangkatan = (input) => {
//   return input * input;
// };

//* 2. Remove the body braces and word "return" — the return is implied.
// const perpangkatan = (input) => input * input;

//* 3. Remove the parameter parentheses
// const perpangkatan = input => input * input;

// Implementation 2
//* Traditional anonymous function
// const randomNum = function () {
//   return Math.floor(Math.random() * 6) + 1;
// };

//* 1. Remove the word "function" and place arrow between the argument and opening body brace.
// const randomNum = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

//* 2. Remove the body braces and word "return" — the return is implied.
// const randomNum = () => Math.floor(Math.random() * 6) + 1;

//                                                                                           //
//# Array Methods

// Var examples for forEach(), map(), and filter():
const topMovies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    view: "2.9M",
  },
  {
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    view: "2M",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.1,
    view: "2.8M",
  },
  {
    title: "The Godfather Part II",
    year: 1974,
    rating: 8.9,
    view: "1.4M",
  },
  {
    title: "12 Angry Men",
    year: 1957,
    rating: 8.8,
    view: "854K",
  },
];

//* Array.prototype.forEach()
// const array1 = ["a", "b", "c", "d"];
// array1.forEach((element) => console.log(element)); //: a b c d

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myNumber.forEach((isEven) => {
//   if (isEven % 2 === 0) {
//     console.log(isEven); //: 2 4 6 8 10
//   }
// });

// Implementation 1
// var from line 576
// topMovies.forEach((topMovie) => console.log(`${topMovie.title} - ${topMovie.rating}/10`));

// Implementation 2
// var from line 576
// topMovies.forEach((oldMovies) => {
//   if (oldMovies.year < 2000) {
//     console.log(`${oldMovies.title} - ${oldMovies.year}`);
//   }
// });

//* Array.prototype.map()
// const array1 = ["a", "b", "c", "d"];
// const arrayUp = array1.map((element) => {
//   return element.toUpperCase(); //: Array(4) [ "A", "B", "C", "D" ]
// });

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumber = myNumber.map((isEven) => {
//   if (isEven % 2 === 0) {
//     return isEven; //: Array(10) [ undefined, 2, undefined, 4, undefined, 6, undefined, 8, undefined, 10 ]
//   }
// });

// Implementation 1
// var from line 576
// const movieList = topMovies.map((moviesTitle) => {
//   return moviesTitle.title.toUpperCase();
// });

//* Array.prototype.filter()
// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumber = myNumber.filter((number) => {
//   if (number % 2 === 1) {
//     return number; //: Array(5) [ 1, 3, 5, 7, 9 ]
//   }
// });

// Implementation 1
// var from line 576
// const mostViewed = topMovies.filter((element) => {
//   if (element.view.includes("M")) {
//     return element;
//   }
// });

// Implementation of forEach(), map(), and filter()
//
//
//

//* Array.prototype.every()
// const kataGanti = ["Aku", "Kau", "Dia", "Kita"];
// const tigaHuruf = kataGanti.every((kata) => {
//   return kata.length === 3; //: false
// });

// var from line 651
// const oddTrue = oddNumber.every((odd) => {
//   return odd % 2 === 1; //: true
// });

//*Array.prototype.some()
// const kataGanti = ["Aku", "Kau", "Dia", "Kita"];
// const lebihTigaHuruf = kataGanti.some((kata) => {
//   return kata.length === 4; //: true
// });

// var from line 638
// const evenTrue = evenNumber.some((even) => {
//   return even % 2 === 0; //: true
// });

//* Array.prototype.reduce()
// const examScore = [70, 75, 80, 85, 90, 95];
// const totalScore = examScore.reduce((nilaiAwal, pembanding) => {
//   return (nilaiAwal += pembanding);
// });

// Implementation 1
// var from line 576
// const newMovies = topMovies.reduce((initialValue, currentValue) => {
//   if (initialValue.year > currentValue.year) {
//     return initialValue;
//   }
//   return currentValue; //: Object { title: "The Dark Knight", year: 2008, rating: 9.1, view: "2.8M" }
// });

// Implementation 2
// var from line 576
// const lowRating = topMovies.reduce((initialValue, currentValue) => {
//   if (initialValue.rating < currentValue.rating) {
//     return initialValue;
//   }
//   return currentValue;
// });

//                                                                                           //
//# Spread syntax (...)

//* Converting Array or Object into argument function values
// const angkaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Math.max(...angkaArray)); //: 9
// console.log(Math.min(...angkaArray)); //: 1

// Notes: For Object case see part: Destructing an Object

//* Integrating or merging the Array
// const angkaArray = [1, 2, 3, 4, 5, 6];
// const namaArray = ["Ahmad", "Mujahid", "Hasibuan", "Rivaldo", "Budiman", "Bomasila"];
// const angkaNama = [...angkaArray, ...namaArray];
// console.log(angkaNama); //: [ 1, 2, 3, 4, 5, 6, "Ahmad", "Mujahid", "Hasibuan", "Rivaldo", … ]

//* Integrating or merging the Object
// const user = {
//   name: "Dzikriee",
//   email: "dzikrie@mail.com",
// };
// const credential = {
//   password: "awokwokwok",
//   token: "aldkwj12eoda",
// };
// const userForm = { ...user, ...credential };
// console.log(userForm); //: { name: "Dzikriee", email: "dzikrie@mail.com", password: "awokwokwok", token: "aldkwj12eoda" }

//* Rest Parameter
// function sumAll(...nums) {
//   let total = 0;
//   for (let n of nums) total += n;
//   return total;
// }

// const allSum = (...nums) => {
//   return nums.reduce((total, element) => total + element);
// };

// const namaArray = ["Ahmad", "Mujahid", "Hasibuan", "Rivaldo", "Budiman", "Bomasila"];
// const pemenang = (gold, silver, bronze, ...harapan) => {
//   console.log(`Medali emas diraih ${gold}`);
//   console.log(`Medali silver diraih ${silver}`);
//   console.log(`Medali bronze diraih ${bronze}`);
//   console.log(`Peserta harapan: ${harapan}`);
// };
// console.log(pemenang(...namaArray));

//* Destructing an Array
// const namaArray = ["Ahmad", "Mujahid", "Hasibuan", "Rivaldo", "Budiman", "Bomasila"];
// const [gold, silver, bronze, ...peserta] = namaArray;
// console.log(gold); //: "Ahmad"
// console.log(silver); //: "Mujahid"
// console.log(bronze); //: "Hasibuan"
// console.log(peserta); //: Array(3) [ "Rivaldo", "Budiman", "Bomasila" ]

//* Destructing an Object
// const user = {
//   name: "Dzikriee",
//   email: "dzikrie@mail.com",
// };
// const { name: nama, email, phone = 087864457610 } = user;
// console.log(nama); //: Dzikriee
// console.log(email); //: dzikrie@mail.com
// Notes: 1. We can call the object properties directly 2. The "user" object will not change due to the addition of the variable 3. We can override object properties using colons :

// const user = {
//   name: "Dzikriee",
//   email: "dzikrie@mail.com",
//   role: "Admin",
// };
// const userRole = ({ name, role }) => {
//   return `${name} as an ${role}`;
// };
// console.log(userRole(user)); //: Dzikriee as an Admin

// Implementation
// const bestMovies = topMovies.map((movies) => {
//   return `${movies.title} - ${movies.rating}`;
// });
// console.log(bestMovies);
// Notes: Using common arrow function and callback function

// const bestMovies = topMovies.map(({ title, year, rating }) => {
//   return `${title} : ${year} - ${rating}`;
// });
// console.log(bestMovies);
// Notes: We can use the Object property at the callback function as long as the value is true

//                                                                                           //
//# Game suit

// //# Perulangan permainan
// let permainan = true;
// while (permainan) {
//   //* Pilihan pemain
//   let player = prompt("Silahkan pilih! \nGunting, Batu, atau Kertas");

//   //* Pilihan Computer
//   let computer = Math.floor(Math.random() * (4 - 1) + 1);

//   if (computer == 1) {
//     computer = "Gunting";
//   } else if (computer == 2) {
//     computer = "Batu";
//   } else {
//     computer = "Kertas";
//   }

//   //* Rules and Value
//   let gameValue = "";
//   if (player == computer) {
//     gameValue = "Seri!";
//   } else if (player == "Gunting") {
//     gameValue = computer == "Batu" ? "Kalah" : "Menang";
//   } else if (player == "Batu") {
//     gameValue = computer == "Kertas" ? "Kalah" : "Menang";
//   } else if (player == "Kertas") {
//     gameValue = computer == "Gunting" ? "Kalah" : "Menang";
//   } else {
//     gameValue = "Anda memasukkan nilai yang salah!";
//   }

//   //* Hasil
//   alert(`Anda memilih ${player} dan komputer memilih ${computer}. \nAnda ${gameValue}`);

//   //* Konfirmasi
//   permainan = confirm("Apakah kamu ingin bermain lagi?");
// }

// alert("Terima kasih sudah bermain!");

//                                                                                           //
//# Permainan tebak angka

//* Konfirmasi perulangan
let startGame = confirm("Apakah kamu ingin bermain tebak angka?");

while (startGame) {
  let targetNum = Math.round(Math.random() * (10 - 1) + 1);
  console.log(targetNum);

  let playerAttempt = 3;
  let playerNum = prompt(`Silahkan masukkan angka antara 1 - 10! \nKesempatanmu menjawab tersisa ${playerAttempt}`);

  while (true) {
    if (playerNum != targetNum && playerAttempt === 0) {
      alert(`Kesempatan menjawabmu telah habis! \nAngka yang harus kamu tebak adalah ${targetNum}.`);
      break;
    } else if (playerNum < targetNum) {
      playerAttempt--;
      playerNum = prompt(`Angka terlalu rendah! \nKesempatanmu menjawab tersisa ${playerAttempt}`);
    } else if (playerNum > targetNum) {
      playerAttempt--;
      playerNum = prompt(`Angka terlalu tinggi! \nKesempatanmu menjawab tersisa ${playerAttempt}`);
    } else {
      alert(`Tebakanmu benar! Angka yang harus ditebak adalah ${targetNum}. \nDan sisa kesempatan menjawabmu ${playerAttempt}`);
      break;
    }
  }
  startGame = confirm("Apakah kamu ingin bermain lagi?");
}
