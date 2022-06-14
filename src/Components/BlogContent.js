import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import articulo from '../articulo.json'
import Seccion from "./Seccion";

import './BlogContent.css';
function BlogContent (){
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
            <div id="secciones">
                {articulo.secciones.map((seccion) => {
                    return <Seccion titulo={seccion.titulo} parrafos={seccion.parrafos}/>
                })}
            </div>
            <div>
                        <a href={articulo.redes.facebook}><FontAwesomeIcon className="net" icon={faFacebook}/></a>
                        <a href={articulo.redes.twitter}><FontAwesomeIcon className="net" icon={faTwitter}/></a>
                        <a href={articulo.redes.faLinkedin}><FontAwesomeIcon className="net" icon={faLinkedin}/></a>
                        <a href={articulo.redes.whatsapp}><FontAwesomeIcon className="net" icon={faWhatsapp}/></a>
                        <a href={articulo.redes.mail}><FontAwesomeIcon className="net" icon={faEnvelope}/></a>
            </div>
        </div>
    );
}
export default BlogContent;