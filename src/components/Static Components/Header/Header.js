import "./header.css";
import { Logo } from "../Logo";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="header">
      <div className="navigation-wrapper header-wrapper">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
