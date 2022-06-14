import React, { useEffect } from "react";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Fuentes.css'
function Fuentes(props){
    const handleClick = ()=>{
        const ref = document.getElementById("content-ref");
        const icons = document.getElementsByClassName("icono");
        if(ref.className=="hidden") {
            ref.classList.remove("hidden");
            icons[0].classList.add("hidden");
            icons[1].classList.remove("hidden");
        }
        else{
            ref.classList.add("hidden");
            icons[0].classList.remove("hidden");
            icons[1].classList.add("hidden");
        }
    }
    return (
    <div>
        <div className="fuentes">
            <div id="expand" onClick={handleClick}><FontAwesomeIcon icon={faCaretRight} className="icono"/><FontAwesomeIcon icon={faCaretDown} className="icono hidden"/> Autor y Fuentes</div>
            <div id="content-ref" className="hidden">
                Por {props.author}
                <br/>
                {
                    props.referencias.map((fuente)=>{
                        return (<span>[] {fuente.format1} <br/></span>)
                    })
                }
                <br/>
                Referencias:
                <br/>
                {
                    props.referencias.map((fuente)=>{
                        return (<span>{fuente.format2} <br/></span>)
                    })
                }
            </div>
            <hr/>
        </div>
        <div></div>
    </div>
    );
}

export default Fuentes;