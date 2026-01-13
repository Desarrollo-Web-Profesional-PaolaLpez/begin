import Saludo from "./componentes/Saludo";
import Listado from "./componentes/Listado";
import datos from "./datos/datos";

const App = () => {
  return (
    <>
      <Saludo nombre="Gabriel" edad={25} />
      <Saludo nombre="Pao" edad={20} />
      <Listado datos={datos} />
    </>
  );
};

export default App;
