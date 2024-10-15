import React, { useState } from 'react';
import '@styles/Services.scss';

interface service {
  name: string,
  image: [string, string],
}

const SOURCE_LINK = "https://github.com/lalodsi/servipoda/blob/master/src/assets/images/"

const FINAL_LINK = '.jpg?raw=true'

const services: service[] = [
  { name: 'Poda de árboles y palmeras de cualquier diámetro y altura', image: ['service1', 'service1-tiny'] },
  { name: 'Derribo de árboles y palmeras de alto riesgo', image: ['service2', 'service2-tiny'] },
  { name: 'Retiro de residuos (hojas, ramas, troncos)', image: ['service3', 'service3-tiny'] },
  { name: 'Trámites de poda y derribo ante alcaldías y municipios', image: ['service4', 'service4-tiny'] },
  { name: 'Fumigación y tratamiento de árboles enfermos', image: ['service5', 'service5-tiny'] },
  { name: 'Mantenimiento preventivo y correctivo de areas verdes', image: ['service6', 'service6-tiny'] },
];

const resolveLink = (src: string) => SOURCE_LINK + src + FINAL_LINK

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<[string, string] | null>(null);

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
          {selectedService && 
            <img
              src={resolveLink(selectedService[1])}
              srcSet={resolveLink(selectedService[0]) + " 600w, " + resolveLink(selectedService[1]) + " 1280w"}
              sizes='(max-width: 600px) 80vw, (max-width: 1200px) 100vw, 250vh'
              alt="Servicio"
            />
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
