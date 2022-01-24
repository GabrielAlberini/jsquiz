import {API} from './API'


function App() {

  return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span>Pregunta 1 de </span>5 
          </div>
          <div className="titulo-pregunta">¿Como te llamas?</div>
        </div>
        <div className="lado-derecho">
          <button>Opcion 1</button>
          <button>Opcion 2</button>
          <button>Opcion 3</button>
          <button>Opcion 4</button>
        </div>
      </main>
  )
}

export default App
