// import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

// const makeCoffee = (type, miligrams) => {
//   if (stock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Kopi sudah habis!");
//   }
// };
// console.log(stock);
// console.log(isCoffeeMachineReady);
// console.log(makeCoffee("robusta", 80));

//                                              //

// console.log("Selamat datang!");

// setTimeout(() => {
//   console.log("Terima kasih!");
// }, 2000);

// console.log("Ada yang bisa dibantu?");

//                                             //

// function getUsers(callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ["John", "Jack", "Abigail"];

//     callback(users);
//   }, 3000);
// }

// function usersCallback(users) {
//   console.log(users);
// }

// getUsers(usersCallback);

//                                              //

// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ["John", "Jack", "Abigail"];

//     if (isOffline) {
//       callback(new Error("cannot retrieve users due offline"), null);
//       return;
//     }

//     callback(null, users);
//   }, 3000);
// }

// function usersCallback(error, users) {
//   if (error) {
//     console.log("process failed:", error.message);
//     return;
//   }
//   console.log("process success:", users);
// }

// getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
// getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

//                                              //

function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (countryId === "id") {
        const provinceId = [
          { id: "id-jk", name: "Jakarta" },
          { id: "id-bt", name: "Banten" },
          { id: "id-jr", name: "Jawa Barat" },
        ];
        resolve(provinceId);
      }
      reject(new Error("Country not found"));
    }, 1000);
  });
}

getProvinces("id")
  .then((provinceId) => console.log(provinceId))
  .catch((err) => console.log(err.message));
