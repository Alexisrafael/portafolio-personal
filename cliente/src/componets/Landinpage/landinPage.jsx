import React from 'react';
import Encabezado from '../Emcabezado/Encabezado';
import est from './landinPage.module.css'

const LandinPage = () => {
    return (
        <div className={est.contenedorDeTodo}>
            <Encabezado/>
            <div className={est.contenedor}>
                <div>
                    <h1>Sobre mi</h1>
                    <p>Soy una persona que le apasiona el mundo de la programación y la capacidad de crear, y de resolver problemas a través de diversas tecnologías. Me gusta trabajar en equipo y me adapto rápido al entorno laboral para seguir aprendiendo.
                    </p>
                    <p>Me formé en Soy Henry, un bootcamp muy exigente pero que me enseñó la mayoria de las tecnologías que hoy conozco, en ese proceso desarrollé dos proyectos. Un proyecto individual en el cual puse en práctica todo lo aprendido en Henry y en el proyecto grupal el cual lo realicé con 6 compañeros más y pusimos a prueba nuevas tecnologías.</p>
                    <p>Con el proyecto grupal me pude desenvolver en nuevas tecnologías como mongo db, jwt (jsonWebToken), bcrypt y nodemailer ya que me encotraba cumpliendo el rol de backend.</p>
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
                                <img src="https://s3-ap-northeast-1.amazonaws.com/samurai-blog-media/blog/wp-content/uploads/2018/05/shutterstock_181612628-810x958.jpg" alt="Javascript" />
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
                </div>
            </div>
        </div>
    );
}
export default LandinPage;