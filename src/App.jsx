import {useState} from 'react'
import {API} from './API'


function App() {
  const [questionCurrent, setQuestionCurrent] = useState(0)
  const [points, setPoints] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span>Pregunta {questionCurrent + 0} </span>de {API.length} 
          </div>
          <div className="titulo-pregunta">{API[questionCurrent].titulo}</div>
        </div>
        <div className="lado-derecho">
          {
            API[questionCurrent].opciones.map((respuesta, i)=> <button key={i}>{respuesta.textoRespuesta}</button>)
          }
          <button>Opcion 1</button>
        </div>
      </main>
  )
}

export default App
