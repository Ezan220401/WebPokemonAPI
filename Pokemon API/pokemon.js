const API_URL = "https://pokeapi.co/api/v2/pokemon";

const root = document.getElementById("root");
const form = document.getElementById("addPokemonForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const pokemonName = document.getElementById("pokemonName").value;
// Memanggil API (harus memakai `..`)
  fetch(`${API_URL}/${pokemonName}`)
    .then((response) => response.json())
    .then((newPokemon) => {

    // Membuat kartu dasar
      const div = document.createElement("div");
      const image = document.createElement("img");
      const name = document.createElement("h1");
      const bio = document.createElement("p");
      
      const status = document.createElement("h3");
      const attackPoint = document.createElement("span");
      const defensePoint = document.createElement("span");
      const healthPoint = document.createElement("span");

      div.className = "card";

    // Mengambil informasi
      image.src = newPokemon.sprites.other.dream_world.front_default;
      // image.src = newPokemon.sprites.front_default; //pixel game
      name.textContent = newPokemon.name;
      bio.textContent = `Tinggi rata-rata 0.${ newPokemon.height }0 meter dan berat rata-rata 0.${ newPokemon.weight } kg`;
      
      // Membuat kelas pada span
      attackPoint.className = "attack";
      defensePoint.className = "defense";
      healthPoint.className = "health";
      
      // Memberi informasi pada span
      attackPoint.textContent =`🗡️${ newPokemon.stats.find(stat => stat.stat.name === "attack").base_stat }`;
      defensePoint.textContent =`🛡️${ newPokemon.stats.find(stat => stat.stat.name === "defense").base_stat }`;
      healthPoint.textContent =`❤️${ newPokemon.stats.find(stat => stat.stat.name === "hp").base_stat}`;
      
      // Menggabungkan dengan pan
      
      status.appendChild(document.createTextNode(" |"));
      status.appendChild(attackPoint);
      status.appendChild(document.createTextNode(" | "));
      status.appendChild(defensePoint);
      status.appendChild(document.createTextNode(" | "));
      status.appendChild(healthPoint);
      status.appendChild(document.createTextNode(" | "));

    // Menambahkan informasi pada kartu
      div.appendChild(name);
      div.appendChild(status);
      div.appendChild(image);
      div.appendChild(bio);
      root.appendChild(div);
  }).catch((error) => {
    alert('Maaf, inputan Anda tidak ditemukan pada versi ini');

  });
});