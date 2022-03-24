import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Footer = () => (
  <>
    <footer class="footer border-top text-muted">
      <p class="footer-thing">
        <div class="container">
          © 2022 - FizzBuzzWeb - <Link to="/privacy">Privacy</Link>
        </div>
      </p>
    </footer>
  </>
);

export default Footer;
