import AOS from "aos";

import "./index.css";
import "aos/dist/aos.css";
import logo from "../../data/logo.png";

const Header = () => {
  AOS.init();
  return (
    <>
      <div class="main">
        <div class="logo-name">
          <img src={logo} alt="logo" class="logo" />
          <h1
            class="name"
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            Vasu
          </h1>
          <h1
            class="name"
            data-aos="fade-out"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            loves
          </h1>
          <h1
            class="name"
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            anu
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
