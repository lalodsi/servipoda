import React from 'react';
import '../styles/Timeline.scss'; // Importa los estilos en Sass

type TimelineStep = {
    title: string;
    description: string;
};

const timelineSteps: TimelineStep[] = [
    {
      title: "Paso 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus animi nostrum quas ratione iure voluptatem molestias unde assumenda exercitationem aliquid eum a totam eligendi quibusdam esse sit, ducimus ab!",
    },
    {
      title: "Paso 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus animi nostrum quas ratione iure voluptatem molestias unde assumenda exercitationem aliquid eum a totam eligendi quibusdam esse sit, ducimus ab!",
    },
    {
      title: "Paso 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus animi nostrum quas ratione iure voluptatem molestias unde assumenda exercitationem aliquid eum a totam eligendi quibusdam esse sit, ducimus ab!",
    },
    {
      title: "Paso 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus animi nostrum quas ratione iure voluptatem molestias unde assumenda exercitationem aliquid eum a totam eligendi quibusdam esse sit, ducimus ab!",
    },
    {
      title: "Paso 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus animi nostrum quas ratione iure voluptatem molestias unde assumenda exercitationem aliquid eum a totam eligendi quibusdam esse sit, ducimus ab!",
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
