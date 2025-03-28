# Exercício 1: Mascarar uma String (`maskify`)

## Descrição

Geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone ou resposta para sua pergunta secreta ainda está correto. Para evitar que informações sensíveis sejam vistas por outras pessoas, sua tarefa é escrever uma função `maskify` que substitua todos os caracteres, exceto os últimos quatro, por `#`.

### Exemplos

- `"4556364607935616"` → `"############5616"`
- `"64607935616"` → `"######5616"`
- `"1"` → `"1"`
- `""` → `""`
- `"Skippy"` → `"##ippy"`
- `"Nanananananananananana Batman!"` → `"##########################man!"`

## Solução

```javascript
function maskify(string) {
  if (string.length <= 4) return string;
  return "#".repeat(string.length - 4) + string.slice(-4);
}

module.exports = maskify;
```

### Explicação

    - Caso o comprimento da string passada no parâmetro da função maskify for menor ou igual a 4, retorna a própria string.
    - Diferente disso, retona uma string contendo '#' até atingir o comprimento total - 4 caracteres, pois os 4 últimos caracteres serão mostrados sem o '#'.

### Teste

- Para rodar um script de testes e verificar os inputs e outputs da função, rodar o comando `npm run run:maskify`
