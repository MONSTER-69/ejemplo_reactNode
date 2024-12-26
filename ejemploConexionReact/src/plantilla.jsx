import React, { useState, useEffect } from 'react';

const App = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Simular datos obtenidos de una API
    const datos = [
      { id: 1, nombre: 'Juan Pérez', cita: '2023-12-10T10:00:00', estado: 'pendiente' },
      { id: 2, nombre: 'María López', cita: '2023-12-09T11:00:00', estado: 'completada' },
      { id: 3, nombre: 'Carlos Díaz', cita: '2023-12-11T09:00:00', estado: 'pendiente' },
    ];

    // Filtrar y ordenar los pacientes con citas pendientes
    const pendientes = datos.filter(p => p.estado === 'pendiente').sort((a, b) => new Date(a.cita) - new Date(b.cita));
    setPacientes(pendientes);
  }, []);

  return (
    <div>
      <h1>Pacientes con Citas Pendientes</h1>
      <ul>
        {pacientes.map(p => (
          <li key={p.id}>
            {p.nombre} - {new Date(p.cita).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
