// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.getElementById("container");
const baseImgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 500; i++) {
  let pokeBall = document.createElement("div");
  pokeBall.classList.add("pokemon");

  let imgPokemon = document.createElement("img");
  imgPokemon.src = `${baseImgURL}${i}.png`;

  let label = document.createElement("span");
  label.innerText = `#${i}`;

  pokeBall.appendChild(imgPokemon);
  pokeBall.appendChild(label);
  container.appendChild(pokeBall);
}
