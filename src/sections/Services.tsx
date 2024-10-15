import React, { useState } from 'react';
import '@styles/Services.scss';

interface service {
  name: string,
  image: string,
}

const SOURCE_LINK = "https://github.com/lalodsi/servipoda/blob/master/src/assets/images/"

const services: service[] = [
  { name: 'Poda de árboles y palmeras de cualquier diámetro y altura', image: SOURCE_LINK + 'service1.jpg?raw=true' },
  { name: 'Derribo de árboles y palmeras de alto riesgo', image: SOURCE_LINK + 'service2.jpg?raw=true' },
  { name: 'Retiro de residuos (hojas, ramas, troncos)', image: SOURCE_LINK + 'service3.jpg?raw=true' },
  { name: 'Trámites de poda y derribo ante alcaldías y municipios', image: SOURCE_LINK + 'service4.jpg?raw=true' },
  { name: 'Fumigación y tratamiento de árboles enfermos', image: SOURCE_LINK + 'service5.jpg?raw=true' },
  { name: 'Mantenimiento preventivo y correctivo de areas verdes', image: SOURCE_LINK + 'service6.jpg?raw=true' },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id='services' className="services">
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
