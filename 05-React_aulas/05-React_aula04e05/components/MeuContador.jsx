// Estados
import { useState } from "react"

export default function MeuContador() {
    
    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador (contador + 1)
    }

    function diminuir() {
        setContador (contador - 1)
    }
    if(contador>5) {
        return (
            <div>
                <h2>Diminua ai valá</h2>
                <button onClick={diminuir}>diminuir</button>
                <button onClick={aumentar}>aumentar</button>
            </div>
        )
    }
    return (
        <div>
            <h2>Meu Contador: {contador}</h2>
            {/* Renderização condicional:
            o contador é menor que 9? SE SIM h1, SE NÃO nulo */}
            {/* { contador > 9 ? <h3>Valor muito grande</h3> : null} */}
            <button onClick={diminuir}>diminuir</button>
            <button onClick={aumentar}>aumentar</button>
        </div>
    )
}