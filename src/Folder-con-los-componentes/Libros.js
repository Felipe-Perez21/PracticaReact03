import '../App.css';
import React, { useContext } from "react";
import { Libreria_context } from "../Context/Libreria_context";

const Libros = () =>{
    const {catalogo, Agregar } = useContext(Libreria_context);
    return(
        <div className="Libros">
          <p>*** Libros ***</p>
          <table className="table">
            
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Titulo</th>
                <th>Idioma</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {
                catalogo.map((lib,i)=>
                  <tr key={i}>
                    <td>{lib.codigo}</td>
                    <td>{lib.titulo}</td>
                    <td>{lib.idioma}</td>
                    <td><button className="btn" disabled={lib.desactivado} onClick={()=>Agregar(lib)}>Agregar (+)</button></td>
                  </tr>
                )
              }
            </tbody>

          </table>
        </div>
    )
}

export default Libros;