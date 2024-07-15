import React, { useState } from 'react';
import '../styles/Services.scss';

interface service {
  name: string,
  image: string,
}

const services: service[] = [
  { name: 'Poda de árboles y palmeras de cualquier diámetro y altura', image: '/src/assets/images/service1.jpg' },
  { name: 'Derribo de árboles y palmeras de alto riesgo', image: '/src/assets/images/service2.jpg' },
  { name: 'Retiro de residuos (hojas, ramas, troncos)', image: '/src/assets/images/service3.jpg' },
  { name: 'Trámites de poda y derribo ante alcaldías y municipios', image: '/src/assets/images/service4.jpg' },
  { name: 'Fumigación y tratamiento de árboles enfermos', image: '/src/assets/images/service5.jpg' },
  { name: 'Mantenimiento preventivo y correctivo de areas verdes', image: '/src/assets/images/service6.jpg' },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="services">
      <div className='title'>
        <h2>Contamos con una extensa variedad de servicios</h2>
      </div>
      <div className="content">
        <div className="services-list">
          <ul>
            {services.map(service => (
              <li 
                key={service.name} 
                onMouseEnter={() => setSelectedService(service.image)} 
                onMouseLeave={() => null}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="service-image">
          {selectedService && <img src={selectedService} alt="Servicio" />}
        </div>
      </div>
    </section>
  );
};

export default Services;
