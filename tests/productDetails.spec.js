const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(productDetails()).toBeDefined();
    // Teste se o retorno da função é um array.
    const product = productDetails('banana', 'kitkat')
    expect(true).toEqual(Array.isArray(product))
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('banana', 'kitkat').length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect('object').toEqual(typeof product[0])
    expect('object').toEqual(typeof product[1])
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('pera', 'chocolate')).not.toEqual(product);
    // Teste se os dois productIds terminam com 123.
    expect(product[0]['details']['productId']).toEqual('banana123')
    expect(product[1]['details']['productId']).toEqual('kitkat123')
  });
});
