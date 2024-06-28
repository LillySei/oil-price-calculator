import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// @ts-ignore
import Input from "./components/Input";
// @ts-ignore
import Cards from "./components/Cards";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
