import '../styles/BoxMessage.scss';
interface BoxMessageProps{
  message: string
}

const BoxMessage: React.FC<BoxMessageProps> = (props) => {
  const { message } = props
  return (
    <div className='BoxMessageContainer'>
        <div className="BoxMessage">
            <p>{message}</p>
        </div>
    </div>
  )
}

export default BoxMessage