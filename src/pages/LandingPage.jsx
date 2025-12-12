import './LandingPage.css';
import startImage from '../images/landing-page/start.png';

export default function LandingPage() {
  return (
    <div className = "home-container">
      <section className="section section-home">
        <img src={startImage} alt="Start logo" className="start-image" />
        {/*<div className="scroll-down">&#8595;</div>*/}
      </section>
      <section className="section section-description">
        <h2>Üdvözöljük az Attila virtuális kiállítás honlapján</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* ide jöhetnek majd a csempék */}
        <h2>Válassz témát!</h2>
      </section>
    </div>
  );
}