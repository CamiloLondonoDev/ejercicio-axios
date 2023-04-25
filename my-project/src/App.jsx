import './styles/App.css'
import { Card } from "react-bootstrap";
// import Card from './Components/Tarjeta.jsx'
import { Tarjeta } from "./Components/Tarjeta";
// import { getPokeApi } from "./Components/Tarjeta";


function App() {

  return (
    <>
      <Tarjeta/>
      <div>
        <Card />
      </div>

    </>
  )
}

export default App
