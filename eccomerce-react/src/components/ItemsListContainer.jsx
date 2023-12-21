import React from 'react'
import Productos from './Productos'

const ItemsListContainer = () => {
  return (
    <div>
        <h2>Bienvenidos a Gordo Random</h2>
    <div>
    </div>
    <Productos nombre='Goulash' precio= {2500} />
    <Productos nombre='Pad Thai' precio={3500}/>
    <Productos nombre='Ramen' precio={4200}/>
    </div>
  )
}

export default ItemsListContainer