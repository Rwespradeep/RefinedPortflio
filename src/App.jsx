import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import css from "./styles/app.module.scss";
import Expertise from "./components/Expertise/Expertise";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // <div className={`bg-primary ${css.container}`}>
    //   <Header />
    //   <Hero />
    //   <Expertise />
    //   <Works />
    //   <Portfolio />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Expertise />
              <Works />
              {/* <Portfolio /> */}
              <Footer />
            </>
          }
        />
        <Route path="/expertise" element={<Expertise />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
