import { Window } from "../window/window";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Blog } from "./pages/blog";

export function ContentWindow() {
  return (
    <Window>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </Window>
  );
}
