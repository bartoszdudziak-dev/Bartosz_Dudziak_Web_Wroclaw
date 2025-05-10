import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import RootLayout from "../../ui/RootLayout/RootLayout";
import ProductsPage from "../../pages/products";
import SummaryPage from "../../pages/summary";
import CartPage from "../../pages/cart";
import NotFoundPage from "../../pages/not-found";
import CartProvider from "../../context/cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Navigate to="products" replace />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
