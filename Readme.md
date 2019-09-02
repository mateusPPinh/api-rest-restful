# API, REST E RESTFUL

CONCEITO DE API

#Vamos imaginar que estamos sentados numa mesa de um restaurante.

- Você é um (cliente) => (client)
- Então o (garçom) virá te atender, ele tem como função (pedidos, enviar o pedido até a cozinha) =>(API)
- Temos a Cozinha. (Servidor)

Acrônimo de Application Programming Interface (Interface de Programação de Aplicativos) é basicamente um conjunto de rotinas e padrões pré-estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de Campo entre as tecnologias.
- Intermediador para trocar de informações

## REST

Digamos que a gente quer um Restaurante:
Limpinho,
que nos atenda bem,
que te dê aquilo que você pediu.

Cliente
não pode chegar no restaurante gritando,
você não pode chegar no restaurante xingando.

- O quê estamos tratando aqui? Boas práticas.
- O rest determina algumas obrigações nessa transferência de dados.
- A transferência de dados se dá, geralmente, usando o protocolo HTTP.
  
Um acronimo para Represantational State Transfer (Transferência de Estado Representativo).
O que significa? É uma transferência de dados de uma maneira representativa, de uma maneira didática.

O rest delimita algumas obrigações nessas transferências de dados. Mas o que são esses dados?

São resources(recursos), uma entidade, um objeto.

### SEIS NECESSIDADES (constraints) para ser Restful

OS 6 PADRÕES SÃO:

- _Client-server_: Separação do cliente e armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando React p/ Web e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas requisições, para saber se aquele usuário está autenticado e apto para usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior, como a exemplo a Rocketseat, tem por padrão usar tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa um endpoint (final da url: http://graphql.facebook.com/youtube => youtube é o endpoint), sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, tipo o javascript, por exemplo, e executar no cliente (Backend).


## RESTFUL
Restful, é a aplicação dos padrões REST.

## Boas práticas (Codando :D).

- Utilizar os verbos HTTP para as nossas requisições
- Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA_ use um padrão.
- Não deixe barra ('/') no final do endpoint.
- Nunca deixa o cliente sem resposta, nunca.
  
  ### VERBOS HTTP:

- Verbos HTTP:
- GET: Receber dados de um resource.
- POST: Enviar dados ou informações para serem processados por um Resource
- PUT: Vai atualizar os dados um Resource.
- DELETE: Vai deletar algum Resource.

### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
- 200: OK
- 201: Created
- 204: Não tem conteúdo POST/DELETE
- 3xx: Redirection
- 4xx: Client Error
- 400: Bad request
- 404: Not Found
- 5xx: Server Error
- 500: Internal Server Error