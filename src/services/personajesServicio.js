

export async function obtenerPersonaje(page) {
  

  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data =  await response.json();
//console.log(page)
//console.log(response)
  return data;
}


export async function obtenerPersonajePorId(id) {
  

  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data =  await response.json();
  console.log("id de obtenerPersonajePorId:"+id)

  return data;
}


export async function buscarPorNombre(nombre) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
  const data = await response.json();
  return data;
}
