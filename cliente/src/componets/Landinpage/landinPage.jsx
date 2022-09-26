import React from 'react';
import Encabezado from '../Emcabezado/Encabezado';
import est from './landinPage.module.css'
import videogames from '../../imagenes/Videogames.png';
import Nautical from '../../imagenes/nautical.png';
import Ensaladisima from '../../imagenes/Captura.png'

const LandinPage = () => {
    return (
        <div className={est.contenedorDeTodo}>
            <Encabezado/>
            <div className={est.contenedor}>
                <div>
                    <h1>Sobre Mi</h1>
                    <p>Soy una persona que le apasiona el mundo de la programación y la capacidad de crear, y de resolver problemas a través de diversas tecnologías. Me gusta trabajar en equipo y me adapto rápido al entorno laboral para seguir aprendiendo.
                    </p>
                    <p>Me formé en Soy Henry, un bootcamp muy exigente pero que me enseñó la mayoria de las tecnologías que hoy conozco, en ese proceso desarrollé dos proyectos. Un proyecto individual en el cual puse en práctica todo lo aprendido en Henry y en el proyecto grupal el cual lo realicé con 6 compañeros más y pusimos a prueba nuevas tecnologías.</p>
                    <div className={est.skill}>
                        <h1>Mis Skill</h1>
                        <div className={est.orden}>
                            <div>
                                <img src="https://portafolio-ten-rho.vercel.app/assets/w3_html5-icon.6c066d3b.svg" alt="Html" />
                            </div>
                            <div>
                                <img src="https://portafolio-ten-rho.vercel.app/assets/icons8-css3.85699db1.svg" alt="Css" />
                            </div>
                            <div>
                                <img src="https://www.tutorialslink.com/images/Codeeditor/javascript-icon.png" alt="Javascript" />
                            </div>
                            <div>
                                <img src="https://portafolio-ten-rho.vercel.app/assets/react-2.03ddbe0e.svg" alt="React" />
                            </div>
                            <div>
                                <img src="https://javascript.tutorialhorizon.com/files/2016/06/redux-logo.png" alt="Redux" />
                            </div>
                            <div>
                                <img src="https://portafolio-ten-rho.vercel.app/assets/icons8-github.40785440.svg" alt="Github" />
                            </div>
                            <div>
                                <img src="https://portafolio-ten-rho.vercel.app/assets/nodejs-icon.b7d12c95.svg" alt="Node.js" />
                            </div>
                            <div>
                                <img src="https://portafolio-ten-rho.vercel.app/assets/postgresql-icon.c2e0b4bc.svg" alt="sql" />
                            </div>
                            <div>
                                <img src="https://pluspng.com/img-png/logo-mongodb-png-mongo-db-badge-sticker-600.png" alt="Mongo db" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Mis Proyectos</h1>
                        <div className={est.proyecto}>
                            <div>
                                <h3>VideoGames</h3>
                                <a target='blanck' href='https://pi-videogames-beta.vercel.app/'>
                                    <img src={videogames} alt='VideoGames'></img>
                                </a>
                                <p>Este es un proyecto me pude desenvolver como Full Stack, ya que tuve que crear una base de datos relacional, donde almacenaba informacion suministrada por el usuario, en la misma consumi una api para mostrar en mi app, la parte del frontend se realizo con React y Redux, donde realice ordenamientosn filtros combinados y un buscador por nombre para facilitar la experiencia del usuario, tambien se agrego un apartado donde el usuario puede crear o agreagr un videojuego ya sea porque que no este o porque lo alla creado el mismo.</p>
                            </div>
                            <div>
                                <h3>Nautical</h3>
                                <a target='blanck' href='https://nuevo-pf.vercel.app/'>
                                    <img src={Nautical} alt='Nautical'></img>
                                </a>
                                <p>Con este proyecto me pude desenvolver en nuevas tecnologías como mongo db, jwt (jsonWebToken), bcrypt y nodemailer ya que me encotraba cumpliendo el rol de backend. Aqui cree una api para que fuera consumida por el frontend, esta api fue desarrollada con Node.js, Express y por una base de datos no relacional antes mensionada (Mongo DB), con la biblioteca Mongoose.</p>
                            </div>
                            {/* <div>
                                <h3>Ensaladísima</h3>
                                <a target='blanck' href='https://ensaladisima.vercel.app/'>
                                    <img src={Ensaladisima} alt='Ensaladísima'></img>
                                </a>
                                <p></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LandinPage;