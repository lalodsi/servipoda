import React, { useState } from 'react';
import './styles.scss';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        {question}
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default FaqItem;
