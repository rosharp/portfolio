import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Layout } from "./components/Layout";
import NotFound from "./components/NotFound";
import Resume from "./components/Resume";
import Shopit from "./components/Shopit";
import Intro from "./components/Intro";
import Rating from "./components/Rating";
import Space from "./components/Space";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="shopit" element={<Shopit />} />
            <Route path="intro" element={<Intro />} />
            <Route path="space" element={<Space />} />
            <Route path="rating" element={<Rating />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
