import { useState, useEffect } from "react";
import Card from "./Components/Card";

function App() {
  const [casas, setCasas] = useState([]);

  useEffect(() => {
    //llamado a la API
    const llamarCasas = async () => {
      const response = await fetch("api/casas.json");
      const casasJson = await response.json();
      setCasas(casasJson.casas);
    };
    llamarCasas();
  }, []);

  return (
    <>
      <div className="row mb-2">
        <h5>Casas del mercado</h5>
      </div>
      <div className="card-group">
        {casas.map((h) => (
          <Card key={h.id} casa={h}></Card>
        ))}
      </div>
    </>
  );
}

export default App;
