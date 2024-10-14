import "../styles/Contact.scss"
import CardComponent from '../components/Card'
import ContactForm from '../components/ContactForm'

const ContactSection = () => {
  return (
    <div className='Contact'>
        <div className="Contact-Cards">
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </div>
        <div className="Contact-Form">
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactSection