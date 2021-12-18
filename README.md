<h1 align="center">Desafio Take Blip</h1>

## Descrição
Construir um Contato Inteligente (bot) na plataforma Blip com uma API intermediária para consumir a API do GitHub

<h3 align='center'>
<a href="#Criação-do-chatbot">Criação do chatbot</a> •
<a href="#Criação-da-API">Criação da API</a> •
<a href="#URL-do-chatbot">URL do chatbot</a> •
<a href="#URL-da-API">URL da API</a>
</h3>

## Criação do chatbot

- Criar uma conta no portal da Blip e depois criar um chatbot usando a opção "Criar do zero".
- Desenvolver o chatbot seguindo o fluxo conversacional e fazer exatamente como foi solicitado.
Nesse fluxo estão as interações e mensagens que o chatbot deve exibir.
- No fluxo conversacional existe um componente de carrossel com informações sobre o Desafio, ao clicar
nessa opção o chatbot deve listar informações sobre os 5 repositórios de linguagem C# mais antigos da Take,
ordenados de forma crescente por data de criação.
- Criar uma API que realize a integração com a API pública do GitHub.
- A imagem de cada card do carrossel deve ser o avatar da Take no GitHub. O título de cada card deve ser o
nome completo do repositório, e o subtítulo deve ser a descrição do repositório. Os cards não devem ter
nenhum botão.

IMPORTANTE -> Não tentar chamar a API do git direto pelo Builder (plataforma da Take). A chamada
da API do git tem que partir da API que você irá construir.

## Criação da API
Para criar a API solicitada, pode ser usada qualquer uma das linguagens a seguir:
- C#
- Javascript.

Para publicar a API, pode-se utilizar qualquer serviço disponível no mercado hoje. Alguns sites
que oferecem esse serviço são: Azure, Google, Amazon, Heroku, etc.

---

## URL do chatbot

O chat está disponível em: https://felipe-ventorim-mendonca-8x6x6.chat.blip.ai/?appKey=bXlib3RmbG93NDo2ZWFkNTljOC0yZWY1LTRjNDctODQwYS0yNDI2NTZmOTgyNGQ=

## URL da API

A API está publicada no Heroku em: https://api-take-challenge.herokuapp.com/
