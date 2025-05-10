import { HashRouter, Navigate, Route, Routes } from "react-router";
import RootLayout from "../../ui/RootLayout/RootLayout";
import ProductsPage from "../../pages/products";
import SummaryPage from "../../pages/summary";
import CartPage from "../../pages/cart";
import NotFoundPage from "../../pages/not-found";
import CartProvider from "../../context/cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Navigate to="products" replace />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
