const getRickAndMortyCharacters = require("./getRickAndMortyCharacters");

getRickAndMortyCharacters().then((characters) => {
  console.log(JSON.stringify(characters, null, 2));
});
