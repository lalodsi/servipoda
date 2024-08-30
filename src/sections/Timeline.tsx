import React from 'react';
import '../styles/Timeline.scss'; // Importa los estilos en Sass

type TimelineStep = {
    title: string;
    description: string;
};

const timelineSteps: TimelineStep[] = [
    {
      title: "Paso 1: Evaluación",
      description: "Nos sirve para determinar las estrategias a llevar en la poda o derribo.",
    },
    {
      title: "Paso 2: Cotización",
      description: "",
    },
    {
      title: "Paso 3: Planificación",
      description: "Gestión de permiso y agendar día de poda o derribo",
    },
    {
      title: "Paso 4: Ejecución",
      description: "Con estándares áltos de seguridad. Retiro de residuos (Hojas, ramas, troncos, etc.)",
    },
];

const Timeline: React.FC = () => {
  const timelineLength = timelineSteps.length
  return (
    <>
      <h2 className='timeline-header'>Nuestro Proceso</h2>
      <div className="timeline-container">
          <div className="timeline">
          {timelineSteps.map((step, index) => {
            const itemClassName = index !== timelineLength? "timeline-item" : "timeline-item_last"
            return (
              <div key={index} className={itemClassName}>
                  <div className="timeline-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                  </div>
              </div>
            )
          })}
          </div>
      </div>
    </>
  );
};

export default Timeline;
