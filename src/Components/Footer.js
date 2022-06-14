import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div>
        <h1>CEMERI</h1>
        <p>Comprometidos con la verdad y el desafío que ella conlleva. Nuestra meta es develar al mundo  para una mejor toma de decisiones.</p>
        <div className='social'>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube}  className='icon'/></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram}  className='icon'/></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter}  className='icon'/></a>
        </div>
        <hr/>
        <div className='derechos'>
          <p><a>Contacto</a> <a>Politica de privacidad</a></p>
          <p>Todos los derechos reservados © CEMERI 2019 -2021</p>
        </div>
      </div>
    </div>
  )
}
export default Footer