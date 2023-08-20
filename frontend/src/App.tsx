import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Editor from "./pages/editor";
import Share from "./pages/share";
import Examples from "./pages/examples";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/share" element={<Share />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </BrowserRouter>
  );
}
