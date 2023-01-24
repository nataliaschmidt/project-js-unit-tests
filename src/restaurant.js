/* eslint-disable max-len */

/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!
*/

// Faça os ítens de 1 a 3 no arquivo tests/restaurant.spec.js

// 4: Crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto no seguinte formato: 
//  { fetchMenu: () => objetoPassadoPorParametro }.

const menu = {
  food: { coxinha: 3.90, sanduiche: 9.90 },
  drinks: { agua: 3.90, cerveja: 6.90 },
};

const createMenu = (obj) => {
  const meuRestaurante = {
    fetchMenu: () => obj,
    consumption: [],
    order: (string) => {
      const food = Object.keys(meuRestaurante.fetchMenu().food);
      console.log(food);
      const containFood = food.some((contain) => contain === string);
      // console.log(containFood);
      const drinks = Object.keys(meuRestaurante.fetchMenu().drinks);
      const containDrink = drinks.some((contain) => contain === string);
      // console.log(containDrink);
      if (containFood === true || containDrink === true) {
        meuRestaurante.consumption.push(string);
        return meuRestaurante.consumption;
      }
      return 'Item indisponível';
    },
    pay: () => {
      let total = 0;
      let sumOrder = 0;
  // console.log(meuRestaurante.consumption);
  for (let index = 0; index < meuRestaurante.consumption.length; index += 1) {
  // console.log(meuRestaurante['consumption'][index]);
  //   console.log(meuRestaurante.fetchMenu().food[meuRestaurante['consumption'][index]]);
  //  console.log(meuRestaurante.fetchMenu().drinks[meuRestaurante['consumption'][index]]);
     if (meuRestaurante.fetchMenu().food[meuRestaurante.consumption[index]]) {
       sumOrder += meuRestaurante.fetchMenu().food[meuRestaurante.consumption[index]];
     } else if (meuRestaurante.fetchMenu().drinks[meuRestaurante.consumption[index]]) {
       sumOrder += meuRestaurante.fetchMenu().drinks[meuRestaurante.consumption[index]];
    }
  }
  total = sumOrder + (sumOrder * 10) / 100;
  return total;
    },
    };
    return meuRestaurante;
  };
// console.log(createMenu(menu));
// // eslint-disable-next-line sonarjs/no-duplicate-string
// console.log('---------------------------------');
// console.log(createMenu(menu).fetchMenu());
// console.log('---------------------------------');
// console.log(createMenu(menu).consumption);
// console.log('---------------------------------');
// console.log(createMenu(menu).order('coxinha'));

// const objetoRetornado = createMenu(menu);
// console.log(objetoRetornado.order('coxinha',));
// console.log(objetoRetornado.order('cerveja',));
// console.log('-----------------');
// console.log(objetoRetornado.pay());

// Faça o item 5 no arquivo tests/restaurant.spec.js

// 6: Adicione ao objeto retornado por `createMenu()` uma chave de nome `consumption` que, como valor inicial, tem um array vazio.

// Faça o item 7 no arquivo tests/restaurant.spec.js

// 8: Crie uma função, associada à chave 'order', que, ao receber uma string como parâmetro, adiciona essa string ao array da chave 'consumption'.
// - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
// - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
// Ex: obj.order('coxinha') --> ['coxinha']
// Ex: obj.order('picanha') --> Exibe "Item indisponível"

// Faça os ítens de 9 a 11 no arquivo tests/restaurant.spec.js

// 12: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

module.exports = createMenu;
