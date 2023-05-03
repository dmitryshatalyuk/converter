import { Logo } from "../Logo";
import { navItems } from "../../../additional-data/navigation-items";
import { social } from "../../../additional-data/social-networks";
import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
  // console.log(navItems);
  return (
    <footer className="footer">
      <div className="navigation-wrapper footer-wrapper">
        <div className="footer-col">
          <Logo />
          <p className="footer-text footer-col__license">
            04128, м.Київ, вул. Хрещатик, 19<br></br>
            Ліцензія НБУ №156<br></br>Ⓒ ПАТ ЧіпЧендж, 2019-
            {new Date().getFullYear()}
          </p>
        </div>
        <div className="footer-col">
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="nav-list__item">
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="footer-col">
          <a href="tel:3773" className="footer-link">3773</a>
          <p className="footer-text">Цілодобова підтримка</p>
        </div>
        <div className="footer-col">
          <a href="tel:88001112233" className="footer-link">8 800 111 22 33</a>
          <p className="footer-text">
            Безкожтовно для дзвінків<br></br> в межах України
          </p>
        </div>
        <div className="footer-col">
          <ul className="social-nets">
            {social.map((item, index) => {
              return (
                <li key={index} className="social-nets__item">
                  <a href={item.link} className="social-link">
                    <img className="social-nets__icon" src={item.icon} alt={item.name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
