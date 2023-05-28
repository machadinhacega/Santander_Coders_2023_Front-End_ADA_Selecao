import { useEffect, useState } from "react"
import styles from './button.module.css'

export default function meuContador() {

    const [contador, setContador] = useState(0)
  
    function aumentar() {
      setContador(contador +1)
    }
  
    return (
  
      <div className="container">
        <h1>Meu contador</h1>
        <h3>{contador}</h3>
        <button
        className={styles.myButton}
        onClick={aumentar}>aumentar</button>
      </div>
  
    )
  }