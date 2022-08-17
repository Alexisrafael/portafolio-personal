import React from 'react'
import est from './encabezado.module.css'
import imagen from '../../imagenes/imagen.jpg'

const Encabezado = () => {
    return (
        <div className={est.fondo}>
            <div>
                <img src={imagen} alt='alexis' />
                <h3>Alexis R. Piña G.</h3>
            </div>
            <div>
                <h1>Soy un Desarollador Web Full Stack</h1>
            </div>
        </div>
    );
}

export default Encabezado;