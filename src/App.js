import './App.css';
import Header from './component/Header/Header';
import Products from './component/Products/Products';
import Slider from './component/Slider/Slider';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Products />
    </div>
  );
}

export default App;
