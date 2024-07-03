import React from 'react';
import '../styles/CallToAction.scss';
// import companyImage from '../assets/images/company.jpg';

const CallToAction: React.FC = () => {
  return (
    <section className="call-to-action">
      {/* <img src={companyImage} alt="Empresa de Poda y Derribos" /> */}
      <div className="cta-message">
        <h1>Servipoda</h1>
        <h3>Poda y Derribo de Árboles, Control de Plagas y Abono</h3>
        <button>Contacta Ahora</button>
      </div>
    </section>
  );
};

export default CallToAction;
