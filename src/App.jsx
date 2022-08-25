import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Layout } from "./components/Layout";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
