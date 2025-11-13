import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonaForm from './components/PersonaForm';
import PersonaList from './components/PersonaList';

function App() {
  return (
  <div className="container mt-5">
  <h1 className="text-center">Crud de Personas </h1>

  <PersonaForm/>
  <PersonaList/>
  </div>

  );
}

export default App;
