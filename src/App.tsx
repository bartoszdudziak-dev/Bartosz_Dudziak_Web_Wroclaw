import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import RootLayout from "./ui/RootLayout/RootLayout";
import ProductsPage from "./pages/products";
import SummaryPage from "./pages/summary";
import CartPage from "./pages/cart";
import NotFoundPage from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
