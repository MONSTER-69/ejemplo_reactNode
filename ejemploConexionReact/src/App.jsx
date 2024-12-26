
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [clientes, setCleintes]=useState([]);

  const fetchClientes= async()=>{
    try{
      const responde = await fetch('http://localhost:3001/clientes');
      if(!responde.ok){
        throw new Error('Error al o btener datos del servidor');
      }

      const data= await responde.json()
      setCleintes(data)
    }catch(error){
      console.log('errro al pobtener los productos');
    }
  };

  useEffect(()=>{

    fetchClientes();

  }, [])

  console.log(clientes)

  return(

    <div className='container m-5'>
      <h1>clientes </h1>
      <hr />
      <div className='container'>
        {
          clientes.map((p)=>(

            <div className='card' key={p.idclientes}>
              <h3>{p.nombre}</h3>
              <p>{p.genero}</p>
              <p>{p.telefono}</p>
              <p>{p.direccion}</p>
            </div>
          ))}
      </div>


    </div>

  );



}

export default App
