import Header from "./components/Header";
import Home from "./pages/Home";
import AboutIconLink from "./components/AboutIconLink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
