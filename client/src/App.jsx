import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/index";
import Experience from "./pages/Experience/index";
import Contact from "./pages/Contact/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects/>}/>

        <Route
  path="/projects/:projectId"
  element={<ProjectDetails />}
/>

<Route
  path="/experience"
  element={<Experience />}
/>

<Route
  path="/contact"
  element={<Contact />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;