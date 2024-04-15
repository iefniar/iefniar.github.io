import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import EcommercePage from "./pages/ecommercePage/EcommercePage";

import MainContent from './components/MainContent';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project-1" element={<EcommercePage />} />
      <Route path="/project-2" element={<MainContent />} />
    </Routes>
  );
}

export default App;