// 'props' poderia ser quaquer coisa
export default function MeuBotao(props) {

  props.valor
  // ↑ valor passado no componente botão "Guardar o valor de 5 aqui" no App.jsx (valor = 5)
  return (
      <button>{props.conteudo}</button>
    )
  }