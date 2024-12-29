import { ReactNode } from "react";
import "./styles.scss"
import { FaWhatsapp } from "react-icons/fa";

const IMAGE = 'https://github.com/lalodsi/servipoda/blob/master/src/assets/images/service1.jpg?raw=true'

export interface CardComponentProps{
  title: string,
  img: ReactNode,
  description: string
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const {
    title,
    img,
    description
  } = props
  return (
    <div className='Card'>
        <div className="Card-Image">
          {img}
        </div>
        <div className="Card-Title">{title}</div>
        <div className="Card-Description">{description}</div>
    </div>
  )
}

export default CardComponent