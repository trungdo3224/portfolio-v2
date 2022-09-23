import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
