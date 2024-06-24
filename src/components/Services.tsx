import React, { useState } from 'react';
import '../styles/Services.scss';

const services = [
  { name: 'Poda de Árboles', image: '/src/assets/images/service1.jpg' },
  { name: 'Derribo de Árboles', image: '/src/assets/images/service2.jpg' },
  // Añade más servicios aquí
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="services">
      <div className="services-list">
        <h2>Nuestros Servicios</h2>
        <ul>
          {services.map(service => (
            <li 
              key={service.name} 
              onMouseEnter={() => setSelectedService(service.image)} 
              onMouseLeave={() => setSelectedService(null)}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="service-image">
        {selectedService && <img src={selectedService} alt="Servicio" />}
      </div>
    </section>
  );
};

export default Services;
