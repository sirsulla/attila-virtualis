import './LandingPage.css';

import { useState } from 'react';
import Tiles from './Tiles';
import startImage from '../images/landing-page/start.png';

export default function LandingPage({ items }) {
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <>
      <div className="home-container">
        <section className="section section-home">
          <img src={startImage} alt="Start logo" className="start-image"/>
          <button className="home_button" onClick={() => setExploreOpen(true)}> No lámsza! </button>
        </section>
      </div>

      <Tiles
        open={exploreOpen}
        onClose={() => setExploreOpen(false)}
        items={items}
      />
    </>
  );
}