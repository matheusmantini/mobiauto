# Exercício 3: Buscar Personagens de Rick and Morty (`getRickAndMortyCharacters`)

## Descrição

Sua tarefa é criar uma função que consulte a [API Rick and Morty](https://rickandmortyapi.com/documentation/#rest) para resgatar dados de 5 personagens específicos e formate-os conforme o modelo de saída abaixo.

### Exemplo de Saída

```json
[
  {
    "nome": "Rick Sanchez",
    "genero": "Homem",
    "avatar": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "especie": "Humano"
  },
  {
    "nome": "Morty Smith",
    "genero": "Homem",
    "avatar": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "especie": "Humano"
  },
  {
    "nome": "Summer Smith",
    "genero": "Mulher",
    "avatar": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    "especie": "Humano"
  },
  {
    "nome": "Beth Smith",
    "genero": "Mulher",
    "avatar": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    "especie": "Humano"
  },
  {
    "nome": "Jerry Smith",
    "genero": "Homem",
    "avatar": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    "especie": "Humano"
  }
]
```

## Solução

```javascript
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
```

### Explicação

- Primeiramente, são definidos os nomes dos personagens a serem buscados.

- Depois é feito uma iteração para cada nome presente no array (characters), fazemos uma requisição GET usando fetch. (É usado 'encodeURIComponent' para tratar caracteres especiais nos nomes.)

- Então os dados são traduzimos para português. (É feita uma validação condicional para traduzir gênero e espécie e o atributo 'image' é mapeado para 'avatar')

- É feita verificação para validar se a API retornou resultados válidos (data.results) e os personagens não encontrados são ignorados (embora não ocorra com a lista fornecida).

### Teste

- Para rodar um script de testes e verificar os inputs e outputs da função, rodar o comando `npm run run:getRickAndMortyCharacters`
