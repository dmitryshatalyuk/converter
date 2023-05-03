import { Link } from "react-router-dom";
import image from '../../images/image.png'

export function SecondScreen() {
  return (
    <section className="convert">
      <div className="convert-wrapper section-wrapper">
        <div className="convert-left">
          <h2 className="section-title convert-title">Конвертер валют</h2>
          <p className="convert-text">
            Переважна діяльність банківської групи за останні чотири звітні
            квартали становить 50 і більше відсотків.
          </p>
          <Link to="/convert" className="btn default-btn">
            Конвертувати валюту
          </Link>
        </div>
        <div className="convert-right">
            <img className="convert-image" src={image}/>
        </div>
      </div>
    </section>
  );
}
