import React, {useState } from "react";
import axios from "axios";

const API_URL="https://backend-fs-d-qa7b.onrender.com/api/personas";

function PersonaForm(){
    const [nombre, setNombre] = useState("");

    const guardar= async () =>{
      await axios.post(API_URL, {nombre});
      window.location.reload();
    };
    return(
      <div className="my-4">
          <input className="form-control"
                 placeholder="Nombre"
                 value={nombre}
                 onChange={e => setNombre(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={guardar}>Guardar Nombre</button>
      </div>
    );
}
export default PersonaForm;