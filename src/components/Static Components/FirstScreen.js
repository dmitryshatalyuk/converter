import { Link } from "react-router-dom";
import card from "../../images/card.png";
import "./intro.css";

export function Intro() {
  return (
    <section className="intro">
      <div className="section-wrapper intro-wrapper">
        <div className="intro-left">
          <h1 className="intro-title">Чіп Чендж</h1>
          <h2 className="intro-subtitle">Обмінник валют - навчальний</h2>
          <Link className="btn intro-btn" to="/convert">
            Конвертер валют
          </Link>
        </div>
        <div className="intro-right">
          <img src={card} alt="card" className="intro-image" />
        </div>
      </div>
    </section>
  );
}
