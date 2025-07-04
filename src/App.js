import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BusinessPage from "./pages/BusinessPage";
import EntertainmentPage from "./pages/EntertainmentPage";
import GeneralPage from "./pages/GeneralPage";
import HealthPage from "./pages/HealthPage";
import SciencePage from "./pages/SciencePage";
import SportsPage from "./pages/SportsPage";
import TechnologyPage from "./pages/TechnologyPage";
import Layout from "./components/layout/Layout";
import News from "./pages/NewsDetils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="businessPage" element={<BusinessPage />} />
          <Route path="entertainmentPage" element={<EntertainmentPage />} />
          <Route path="generalPage" element={<GeneralPage />} />
          <Route path="healthPage" element={<HealthPage />} />
          <Route path="sciencePage" element={<SciencePage />} />
          <Route path="sportsPage" element={<SportsPage />} />
          <Route path="TechnologyPage" element={<TechnologyPage />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </BrowserRouter>
  );
}

export default App;
