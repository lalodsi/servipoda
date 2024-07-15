import '../styles/BoxMessage.scss';

const message = "Ofrecemos personal calificado y tecnología adecuada para reducir costos y tiempos, garantizando un servicio eficiente y confiable."

const BoxMessage = () => {
  return (
    <div className='BoxMessageContainer'>
        <div className="BoxMessage">
            <p>{message}</p>
        </div>
    </div>
  )
}

export default BoxMessage