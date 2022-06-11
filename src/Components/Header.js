import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
 import './Header.css'
function Header() {
  return (
    <div className='cemeri-header'>
        <div className='header-section top'>
            <div>
                <input type='checkbox' id='check'/>
                <label htmlFor='check' className='checkbtn'>
                    <FontAwesomeIcon icon={faBars}  size="2x"/>
                </label>
            </div>
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
                    <h1 id='home-link'>CEMERI</h1>
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
                }}><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            </div>
        </div>
        <div className='header-section bottom'>
            <ul>
                    <li>
                        <a href="#" className='nav-item'>Articulos</a> <FontAwesomeIcon icon={faChevronDown} />
                        <ul className='sub-list' >
                            <li><a href="#">De analisis</a></li>
                            <li><a href="#">De opinion</a></li>
                            <li><a href="#">Digest Digital</a></li>
                            <li><a href="#">Reseñas</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className='nav-item'>Contenido</a> <FontAwesomeIcon icon={faChevronDown} />
                        <ul className='sub-list'>
                            <a href="#"><li>Mapas</li></a>
                            <a href="#"><li>Enciclopedia</li></a>
                            <a href="#"><li className='thrid-level-li'>Regiones
                                    <ul className='third-level'>
                                        <a href="#"><li>Africa del norte y Asia occidental</li></a>
                                        <a href="#"><li>Africa subsahariana</li></a>
                                        <a href="#"><li>Artico y antartida</li></a>
                                        <a href="#"><li>Asia-Pacifico</li></a>
                                        <a href="#"><li>Eurasia</li></a>
                                        <a href="#"><li>Europa</li></a>
                                        <a href="#"><li>Indostan</li></a>
                                        <a href="#"><li>Latinoamerica y el caribe</li></a>
                                        <a href="#"><li>México</li></a>
                                        <a href="#"><li>Mundo</li></a>
                                        <a href="#"><li>Norteamerica</li></a>
                                    </ul>
                            </li></a>
                            <a href="#"><li className='thrid-level-li'>Temas
                                    <ul className='third-level'>
                                        <a href="#"><li>Ciencia y tecnologia</li></a>
                                        <a href="#"><li>Defensa y salud</li></a>
                                        <a href="#"><li>Diplomacia</li></a>
                                        <a href="#"><li>Economia y Finanzas</li></a>
                                        <a href="#"><li>Energia y medioambiente</li></a>
                                        <a href="#"><li>Politica y gobernanza</li></a>
                                        <a href="#"><li>Sociedad</li></a>
                                    </ul>
                            </li></a>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className='nav-item'>CEMERI</a> <FontAwesomeIcon icon={faChevronDown} />
                        <ul className='sub-list'>
                            <a href="#"><li>Acerca</li></a>
                            <a href="#"><li>Buscador Académico</li></a>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className='nav-item'>Contacto</a> <FontAwesomeIcon icon={faChevronDown} />
                        <ul className='sub-list'>
                            <a href="#"><li>Convocatioria</li></a>
                            <a href="#">
                                <li className='thrid-level-li'>Redes Sociales
                                    <ul className='third-level'>
                                        <a href="#"><li>Instagram</li></a>
                                        <a href="#"><li>Facebook</li></a>
                                        <a href="#"><li>Linkedin</li></a>
                                        <a href="#"><li>Twitter</li></a>
                                        <a href="#"><li>Youtube</li></a>
                                    </ul>
                                </li></a>
                        </ul>
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Header