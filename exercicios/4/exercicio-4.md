# Exercício 4: Verificar Primeira Letra Maiúscula (`checkIfTheFirstLetterIsUppercase`)

## Descrição

Sua tarefa é criar uma função que verifica se a **primeira letra** de uma string é maiúscula, retornando `true` ou `false`. A função deve ignorar caracteres não alfabéticos e considerar apenas letras (incluindo acentuadas).

### Exemplos

- `checkIfTheFirstLetterIsUppercase("Brasil")` → `true`
- `checkIfTheFirstLetterIsUppercase("mobiauto")` → `false`
- `checkIfTheFirstLetterIsUppercase("xXx xXx")` → `false`
- `checkIfTheFirstLetterIsUppercase("xDD")` → `false`
- `checkIfTheFirstLetterIsUppercase("Deu Certo!")` → `true`

## Solução

```javascript
function checkIfTheFirstLetterIsUppercase(word) {
  if (word.length === 0) return false;

  return word[0] === word[0].toUpperCase();
}

module.exports = checkIfTheFirstLetterIsUppercase;
```

### Explicação

- Primeira, é feita uma validação para verificar se a string informada é vazia. Se for vazia, retorna false.

- Depois é feita uma verificação para validar se o primeiro caractere é igual à sua versão em maiúsculas (toUpperCase()).

  - Garante que o caractere é uma letra (números ou símbolos retornam o mesmo valor em toUpperCase() e toLowerCase(), sendo descartados).

- Suporte a caracteres especiais: Funciona com letras acentuadas.

### Teste

- Para rodar um script de testes e verificar os inputs e outputs da função, rodar o comando `npm run run:checkIfTheFirstLetterIsUppercase`
