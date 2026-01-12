import './LandingPage.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Tiles from './Tiles';
import startImage from '../images/landing-page/start.png';

export default function LandingPage({ items }) {
  const location = useLocation();
  const [exploreOpen, setExploreOpen] = useState(location.state?.openTiles || false);

  // Open Tiles dialog if coming from a back navigation with state
  useEffect(() => {
    if (location.state?.openTiles) {
      setExploreOpen(true);
    }
  }, [location.state]);

  const handleExploreClick = () => {
    setExploreOpen(true);
    // Move focus away from the button to avoid aria-hidden conflict
    document.activeElement?.blur();
  };

  return (
    <>
      {!exploreOpen && (
        <div className="home-container">
          <section className="section section-home">
            <img src={startImage} alt="Start logo" className="start-image"/>
            <button className="home_button" onClick={handleExploreClick}> No lámsza! </button>
          </section>
        </div>
      )}

      <Tiles
        open={exploreOpen}
        onClose={() => setExploreOpen(false)}
        items={items}
      />
    </>
  );
}