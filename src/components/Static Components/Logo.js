import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export function Logo() {
  return (
    <Link className="logo" to="/">
      <img src={logo} alt="logo"/>
      Чіп Чендж
    </Link>
  );
}
