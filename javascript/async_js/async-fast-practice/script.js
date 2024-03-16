//               //
//# Callback
// const token = ~~[Math.random() * 100 + 999];

// function login(username, callback) {
//   console.log("Validating user...");
//   console.log("Processing user token...");
//   setTimeout(() => {
//     callback({ username, token });
//   }, 1500);
// }

// function getApi(token, callback) {
//   console.log("Processing user Api Key...");
//   if (token) {
//     setTimeout(() => {
//       const apiKey = ~~[Math.random() * 10 + 99];
//       callback({ apiKey });
//     }, 500);
//   }
// }

// function getData(apiKey, callback) {
//   console.log("Getting data from the server...");
//   if (apiKey)
//     setTimeout(() => {
//       const userData = "Data berhasil didapatkan!";
//       callback({ data: userData });
//     }, 2000);
// }

// login("dzikrie283", function (response) {
//   const { token } = response;
//   getApi(token, function (response) {
//     const { apiKey } = response;
//     getData(apiKey, function (response) {
//       const { data } = response;
//       console.log(data);
//     });
//   });
// });

//               //
//#Promise

// const token = ~~[Math.random() * 100 + 999];

// function login(username) {
//   console.log("Validating user...");
//   console.log("Processing user token...");
//   return new Promise((success, failed) => {
//     setTimeout(() => {
//       if (username != "dzikrie283") failed("Username not detected!");
//       success({ token });
//     }, 1500);
//   });
// }

// function getApi(token) {
//   console.log("Processing user Api Key...");
//   const apiKey = ~~[Math.random() * 10 + 99];
//   return new Promise((success, failed) => {
//     if (!token) failed("Wrong token, cannot access!");
//     setTimeout(() => {
//       success({ apiKey });
//     }, 500);
//   });
// }

// function getData(apiKey) {
//   console.log("Getting data from the server...");
//   const userData = "Data berhasil didapatkan!";
//   return new Promise((success, failed) => {
//     if (!apiKey) failed("Wrong credentials, cannot get the data!");
//     setTimeout(() => {
//       success({ data: userData });
//     }, 2000);
//   });
// }

// const user = login("dzikrie283");
// user
//   .then(function (response) {
//     const { token } = response;
//     console.log("Token => ", token);
//     getApi(token)
//       .then(function (response) {
//         const { apiKey } = response;
//         console.log("Api Key => ", apiKey);
//         getData(apiKey)
//           .then(function (response) {
//             const { data } = response;
//             console.log(data);
//           })
//           .catch(function (response) {
//             console.log(response);
//           });
//       })
//       .catch(function (response) {
//         console.log(response);
//       });
//   })
//   .catch(function (response) {
//     console.log(response);
//   });

//               //
//#Async Await

function login(username) {
  console.log("Validating user...");
  console.log("Processing user token...");
  const token = ~~[Math.random() * 10000000 + 90000000];
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != "dzikrie283") failed("Username not detected!");
      success({ token });
    }, 1500);
  });
}

function getApi(token) {
  console.log("Processing user Api Key...");
  const apiKey = ~~[Math.random() * 10000 + 90000];
  return new Promise((success, failed) => {
    if (!token) failed("Some error occurred during getApi!");
    setTimeout(() => {
      success({ apiKey });
    }, 500);
  });
}

function getData(apiKey) {
  console.log("Getting the data from the server...");
  const userData = {
    Nama: "Dzikri Mursyid Hamdalahuddin",
    NIM: 12020039,
    Prodi: "Pendidikan Bahasa Inggris",
    Fakultas: "Bahasa dan Seni",
    Universitas: "Universitas Negeri Jakarta",
  };
  return new Promise((success, failed) => {
    if (!apiKey) failed("Some error occurred during getData!");
    setTimeout(() => {
      success({ data: userData });
    }, 2000);
  });
}

async function userDisplay() {
  try {
    const { token } = await login("dzikrie283");
    const { apiKey } = await getApi(token);
    const { data } = await getData(apiKey);

    console.log(`
    Token => ${token}
    Api Key => ${apiKey}
    Data successfully fetched!
  
    Nama: ${data.Nama}
    NIM: ${data.NIM}
    Prodi: ${data.Prodi}
    Fakultas: ${data.Fakultas}
    Universitas: ${data.Universitas}
  
    `);
  } catch (err) {
    console.log(err);
  }
}

userDisplay();
