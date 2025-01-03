import "@styles/Contact.scss"
import CardComponent, { CardComponentProps } from '@components/ContactCard'
import ContactForm from '@components/ContactForm'
import { FaWhatsapp, FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Card from "@components/Card";

const contactTypes: CardComponentProps[] = [
  { title: 'Teléfono', description: '+52 55 1234 5678', img: (<FaPhoneAlt size={100} />)},
  { title: 'Correo Electrónico', description: 'brauliosanchez@jardimax.com.mx', img: (<MdEmail size={100} />)},
  { title: 'WhatsApp', description: '+52 55 1234 5678', img: (<FaWhatsapp size={100} />)},
]

const ContactSection = () => {
  return (
    <div id="contact" className='Contact'>
        <div className="Contact-Cards">
          {
            contactTypes.map(contactData => (
            <CardComponent
              title={contactData.title}
              description={contactData.description}
              img={contactData.img}
            />))
          }
        </div>
        <div className="Contact-Form">
          <Card>
            <ContactForm />
          </Card>
        </div>
    </div>
  )
}

export default ContactSection