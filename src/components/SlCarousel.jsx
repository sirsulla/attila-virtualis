import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function SlCarousel({ images = [], captions = [] }) {
  const [index, setIndex] = useState(0);
  const [overlays, setOverlays] = useState({});
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
// Reset overlay for current slide and prepare for animation
    setOverlays(prev => ({ ...prev, [index]: false }));

    // Trigger overlay descent 1 second after slide changes
    const timer = setTimeout(() => {
      setOverlays(prev => ({ ...prev, [index]: true }));
      setAnimationKey(prev => prev + 1); // Force animation replay
    }, 1000);

    return () => clearTimeout(timer);
  }, [index]);

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
          <Carousel.Item key={idx} style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
            <a href="#" style={{ display: 'block', height: '100%' }}>
              <img
                className="d-block w-100"
                src={img}
                alt={`slide-${idx}`}
                style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block' }}
              />
              </a>
              {/* Descending overlay - persists per slide */}
              {overlays[idx] && (
                <div
                key={`${idx}-${animationKey}`} // Force remount to replay animation
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '140px',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    animation: 'descendOverlay 0.6s ease-out forwards',
                    pointerEvents: 'none',
                    display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: '12px 16px',
                  boxSizing: 'border-box',
                  color: '#fff',
                  fontSize: 32,
                  lineHeight: 1.4,
                  }}
                  >
                    {captions[idx] ?? ''}
                  </div>
             
              )}
            
          </Carousel.Item>
        ))}
      </Carousel>

      <style>{`
        @keyframes descendOverlay {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
             }

        .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    top: 50%;
    transform: translateY(-50%);
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(1);
  }
      `}</style>
    </div>
  );
}