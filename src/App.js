import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import Post from "./components/Post";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
