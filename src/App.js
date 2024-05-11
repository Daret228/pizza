import "./App.css";
import PizzaCard from "./components/PizzaCard";

function App() {
    return (
        <div className="App">
            <PizzaCard imgSrc="https://p2.zoon.ru/7/e/540fbe0940c088c5138f3734_5e2e8b74e2d26.jpg" 
            pizzaName="PEPERONI" description="Лучшая пицца в мире Лучшая пицца в мире Лучшая пицца в мире" price="20020" />
        </div>
    );
}

export default App;
