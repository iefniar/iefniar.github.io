import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";

import MainContent from './components/MainContent';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project-1" element={<MainContent />} />
      <Route path="/project-2" element={<MainContent />} />
    </Routes>
  );
}

export default App;