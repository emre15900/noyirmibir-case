import SwiperModule from './component/Swiper/SwiperModule';
import './App.css';
import Header from './component/Header/Header';
import Slider from './component/Slider/Slider';
import Videos from './component/Videos/Videos';

function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <SwiperModule />
        <Videos />
    </div>
  );
}

export default App;
