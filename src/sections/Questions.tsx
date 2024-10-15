import FaqList from '@components/FaqList/'
import "@styles/Questions.scss"

interface Question{
    question: string;
    answer: string;
}

const questions: Question[] = [
    {
        question: "¿Qué es el Big Bang?",
        answer: "El Big Bang es la teoría que explica el origen del universo, según la cual toda la materia y energía del universo estaban concentradas en un solo punto extremadamente denso y caliente que comenzó a expandirse hace aproximadamente 13.8 mil millones de años."
      },
      {
        question: "¿Qué es un agujero negro?",
        answer: "Un agujero negro es una región del espacio donde la gravedad es tan fuerte que nada, ni siquiera la luz, puede escapar de ella. Se forma cuando una estrella masiva colapsa al final de su ciclo de vida."
      },
      {
        question: "¿Qué es la materia oscura?",
        answer: "La materia oscura es una forma de materia que no emite, absorbe ni refleja luz, por lo que no puede ser observada directamente. Sin embargo, su existencia se infiere a partir de los efectos gravitacionales que ejerce sobre la materia visible en el universo."
      },
      {
        question: "¿Qué es la energía oscura?",
        answer: "La energía oscura es una forma de energía que se cree está impulsando la expansión acelerada del universo. Aunque no se comprende completamente, constituye aproximadamente el 68% del contenido total del universo."
      },
      {
        question: "¿Cuántas galaxias hay en el universo?",
        answer: "Se estima que hay más de 2 billones de galaxias en el universo observable. Cada galaxia contiene millones o incluso miles de millones de estrellas."
      },
      {
        question: "¿Qué es una supernova?",
        answer: "Una supernova es una explosión estelar masiva que ocurre al final del ciclo de vida de una estrella. Esta explosión libera una gran cantidad de energía y puede superar en brillo a la galaxia entera por un corto período de tiempo."
      },
      {
        question: "¿Qué es un exoplaneta?",
        answer: "Un exoplaneta es un planeta que orbita una estrella fuera de nuestro sistema solar. Hasta la fecha, se han descubierto miles de exoplanetas en la Vía Láctea."
      },
      {
        question: "¿Qué es la teoría de la relatividad?",
        answer: "La teoría de la relatividad es una teoría formulada por Albert Einstein que describe cómo el espacio y el tiempo están interrelacionados y cómo la gravedad afecta el movimiento de los objetos en el universo."
      }
]

const Questions = () => {
  return (
    <>
        <div className='FaqContainer'>
          <h2 className='FaqContainer_Header'>Preguntas Frecuentes</h2>
          <FaqList items={questions} />
        </div>
    </>
  )
}

export default Questions