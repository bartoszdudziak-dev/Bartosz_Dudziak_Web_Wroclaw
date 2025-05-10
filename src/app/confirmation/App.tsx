import ConfirmationPage from "@/pages/confirmation";
import RootLayout from "@/ui/RootLayout/RootLayout";
import baseName from "@/utils/consts/baseName";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="confirmation" element={<ConfirmationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
