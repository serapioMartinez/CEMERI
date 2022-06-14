import React from "react";
import './Parrafo.css'
function Parrafo (props){
    return (
    <div>
        <p style={{
            textAlign: 'justify',
        }}>{props.contenido}</p>
        {(props.lista?
        <ul style={{
            width: "100%",
            textAlign: "left",
            whiteSpace: "normal",
        }}>
            {props.lista.map( (elemento) => {
                return (<li className="elemento-lista-parrafo"><p>{(elemento.contexto?<span style={{
                    fontWeight: 'bold'
                }}>{elemento.contexto}</span>:false)} {elemento.contenido}</p></li>)
            })}
        </ul>:
        false)}
        <br/>
    </div>
    );
}

export default Parrafo;