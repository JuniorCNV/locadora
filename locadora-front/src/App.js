import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Teste from "./pages/Teste";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Teste/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
