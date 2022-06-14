import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
 import './Header.css'
function Header() {
  return (
    <div className='cemeri-header'>
        <div className='header-section top'>
                <input type='checkbox' id='check'/>
                <label htmlFor='check' className='checkbtn'>
                    <FontAwesomeIcon className='phone-icon' icon={faBars}  />
                </label>
            <div className='header-items'>
                <a className='top-link' href="#" style={{
                    color: "red"
                }}>
                    <FontAwesomeIcon icon={faUser}/> Login</a>
                <a className='top-link' href="#" style={{
                    color: "rgb(115, 187, 187)"
                }}><FontAwesomeIcon icon={faMagnifyingGlass} /> Busqueda</a>
            </div>
            <div>
                <a href='#'>
                    <h2 id='home-link'>CEMERI</h2>
                </a>
            </div>
            <div className='header-items'>
                <a href="#" style={{
                    color: "rgb(115, 187, 187)"
                }}><FontAwesomeIcon icon={faEnvelope} /> Registrarse</a>
            </div>
            <div id='search'>
            <a className='top-link' href="#" style={{
                    color: "rgb(115, 187, 187)"
                }}><FontAwesomeIcon className='phone-icon' icon={faMagnifyingGlass} /></a>
            </div>
        </div>
        <div className='header-section bottom'>
            <ul>
                    <li className='nav-item'>
                        <a href="#" >Articulos</a> <FontAwesomeIcon icon={faChevronDown} />
                        <ul className='sub-list' >
                            <li><a href="#">De analisis</a></li>
                            <li><a href="#">De opinion</a></li>
                            <li><a href="#">Digest Digital</a></li>
                            <li><a href="#">Reseñas</a></li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a href="#">Contenido</a> <FontAwesomeIcon icon={faChevronDown} />
                        <ul className='sub-list'>
                            <li><a href="#">Mapas</a></li>
                            <li><a href="#">Enciclopedia</a></li>
                            <li className='thrid-level-li'><a href="#">Regiones <FontAwesomeIcon icon={faChevronRight} /></a>
                                    <ul className='third-level left'>
                                        <li><a href="#">Africa del norte y Asia occidental</a></li>
                                        <li><a href="#">Africa subsahariana</a></li>
                                        <li><a href="#">Artico y antartida</a></li>
                                        <li><a href="#">Asia-Pacifico</a></li>
                                        <li><a href="#">Eurasia</a></li>
                                        <li><a href="#">Europa</a></li>
                                        <li><a href="#">Indostan</a></li>
                                        <li><a href="#">Latinoamerica y el caribe</a></li>
                                        <li><a href="#">México</a></li>
                                        <li><a href="#">Mundo</a></li>
                                        <li><a href="#">Norteamerica</a></li>
                                    </ul>
                            </li>
                            <li className='thrid-level-li'><a href="#">Temas <FontAwesomeIcon icon={faChevronRight} /></a>
                                    <ul className='third-level left'>
                                        <li><a href="#">Ciencia y tecnologia</a></li>
                                        <li><a href="#">Defensa y salud</a></li>
                                        <li><a href="#">Diplomacia</a></li>
                                        <li><a href="#">Economia y Finanzas</a></li>
                                        <li><a href="#">Energia y medioambiente</a></li>
                                        <li><a href="#">Politica y gobernanza</a></li>
                                        <li><a href="#">Sociedad</a></li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a href="#">CEMERI</a> <FontAwesomeIcon icon={faChevronDown} />
                        <ul className='sub-list'>
                            <li><a href="#">Acerca</a></li>
                            <li><a href="#">Buscador Académico</a></li>
                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a href="#">Contacto</a> <FontAwesomeIcon icon={faChevronDown} />
                        <ul className='sub-list'>
                            <li><a href="#">Convocatioria</a></li>
                            <li className='thrid-level-li'><a href="#">Redes Sociales <FontAwesomeIcon icon={faChevronRight} /></a>
                                    <ul className='third-level right'>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">Youtube</a></li>
                                    </ul>
                            </li>
                        </ul>
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Header