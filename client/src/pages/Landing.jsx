import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components/index.js";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking </span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium officia nihil ullam doloremque, fugit facilis
            blanditiis. Veritatis reprehenderit voluptate blanditiis deserunt
            labore fugit. Officiis voluptatem sunt ipsum. Officiis, impedit
            voluptatum.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn register-link">
            Sign In
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
