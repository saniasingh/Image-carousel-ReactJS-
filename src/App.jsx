import "./App.css";

import { Carousel } from "./components/Carousel";
import { slides } from "./data/carouselData.json";

function App() {
  return (
    <div className="App">
      <h1>Image Carousel</h1>

      <Carousel data={slides} />
    </div>
  );
}

export default App;
