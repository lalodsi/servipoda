import { ReactNode } from "react";
import "./styles.scss"

export interface CardComponentProps{
  children: ReactNode
}

const Card: React.FC<CardComponentProps> = (props) => {
  const {
    children
  } = props
  return (
    <div className='Card'>
        {children}
    </div>
  )
}

export default Card