import React, {createContext, useState} from 'react'

export const Libreria_context = createContext();

const Libreriaprovider = (props) =>{
    const [catalogo, setcatalogo]= useState(
    [
        {codigo:1,titulo:"Programación", idioma:'ESP', desactivado:false},
        {codigo:2,titulo:"Aprende Python", idioma:'ESP',desactivado:false},
        {codigo:3,titulo:"Precálculo", idioma:'ESP',desactivado:false},
        {codigo:4,titulo:"Ingenieria De Software", idioma:'ESP',desactivado:false}
    ]
    );
    
    const [wishlist, setwishlist] = useState([]);

    const Agregar=(_lib)=>{
        
        let tempcatalogo = catalogo;

        tempcatalogo = catalogo.filter(a=>a.codigo!==_lib.codigo) // Los libros no seleccionados


        let cambiandopropiedad ={ // Donde cambiaremos la propiedad del libro seleccionado
            codigo:_lib.codigo, // Misma propiedad 
            titulo:_lib.titulo, // Misma propiedad 
            idioma:_lib.idioma, // Misma propiedad 
            desactivado:true // Propiedad a cambiar
        }
        
        let todoenorden = tempcatalogo.concat(cambiandopropiedad) // Uniendo los libros no seleccionados + el libro seleccionado con la propiedad modificada

        setcatalogo(todoenorden)

        setwishlist(
            wishlist => [...wishlist,cambiandopropiedad] //
        )
    }
    
    const Eliminar=(_lib)=>{
        let eliminado = wishlist.filter(a=>a.codigo!==_lib.codigo) // La wish list pero sin el libro seleccionado
    
        let tempcatalogo = catalogo.filter(a=>a.codigo!==_lib.codigo);// Quitamos el libro seleccionado del catalogo para cambiar su propiedad
    
        let cambiandopropiedad ={ // Donde cambiaremos la propiedad del libro seleccionado
          codigo:_lib.codigo, // Misma propiedad 
          titulo:_lib.titulo, // Misma propiedad 
          idioma:_lib.idioma, // Misma propiedad 
          desactivado:false // Propiedad a cambiar
        }
    
        let todoenorden = tempcatalogo.concat(cambiandopropiedad)// Unimos 
    
        setcatalogo(todoenorden)
        setwishlist(eliminado)
    }

    return(
        <Libreria_context.Provider
            value={{
                catalogo,
                wishlist,
                Agregar,
                Eliminar                
            }}>
                {props.children}
            
        </Libreria_context.Provider>
    )
}

export default Libreriaprovider;