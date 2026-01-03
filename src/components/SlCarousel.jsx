import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function SlCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  return (
    <div style={{ backgroundColor: '#000000', width: '100%', height: '350px', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 5 }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              border: 'none',
              margin: '0 6px',
              background: i === index ? '#ffffff' : 'rgba(255,255,255,0.35)',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>

      <Carousel
        activeIndex={index}
        onSelect={(selected) => setIndex(selected)}
        data-bs-theme="dark"
        style={{ height: '100%' }}
        indicators={false}
      >
        {images.map((img, idx) => (
          <Carousel.Item key={idx} style={{ height: '100%' }}>
            <a href="#" style={{ display: 'block', height: '100%' }}>
              <img
                className="d-block w-100"
                src={img}
                alt={`slide-${idx}`}
                style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block' }}
              />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}