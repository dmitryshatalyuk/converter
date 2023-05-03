import { Link } from "react-router-dom";
import { navItems } from "../../../additional-data/navigation-items";
import { LoginIcon } from "./LoginIcon";

export function Navigation() {
  return (
    <div className="navigation-box">
      <nav className="navigation">
        <ul className="nav-list">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="nav-list__item">
                <Link to={`/${item.link}`} className="nav-link">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/login" className="nav__login-link">
          <LoginIcon /> Особистий кабінет
        </Link>
      </nav>
    </div>
  );
}
