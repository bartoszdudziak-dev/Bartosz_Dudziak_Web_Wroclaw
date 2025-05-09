import ProdcutList from "./components/ProductsList";
import prodcuts from "./data/products.json";

function App() {
  return (
    <div>
      <ProdcutList products={prodcuts} />
    </div>
  );
}

export default App;
