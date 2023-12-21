import React from 'react'
import Boton from './Boton'

const Productos = ({nombre="Default namme", precio=0, cantidad=0}) => {
  return (
    <div>
    <h3>Producto: {nombre}</h3>
    <p>Precio: ${precio} </p>
    <p>Cantidad: {cantidad}</p>
    <Boton/>
    </div>
   
  )
}

export default Productos