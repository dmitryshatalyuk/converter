import "./styles/normalize.css";
import "./styles/index.css";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { Header } from "./components/Static Components/Header/Header";
import { Footer } from "./components/Static Components/Footer/Footer";
import { HomePage } from "./components/Home page/HomePage";
import { Intro } from "./components/Static Components/FirstScreen";
import { ConvertBlock } from "./components/Converter Page/Convert";
import { PageNotFound } from "./components/Static Components/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Intro />
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/convert" element={<ConvertBlock />} />
          <Route path="*" element={<PageNotFound />} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
