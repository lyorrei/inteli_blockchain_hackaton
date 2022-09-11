# InteliBlockChain - OurNeighbors

<p align="center">
<img src= "https://github.com/lyorrei/inteli_blockchain_hackaton/blob/main/src/assets/images/logo.jpeg" border="0"></img>
</p>

## 🚀 Integrantes:
 - <a href="https://www.linkedin.com/in/lyorreisquintao/">Lyorrei Shono Quintão</a>
 - <a href="https://www.linkedin.com/in/luiz-k-alencar/">Luiz Alencar</a>
 - <a href="https://www.linkedin.com/in/henriquelfmatias/">Henrique Lemos Freire Matias</a>
 - <a href="https://www.linkedin.com/in/bianca-cassemiro/">Bianca Cassemiro</a>


## 📝 Descrição 
<p align="justify"> Somos uma plataforma que fomenta a doação de Ether para institituições sociais e também um ambiente no qual investidores e doadores podem fazer matchmaking e alcançarem objetivos em comum como, por exemplo, alcançar a Governança Ambiental, Social e Corporativa(ESG) e apoiar uma causa.
<br><br>
A Our Neighbors pode atuar em todas as áreas dos Objetivos de Desenvolvimento Sustentável propostos pela ONU. Nesse sentido, nosso principal objetivo é contribuir o máximo possível para atingir a Agenda de 2030 das Nações Unidas. Sendo assim, seremos uma instituição que trará diversos benefícios não apenas para o nosso país como para o mundo.
<br><br>
Por meio da nossa solução rápida e sem burocracia, a doação deixa de ser um simples ato para o doador e passa a ser uma verdadeira experiência. Através de um modelo escalável, processo transparente por conta da blockchain e gameficado, nossa plataforma traz a atenção de grandes empresas interessadas em demonstrar preocupação com temas ESG e inúmeros doadores ao redor do mundo.
<br>
<br>
<p>Link do Projeto: <a href="https://our-neighbors.herokuapp.com/">https://our-neighbors.herokuapp.com/</a></p>
<br>

## 💻 Configuração para desenvolvimento

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1. Baixar e instalar o node.js:  [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.
3. Abra o "prompt de comando" ou o "terminal do VSCode" e na pasta raíz do repositório que acaba de ser clonado:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm run dev
```
5. Console: Servidor rodando na porta http://localhost:3000
6. Abra o navegador e pesquise por: <a href="http://localhost:3000" targer="_black">http://localhost:3000</a>
7. Se deseja compilar qualquer contrato dentro do projeto, digite o seguinte comando na pasta raíz do projeto:
```sh
npm run compile
```
8. Os contratos compilados podem ser encontrados na pasta backend/src/contracts/compiledContracts
9. Se deseja fazer o deploy do contrato factory do projeto, digite o seguinte comando na pasta raíz do projeto:
```sh
npm run deploy
```
10. Se deseja fazer o deploy de uma nova campanha, digite o seguinte comando na pasta raíz do projeto:
```sh
npm run deployCampaign
```
