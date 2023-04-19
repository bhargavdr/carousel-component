import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel
        containerBackgroundColor="rgba(180, 180, 180, 0.5)"
        descriptionBackgroundColor="rgba(160, 160, 160, 0.3)"
        buttonColor="rgba(242, 242, 242, 1)"
        imageHeadingColor="rgba(255, 255, 255, 1)"
        headingColor="rgba(255, 255, 255, 1)"
      />
    </div>
  );
}

export default App;
