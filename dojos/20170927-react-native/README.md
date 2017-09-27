# Dojo - React Native
> Repositório com os arquivos base para o Campinas Front-End Dojo #8.

## Setup
Esse setup seguiu o guia [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) **Quick Start**. Utilizando [create-react-native-app](https://github.com/react-community/create-react-native-app).

## Iniciando o app
```
yarn run ios
```

## Iniciando a API
```
yarn run server
```

## Desafio
1. Criar componente `Card.js` para listar lugares;
2. Obter todos os lugares pelo endereço `/places` e listá-los. Cada `Card` deve ter um link para a tela `Details/:id`;
3. Criar tela `Details.js` para exibir os detalhes de um lugar;
4. Carregar dados pelo endereço `/places/:id` e exibi-los na tela `Details.js`;
5. Fazer um formulário na tela `Details` e enviar via POST para `/booking` com os seguinte corpo:
```
{
  "checkIn": "string",
  "checkout": "string",
  "email": "string",
}
```
6. Após enviar o formulário de reserva, redirecione o usuário para a tela `Success.js`;
7. Criar tela `Success.js`;

## Endpoints

GET `http://localhost:7070/places`

```
Resposta:
[
  {
    "id": 1,
    "name": "Zen Forest House",
    "price": "R$ 221",
    "detail": "Casa inteira · 2 camas",
    "image": "https://a0.muscache.com/im/pictures/7d2d4a99-70d8-434c-9f42-a100c4de42c5.jpg?aki_policy=large",
    "rating": "5"
  },
  {
    "id": 2,
    "name": "Doce Lar - Suíte 5",
    "price": "R$ 275",
    "detail": "Flat inteiro · 2 camas",
    "image": "https://a0.muscache.com/im/pictures/8c6121a8-094e-424e-bae0-60bf37126cfd.jpg?aki_policy=large",
    "rating": "4.5"
  }
]
```

GET `http://localhost:7070/places/:id`

```
Resposta:
{
  "id": 1,
  "name": "Zen Forest House",
  "price": "R$ 221",
  "detail": "Casa inteira · 2 camas",
  "image": "https://a0.muscache.com/im/pictures/7d2d4a99-70d8-434c-9f42-a100c4de42c5.jpg?aki_policy=large",
  "rating": "5"
}
```

POST `http://localhost:7070/bookings`

```
Corpo da requisição:
{
  "checkIn": "10/10/2010",
  "checkout": "12/10/2010",
  "email": "lorem@ipsum.com",
}
```
