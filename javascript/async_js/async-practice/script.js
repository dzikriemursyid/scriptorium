//                   //
//# XML Http Request
// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
// 	data = JSON.parse(this.responseText);
// 	console.log(data);
// };

// req.onerror = function () {
// 	console.log('Error', this);
// };

// req.open('GET', 'https://swapi.dev/api/people/1', true);
// myReq.setRequestHeader('Accept', 'application/json');
// req.send();

//                   //
//# Http request using Fetch

// fetch("https://pokeapi.co/api/v2/pokemon/charizard")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with your fetch operation:", error);
//   });

//                   //
//# Http request using Fetch and Async Await

// async function fetchData() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log(data.name);
//   } catch (error) {
//     alert("There was a problem with your fetch operation");
//     console.error(error);
//   }
// }

// fetchData();
