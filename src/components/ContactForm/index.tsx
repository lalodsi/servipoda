import { useForm, SubmitHandler } from 'react-hook-form'
import "./styles.scss"

interface ContactForm{
  name: string,
  email: string,
  description: string
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log("Formulario enviado:", data);
    alert("¡Gracias por contactarnos! Revisaremos tu mensaje.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ContactForm">
      <h2>Contáctenos</h2>
      {/* Nombre */}
      <div className="form-group">
        <input
          className='input'
          id="name"
          type="text"
          placeholder='Nombre'
          {...register("name", { required: "El nombre es obligatorio" })}
        />
        {errors.name && <p className="errorMessage">{errors.name.message}</p>}
      </div>

      {/* Correo */}
      <div className="form-group">
        <input
          className='input'
          id="email"
          type="email"
          placeholder='Correo'
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Por favor, ingresa un correo válido",
            },
          })}
        />
        {errors.email && <p className="errorMessage">{errors.email.message}</p>}
      </div>

      {/* Descripción */}
      <div className="form-group">
        <textarea
          className='input'
          id="description"
          rows={4}
          placeholder='Descripción'
          {...register("description", {
            required: "La descripción es obligatoria",
            minLength: {
              value: 10,
              message: "La descripción debe tener al menos 10 caracteres",
            },
          })}
        ></textarea>
        {errors.description && (
          <p className="errorMessage">{errors.description.message}</p>
        )}
      </div>

      {/* Botón de envío */}
      <button type="submit" className='buttonSubmit'>Enviar</button>
    </form>
  );
};


export default ContactForm