import { useEffect, useState } from "react"

const tarefa = [
  {id: '1', title: 'minha primeira tarefa'},
  {id: '2', title: 'minha segunda tarefa'},
  {id: '3', title: 'minha terceira tarefa'},
  {id: '4', title: 'minha quarta tarefa'},
]


export default function App() {

  const [tarefa, setTarefas] = useState([])

  useEffect( () => {

    async function buscarDados() {
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      const resultadoFinal = await resultado.json()
      return resultadoFinal
    }

    buscarDados().then(res => setTarefas(res))

    // Esse 2º parâmetro "vazio" significa que:
    // esse useEffect só vai ser executado quando meu componente App() for renderizado 1 unica vez
  }, [])

  return (
    <div>
      <h1>Buscando Dados</h1>

      <ol>
      {tarefa.map( (tarefa) => {
        return (
          <div className="iten">
            <li key={tarefa.id}>
              {tarefa.completed ? <span><s>{tarefa.title}</s></span> : tarefa.title}

              {/* {tarefa.title} */}
              {/* {tarefa.completed ? <span><mark>Tarefa concluída</mark></span> : null} */}
            </li>
          </div>
          )
        })}
      </ol>

    </div>
  )
}