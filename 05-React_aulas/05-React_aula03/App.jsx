import MeuComponente from "./components/MeuComponente"
import MeuBotao from "./components/MeuBotao"
import ComponenteExemplo from "./components/ComponenteExemplo"

// o componente App é o componente raiz
function App() {

  return (
    <div>

      <h1>Fala, cachorro!</h1>
    <MeuComponente/>
    <MeuBotao conteudo='Me clique' />
    <MeuBotao conteudo='Clica ai' />
    {/*  No conteudo pode passar qualquer coisa. Texto, funções, valores... * */}
    <MeuBotao conteudo='Por favor'/>
    <MeuBotao conteudo = 'Guardar o valor 5 aqui' valor={5}/>

    <ComponenteExemplo image='https://occ-0-590-3212.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABa4UAEx4vGcwwHQGJ4rLB3zaYiVdZZ7lgSdgv8OAWEb34BGXEFbNumHPKAupfLMmOiOD-DIsXy5DRklM_Qk9xwIape-S7O0u67l4BYO9Ghj-.png' title='Episódio 1' subtitle='Esticando a fimose' />
    </div>
  )
}





export default App