async function getRickAndMortyCharacters() {
  const characters = [
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ];
  const results = [];

  for (const name of characters) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
        name
      )}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const character = data.results[0];
      results.push({
        nome: character.name,
        genero: character.gender === "Male" ? "Homem" : "Mulher",
        avatar: character.image,
        especie: character.species === "Human" ? "Humano" : character.species,
      });
    }
  }

  return results;
}

module.exports = getRickAndMortyCharacters;
