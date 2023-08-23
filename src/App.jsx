import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EventCards from "./components/EventCards/EventCards";

function App() {
  return (
    <div className="App">
      <Header />
      <EventCards />
      <Footer />
    </div>
  );
}

export default App;
