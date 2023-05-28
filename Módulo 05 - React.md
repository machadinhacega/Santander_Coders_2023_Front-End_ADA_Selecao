## Módulo 01 - React
Conteúdo das aulas

_______________________________________________________________
_______________________________________________________________

### Aula 01 - Introdução e configuração de ambiente
https://www.youtube.com/watch?v=ZmSLoOJdZUQ

• Iniciando nosso projeto React:
<!-- Utilizando uma ferramenta chamada Vite para não ter que fazer toda a configuração inicial na mão. -->

criação de um projeto Vite
no terminal:

<!-- - verifica a pasta que esta:  -->
dir
<!-- - coloca o comando para criar -->
npm create vite
<!-- - confirma a instalação -->
y
<!-- - escolhe o nome do seu projeto -->
05-React
<!-- - Pede pra selecionar o framework (lembrando q react nao é um framework) -->
React 
<!-- - Escolhe a linguagem -->
JavaScript

• depois de criado ele vai dar as indicações:
<!-- entrar na pasta -->
cd 05-React
<!-- instalar as dependencias -->
npm install
<!-- execultar o projeto -->
npm run dev
 
______________

Para abrir nosso projeto basta 
1. open folder no visual studio
ou
2. escrever no terminal:
code .


_______________________________________________________________


### Aula 02 - Olá, mundo! em React
https://www.youtube.com/watch?v=FEYctXVEOoA

Com nosso projeto aberto:

• Dentro de "assets", apagamos os arquivos de estilo (.css)

→ Entramos na nossa main.jsx
<!-- Esse arquivo é nosso arquivo base/principal da aplicação-->
Removemos o import do .css

→ Entramos no nosso App.jsx
Removemos várias linhas. Ficando apenas as linhas abaixo:
<!-- 
function App() {

  return (
    <h1>Fala, cachorro!</h1>
  )
}

export default App
-->

Pronto. No nosso projeto tem apenas o retorno dessa função com a frase escrita

_______________________________________________________________


### Aula 03 - Componentes e props
https://www.youtube.com/watch?v=gv7sclB3MOY

Todos os componentes que formos criar, todas as funções, tem que estar com a primeira letra maiúscula.
Ex: function App() {return (<h1>Fala, cachorro!</h1>)}

App.jsx
esse arquivo está exportando um código
main.jsx
dentro dele eu estou importando meu arquivo App.jsx e chamando o mesmo
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)





_______________________________________________________________


### Aula 04 - Estados e eventos
https://www.youtube.com/watch?v=WE2L8ezFUk0

Hook é uma função do react
exemplo de hook: useState
<!-- import { useState } from "react" -->

<!-- const [contador, setContador] = useState(0) -->
o retorno dela é um array com 2 posições
1a é uma variavel de estado
2a recebe uma função

_______________________________________________________________


### Aula 05 - Renderização condicional
https://www.youtube.com/watch?v=O_DLeqEstyY


_______________________________________________________________


### Aula 06 - Listas e chaves
https://www.youtube.com/watch?v=h6E4s9ve9n0

_______________________________________________________________


### Aula 07 - Efeitos Colaterais
https://www.youtube.com/watch?v=pTtyke0xs3c

_______________________________________________________________


### Aula 08 - Buscando dados com fetch
https://www.youtube.com/watch?v=_s2K7lri0hM


_______________________________________________________________


### Aula 09 - Estilização com classes e CSS Modules
https://www.youtube.com/watch?v=4X5hqQ1WjpE


_______________________________________________________________


### Aula 10 - Publicando um site com Vercel
https://www.youtube.com/watch?v=qqhSHy739dY

https://vercel.com/
https://first-react-versel.vercel.app

_______________________________________________________________
