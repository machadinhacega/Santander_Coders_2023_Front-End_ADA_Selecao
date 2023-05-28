import { useEffect, useState } from "react"

const minhaLista = [
  { id: '1', value: 'Fruta'},
  { id: '2', value: 'Legume'},
  { id: '3', value: 'Carne'},
  { id: '4', value: 'Abobrinha'},
]

export default function App() {

  // criar uma variavel de estado para alterar dinamicamente a minha lista baseada num valor
  const [produtos, setProdutos] = useState (minhaLista)
  const [pesquisa, setPesquisa] = useState ('')
  // o hook useEffect
  // Toda vez que tenho uma atualização do meu componente, o useEffect executa
  useEffect (
    // 1º parametro do useEffect é uma função
    () => {
      // antes de definir o parametro foi criada essa condicional para:
      // SE a lista estiver preenchida, filtrar.
      // Mas SE NÃO estiver vazia, manter o valor da lista inicial
      if (pesquisa) {
        // De volta a 1ª condição. Uma função:
        // filter é uma função que permite criar uma lista nova, a partir de outra lista,mas só com os elementos que eu quero, com base em uma condição. 
        const novaLista = minhaLista.filter( (item) => {
          // pra cada item:
          // pega o valor e deixa tudo minusculo
          // verifica se o valor do item inclui (se ele tem) o que esta sendo digitado no input (na pesquisa)
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        } )
        setProdutos(novaLista)
      } else {
        setProdutos(minhaLista)
      }
    }
    // 2º parâmetro do useEffect diz quando ele deve ser executado
    // aqui ele esta alterando toda vez que 'pesquisa' for alterado
    , [pesquisa])


  return (
    <div>
      <h1>Efeitos Colaterais</h1>

      <input
      // o valor vai ser uma variável de estado
      value={pesquisa}
      // onChange é uma propriedade que permite ouvir a mudança do valor do input
      // sempre que eu escrevo, eu mudo o valor e consigo capturar esse valor com o evento
      // esse "e" é um objeto que dentro dele tem a propriedade  target value
      onChange={(e) => setPesquisa(e.target.value)}

      placeholder="Pesquise aqui"/>

      {produtos.map( (item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
    )
  } )}

    </div>
  )

}