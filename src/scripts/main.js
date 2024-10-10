import React, { useState, useEffect } from 'react';

const TypewriterTitle = () => {
  const titles = ['próxima aventura', 'mejor experiencia', 'viaje perfecto'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // Velocidad inicial de escritura

  useEffect(() => {
    const typeWriter = () => {
      const currentTitle = titles[currentIndex];

      if (isDeleting) {
        setText(currentTitle.substring(0, text.length - 1));
        setSpeed(50); // Velocidad al borrar
      } else {
        setText(currentTitle.substring(0, text.length + 1));
        setSpeed(150); // Velocidad al escribir
      }

      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de borrar
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length); // Cambia al siguiente título
      }
    };

    const timeoutId = setTimeout(typeWriter, speed);

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, currentIndex, speed, titles]);

  return (
    <div>
      <h1 id="h1p">Es hora de tu <br />
        <strong>{text}</strong>
      </h1>
      <p>Dejanos planearlo para vos</p>
    </div>
  );
};

export default TypewriterTitle;
