import "./App.css";
import CounterApp from "./components/CounterApp";
import ErrorApp from "./components/ErrorApp";
import ConditionalApp from "./components/ConditionalApp";
import ProductApp from "./components/ProductApp";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <h1>App</h1>
      <CounterApp />
      <ConditionalApp />
      <ErrorApp />
      <ProductApp />
      <ShoppingCart />
    </>
  );
}

export default App;
