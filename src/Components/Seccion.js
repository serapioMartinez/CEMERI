import React from "react";
import Parrafo from "./Parrafo";
 function Seccion (props){
    const titulo_style={
        fontSize: "32px",
        textAlign: "left"
    }
    return (
    <div>
        {props.titulo?
        <h2 style={titulo_style}>{props.titulo}</h2>:
        false}
        {props.parrafos.map((parrafo) => {
            return <Parrafo contenido={parrafo.contenido} lista={parrafo.lista}/>
        })}
    </div>
    );
 }

 export default Seccion;