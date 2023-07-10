import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<h1>This is About</h1>} />
            <Route path="projects" element={<h1>This is Project</h1>} />
            <Route path="contact" element={<h1>Contact Page</h1>} />
            <Route path="*" element={<h1>Error page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
