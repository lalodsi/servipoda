import { ReactNode } from "react";
import "./styles.scss"

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
    <div className='ContactCard'>
        <div className="ContactCard-Image">
          {img}
        </div>
        <div className="ContactCard-Title">{title}</div>
        <div className="ContactCard-Description">{description}</div>
    </div>
  )
}

export default CardComponent