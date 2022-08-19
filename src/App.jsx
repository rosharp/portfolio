import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import NotFound from "./components/NotFound";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
