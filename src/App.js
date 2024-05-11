import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import EcommerceHomePage from "./pages/ecommercePage/EcommerceHomePage";
import ItemsPage from "./pages/ecommercePage/ItemsPage";
import IndividualItemPage from "./pages/ecommercePage/IndividualItemPage";
import ShoppingCartPage from "./pages/ecommercePage/ShoppingCartPage";
import ScrollToTop from "./components/utilities/ScrollToTop";

import MainContent from './components/MainContent';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-1" element={<EcommerceHomePage />} />
        <Route path="/project-1/items" element={<ItemsPage />} />
        <Route path="/project-1/individual-item" element={<IndividualItemPage />} /> 
        <Route path="/project-1/cart" element={<ShoppingCartPage />} /> 
        <Route path="/project-2" element={<MainContent />} />
      </Routes>
    </>
  );
}

export default App;