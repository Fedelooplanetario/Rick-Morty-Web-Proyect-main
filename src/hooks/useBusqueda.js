import { useState } from 'react';

export function useBusqueda() {
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  const realizarBusqueda = (resultados) => {
    setResultadosBusqueda(resultados);
    setBusquedaRealizada(true);
  }

  const limpiarBusqueda = () => {
    setResultadosBusqueda([]);
    setBusquedaRealizada(false);
  }

  return {
    resultadosBusqueda,
    busquedaRealizada,
    realizarBusqueda,
    limpiarBusqueda
  };
}


