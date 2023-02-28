document.getElementById("search").addEventListener("click", searchPokemon);

const lowerCasePokemon = (name) => {
    return name.toLowerCase();
}

const capitalizeFirst = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function searchPokemon() {
    const name = document.getElementById("pokemonName").value;
    const pokeName = lowerCasePokemon(name);



    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const hp = data.stats[0].base_stat;
        const atk = data.stats[1].base_stat;
        const def = data.stats[2].base_stat;
        const spa = data.stats[3].base_stat;
        const spd = data.stats[4].base_stat;
        const speed = data.stats[5].base_stat;
        
        document.getElementById("userMsg").innerHTML = "Data retrieved!";
        document.getElementById("pokemonData").innerHTML = `
        <div class="imageWrapper">
            <img src="${data.sprites.other["official-artwork"].front_default}"
             alt="${data.name}">
        </div>
        <div class="pokeInfo">
            <h1>${capitalizeFirst(data.name)}</h1>
            <h2>Base Stats</h2>
            <p>HP: ${hp}</p>
            <p>Attack: ${atk}</p>
            <p>Defense: ${def}</p>
            <p>Special Attack: ${spa}</p>
            <p>Special Defense: ${spd}</p>
            <p>Speed: ${speed}</p>
            <p>Base Stat Total: ${hp + atk + def + spa + spd + speed}</p>
        </div>
        
        `
    })
    .catch((err) => {
        document.getElementById("userMsg").innerHTML = "Looks like we don't have that one in our records!"
    })
}