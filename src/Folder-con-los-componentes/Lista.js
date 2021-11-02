import '../App.css';
import React, { useContext } from "react";
import { Libreria_context } from "../Context/Libreria_context";

const Lista = () =>{
    const {wishlist, Eliminar}=useContext(Libreria_context);
    return(
        <div className="Lista">
        <p>*** Lista ***</p>
        {
          wishlist.length===0
          ?
          <p>No tienes libros agregados</p>
          :
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
                wishlist.map((lib,i)=>
                  <tr key={i}>
                    <td>{lib.codigo}</td>
                    <td>{lib.titulo}</td>
                    <td>{lib.idioma}</td>
                    <td><button className="btn2" onClick={()=>Eliminar(lib)}>Eliminar (-)</button></td>
                  </tr>
                )
              }
            </tbody>

          </table>
        }
        </div>
    )
}

export default Lista;