import React from 'react'
import "./styles.scss"

const IMAGE = 'https://github.com/lalodsi/servipoda/blob/master/src/assets/images/service1.jpg?raw=true'

const CardComponent = () => {
  return (
    <div className='Card'>
        <div className="Card-Image">
            <img src={IMAGE} alt="" />
        </div>
        <div className="Card-Title">Este es un título</div>
        <div className="Card-Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum</div>
    </div>
  )
}

export default CardComponent