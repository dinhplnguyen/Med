import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import WelcomePage from "./pages/Welcome";
import PrivacyPage from "./pages/Privacy";
import NotFoundPage from "./pages/NotFound";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<WelcomePage />} exact />
          <Route path="/privacy" element={<PrivacyPage />} exact />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
