import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Main/>}
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
