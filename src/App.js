import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import EcommerceHomePage from "./pages/ecommercePage/EcommerceHomePage";
import RegisterPage from "./pages/ecommercePage/RegisterPage";
import SignInPage from "./pages/ecommercePage/SignInPage";
import ItemsPage from "./pages/ecommercePage/ItemsPage";
import IndividualItemPage from "./pages/ecommercePage/IndividualItemPage";
import ShoppingCartPage from "./pages/ecommercePage/ShoppingCartPage";
import CheckoutPage from "./pages/ecommercePage/CheckoutPage";
import Success from "./pages/ecommercePage/Success";
import TravelHomePage from "./pages/travelPage/TravelHomePage";
import ScrollToTop from "./components/utilities/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-1" element={<EcommerceHomePage />} />
        <Route path="/project-1/register" element={<RegisterPage />} />
        <Route path="/project-1/sign-in" element={<SignInPage />} />
        <Route path="/project-1/items" element={<ItemsPage />} />
        <Route path="/project-1/individual-item/:itemId" element={<IndividualItemPage />} /> 
        <Route path="/project-1/cart" element={<ShoppingCartPage />} /> 
        <Route path="/project-1/checkout" element={<CheckoutPage />} /> 
        <Route path="/project-1/success" element={<Success />} /> 
        <Route path="/project-2" element={<TravelHomePage />} />
      </Routes>
    </>
  );
}

export default App;