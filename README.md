# petshop-antonio

Projeto iniciado através do CRA - Create React App.

Obs.: este projeto poderia ser criado também a partir do Vite.

Execução do app
Na 1ª vez, é necessário npm install para gerar node_modules (com dependências etc). E para executar, sempre use npm start e acesse localhost:3000.

Dica: desabilitar o Compact Folders do VSCode em Configurações/Settings.
Sobre Módulos CSS
O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.

Arquivos de módulo devem ser nomeados como Componente.module.css.

A importação de módulos CSS deve ser feita com import nome from "caminho-do-modulo".

Sobre Media Query
Mobile First:
Telas a partir de X tamanho (min-width)

Desktop First:
Telas de até o tamanho X (max-width)

Uso de rotas com a lib react-router-dom (versão 5)
Instalação
npm install react-router-dom@5

App.jsx
Realizar a importação dos recursos da lib: import { BrowserRouter, Route, Switch } from "react-router-dom";

Envolver todo o conteúdo do App.jsx dentro do BrowserRouter

Cada componente que funciona como "página ou tela" deve estar dentro de um <Route>.

Os <Route> devem estar dentro de um <Switch> para que aconteça a troca entre componentes ao navegar.

Obs.: não coloque nada além de <Route> no <Switch>

Sintaxe alternativa para aplicar rotas:
<Route exact path="/" component={Home}>

<Route path="/produtos" component={Produtos}>

<Route path="/sobre" component={Sobre}>

<Route path="/contato" component={Contato}>

Menu.jsx
Importar o NavLink: import { NavLink } from "react-router-dom";

Substituir a tag <a> pelo <NavLink> e o atributo href por to
