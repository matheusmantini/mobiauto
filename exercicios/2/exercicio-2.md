# Exercício 2: Atualizar Objeto (`updateData`)

## Descrição

Sua tarefa é criar uma função `updateData` que atualize um objeto (`currentObject`) com os dados de um segundo objeto (`newDataObject`), **mantendo apenas as propriedades já existentes** no primeiro objeto. Propriedades novas no segundo objeto devem ser ignoradas.

### Exemplos

- `updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 })` →  
  `{ name: 'Marcos', country: 'Japão', age: 33 }`
- `updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15 })` →  
  `{ name: "Marcos", country: "Brasil", age: 22 }`
- `updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9 })` →  
  `{ name: "Rafael", country: "Chile", age: 42 }`

## Solução

```javascript
function updateData(currentObject, newDataObject) {
  const updatedObject = { ...currentObject };
  for (const key in newDataObject) {
    if (currentObject.hasOwnProperty(key)) {
      updatedObject[key] = newDataObject[key];
    }
  }
  return updatedObject;
}

module.exports = updateData;
```

### Explicação

- Primeiramente, é criado um novo objeto (updatedObject) com as propriedades de (currentObject) para evitar mutações diretas.

- Depois é feito uma iteração nas chaves do segundo objeto (newDataObject):

  - Verifica se a chave existe no (currentObject).
  - Se existir, atualiza o valor em (updatedObject).

- Chaves que não existem no (currentObject) são descartadas.

### Teste

- Para rodar um script de testes e verificar os inputs e outputs da função, rodar o comando `npm run run:updateData`
