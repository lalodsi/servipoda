import FaqList from '@components/FaqList/'
import "@styles/Questions.scss"

interface Question{
    question: string;
    answer: string;
}

const faqs: Question[] = [
  {
    question: "¿Cuánto cuesta podar o derribar un árbol?",
    answer: "El costo depende del tamaño del árbol, su ubicación y la complejidad del trabajo. Ofrecemos cotizaciones personalizadas sin costo."
  },
  {
    question: "¿Tienen licencia o permisos para derribar árboles?",
    answer: "Sí, contamos con los permisos necesarios para realizar derribos de acuerdo con las normativas locales."
  },
  {
    question: "¿Qué pasa con los desechos del árbol después del trabajo?",
    answer: "Nos encargamos de recoger y disponer de los restos del árbol de manera adecuada."
  },
  {
    question: "¿Es necesario pedir un permiso del gobierno para podar o derribar un árbol?",
    answer: "En algunos casos sí, especialmente si se trata de especies protegidas. Podemos asesorarte y ayudarte con la gestión del permiso si es necesario."
  },
  {
    question: "¿Qué medidas de seguridad utilizan durante el trabajo?",
    answer: "Contamos con equipos de protección especializados, herramientas certificadas y personal capacitado para garantizar la seguridad de las personas, propiedades y trabajadores."
  },
  {
    question: "¿Cuánto tiempo toma podar o derribar un árbol?",
    answer: "El tiempo varía según el tamaño y la ubicación del árbol, pero la mayoría de los trabajos se completan en un día. Te daremos un estimado más preciso tras evaluar la situación."
  },
  {
    question: "¿Trabajan en áreas residenciales y comerciales?",
    answer: "Sí, ofrecemos nuestros servicios tanto en áreas residenciales como comerciales, adaptándonos a las necesidades de cada cliente."
  },
  {
    question: "¿Ofrecen algún tipo de garantía por sus servicios?",
    answer: "Sí, garantizamos un trabajo profesional y seguro. Si tienes alguna inquietud después del servicio, estaremos disponibles para atenderla."
  }
];


const Questions = () => {
  return (
    <div id='faqs'>
        <div className='FaqContainer'>
          <h2 className='FaqContainer_Header'>Preguntas Frecuentes</h2>
          <FaqList items={faqs} />
        </div>
    </div>
  )
}

export default Questions