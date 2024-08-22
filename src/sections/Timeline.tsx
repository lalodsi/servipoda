import React from 'react';
import '../styles/Timeline.scss'; // Importa los estilos en Sass

type TimelineStep = {
    title: string;
    description: string;
};

const timelineSteps: TimelineStep[] = [
    {
      title: "Fundación",
      description: "La compañía fue fundada en 2010.",
    },
    {
      title: "Primer Producto",
      description: "Lanzamiento del primer producto en 2012.",
    },
    {
      title: "Expansión Global",
      description: "Expansión a nivel global en 2015.",
    },
];

const Timeline: React.FC = () => {
  return (
    <>
        <h2>Nuestro Proceso</h2>
        <div className="timeline-container">
            <div className="timeline">
            {timelineSteps.map((step, index) => (
                <div key={index} className="timeline-item active">
                    <div className="timeline-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </>
  );
};

export default Timeline;
