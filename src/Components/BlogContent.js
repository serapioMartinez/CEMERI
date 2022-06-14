import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPenNib, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import articulo from '../articulo.json'
import Seccion from "./Seccion";

import './BlogContent.css';
import Fuentes from "./Fuentes";
import { useEffect } from "react";
import News from "./News";
import Form from "./Form";

function BlogContent (){
    const referencias = () =>{
        const secciones = articulo.secciones;
        let fuentes = [];
        secciones.forEach((seccion) => {
            fuentes=[...fuentes,...(seccion.referencias)];
        })
        return fuentes;
    }
    return (
        <div className="blog-content">
            <h1 className="titulo">{articulo.titulo}</h1>
            <div className="presentacion">
                <div className="image-container">
                    <img src={articulo.imagen}/>
                </div>
                <div className="presentacion-footer">
                    <div className="social">
                        <a href={articulo.redes.facebook}><FontAwesomeIcon className="net" icon={faFacebook}/></a>
                        <a href={articulo.redes.twitter}><FontAwesomeIcon className="net" icon={faTwitter}/></a>
                        <a href={articulo.redes.faLinkedin}><FontAwesomeIcon className="net" icon={faLinkedin}/></a>
                        <a href={articulo.redes.whatsapp}><FontAwesomeIcon className="net" icon={faWhatsapp}/></a>
                        <a href={articulo.redes.mail}><FontAwesomeIcon className="net" icon={faEnvelope}/></a>
                    </div>
                    <div>
                        <span>{articulo.fecha}</span>
                    </div>
                </div>
            </div>
            <div id="secciones" className="halfy">
                {articulo.secciones.map((seccion) => {
                    return <Seccion key={Math.random()} titulo={seccion.titulo} parrafos={seccion.parrafos}/>
                })}
            </div>
            <div>
                        <a href={articulo.redes.facebook}><FontAwesomeIcon className="net" icon={faFacebook}/></a>
                        <a href={articulo.redes.twitter}><FontAwesomeIcon className="net" icon={faTwitter}/></a>
                        <a href={articulo.redes.faLinkedin}><FontAwesomeIcon className="net" icon={faLinkedin}/></a>
                        <a href={articulo.redes.whatsapp}><FontAwesomeIcon className="net" icon={faWhatsapp}/></a>
                        <a href={articulo.redes.mail}><FontAwesomeIcon className="net" icon={faEnvelope}/></a>
            </div>
            <div id="fuentes" className="halfy">
            <Fuentes author={articulo.autor} referencias={referencias()}/>
            </div>
            <div id="info-frame" className="halfy">
                <p><FontAwesomeIcon icon={faPenNib} /> Contenido apegado a The Trust Project</p>
                <p><FontAwesomeIcon icon={faCircleExclamation} /> Reportar una errata</p>
            </div>
            <div id="news">
                <News className="new"/>       
            </div>
            <div className="halfy">
                <Form />
            </div>
        </div>
    );
}
export default BlogContent;